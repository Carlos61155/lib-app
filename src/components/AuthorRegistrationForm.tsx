import { useForm } from 'react-hook-form'

export type AuthorRegistrationResult = {
  name: string
  nationality: string
  pseudonym?: string
  dateOfBirth?: string
  dateOfDeath?: string
  biography?: string
}

type AuthorValues = {
  name: string
  pseudonym: string
  nationality: string
  dateOfBirth: string
  dateOfDeath: string
  biography: string
}

function formatDateInput(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 8)
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
}

function parseDate(value: string) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value)
  if (!match) return null
  const [, day, month, year] = match
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)))
  if (date.getUTCFullYear() !== Number(year) || date.getUTCMonth() !== Number(month) - 1 || date.getUTCDate() !== Number(day)) return null
  return { iso: `${year}-${month}-${day}`, date }
}

function authorErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('DUPLICATE_AUTHOR')) return 'Já existe um auor com esses dados. Confira se algum campo foi preenchido incorretamente ou atualize os dados do autor já existente.'
  if (message.includes('DATE_INVALID')) return 'Informe uma data válida no formato DD/MM/AAAA.'
  if (message.includes('DATE_CANNOT_BE_FUTURE')) return 'A data não pode estar no futuro.'
  if (message.includes('DATE_OF_DEATH_BEFORE_BIRTH')) return 'A data de falecimento deve ser posterior à data de nascimento.'
  if (message.includes('NOT_AUTHENTICATED') || message.includes('SESSION_EXPIRED')) return 'Sua sessão expirou. Entre novamente.'
  if (message.includes('PASSWORD_CHANGE_REQUIRED')) return 'Defina sua senha antes de cadastrar autores.'
  return 'Não foi possível cadastrar o autor. Confira os dados e tente novamente.'
}

const fieldClass = 'h-[44px] w-full rounded-[9px] border border-[#315bbd] bg-white px-[9px] text-[13px] font-medium text-[#19294c] placeholder:text-[#69768f] focus:outline-none focus:ring-2 focus:ring-[#315bbd]/20'
const labelClass = 'flex min-w-0 flex-col gap-[7px] text-[12px] font-semibold leading-4 text-[#19294c]'

export function AuthorRegistrationForm({ onSuccess }: { onSuccess: (author: AuthorRegistrationResult) => void }) {
  const form = useForm<AuthorValues>({
    defaultValues: { name: '', pseudonym: '', nationality: '', dateOfBirth: '', dateOfDeath: '', biography: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })
  const biography = form.watch('biography')

  const onSubmit = async (values: AuthorValues) => {
    const birth = values.dateOfBirth ? parseDate(values.dateOfBirth) : null
    const death = values.dateOfDeath ? parseDate(values.dateOfDeath) : null
    if (values.dateOfBirth && !birth) {
      form.setError('dateOfBirth', { message: 'Informe uma data válida no formato DD/MM/AAAA.' })
      return
    }
    if (values.dateOfDeath && !death) {
      form.setError('dateOfDeath', { message: 'Informe uma data válida no formato DD/MM/AAAA.' })
      return
    }
    if (birth && birth.date.getTime() > Date.now()) {
      form.setError('dateOfBirth', { message: 'A data não pode estar no futuro.' })
      return
    }
    if (death && death.date.getTime() > Date.now()) {
      form.setError('dateOfDeath', { message: 'A data não pode estar no futuro.' })
      return
    }
    if (birth && death && death.date < birth.date) {
      form.setError('root.server', { type: 'validation', message: 'Confira se algum campo foi preenchido incorretamene' })
      form.setError('dateOfDeath', { type: 'validation', message: 'A data de falecimento deve ser posterior à data de nascimento.' })
      return
    }

    try {
      await window.authAPI.createAuthor({
        name: values.name.trim(),
        ...(values.pseudonym.trim() ? { pseudonym: values.pseudonym.trim() } : {}),
        nationality: values.nationality.trim(),
        ...(birth ? { dateOfBirth: birth.iso } : {}),
        ...(death ? { dateOfDeath: death.iso } : {}),
        ...(values.biography.trim() ? { biography: values.biography.trim() } : {}),
      })
      onSuccess({
        name: values.name.trim(),
        nationality: values.nationality.trim(),
        ...(values.pseudonym.trim() ? { pseudonym: values.pseudonym.trim() } : {}),
        ...(values.dateOfBirth ? { dateOfBirth: values.dateOfBirth } : {}),
        ...(values.dateOfDeath ? { dateOfDeath: values.dateOfDeath } : {}),
        ...(values.biography.trim() ? { biography: values.biography.trim() } : {}),
      })
    } catch (error) {
      form.setError('root.server', { type: 'server', message: authorErrorMessage(error) })
    }
  }

  return <section className="mx-auto mt-[27px] w-full max-w-[724px] rounded-[9px] bg-white px-5 py-6 sm:px-7 lg:px-[29px] lg:py-[29px]">
    <form aria-label="Cadastrar autor" noValidate className="space-y-[13px]" onSubmit={form.handleSubmit(onSubmit, () => form.setError('root.server', { type: 'validation', message: 'Preencha os campos obrigatórios para concluir o cadastro' }))}>
      {form.formState.errors.root?.server?.message && <p role="alert" className="rounded-[7px] bg-[#FDEBEC] px-4 py-3 text-left text-[13px] leading-5 text-[#B42331]">{form.formState.errors.root.server.message}</p>}
      <label className={labelClass}>
        <span>Nome completo <span aria-hidden="true">*</span></span>
        <input {...form.register('name', { required: 'Informe o nome completo.', maxLength: { value: 240, message: 'Use no máximo 240 caracteres.' } })} autoFocus placeholder="Digite o nome completo" className={fieldClass} aria-invalid={Boolean(form.formState.errors.name)} />
        {form.formState.errors.name && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors.name.message}</span>}
      </label>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-[13px]">
        <label className={labelClass}><span>Nome literário / pseudônimo</span><input {...form.register('pseudonym', { maxLength: { value: 120, message: 'Use no máximo 120 caracteres.' } })} placeholder="Digite o nome literário" className={fieldClass} />{form.formState.errors.pseudonym && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors.pseudonym.message}</span>}</label>
        <label className={labelClass}>
          <span>Nacionalidade <span aria-hidden="true">*</span></span>
          <input {...form.register('nationality', { required: 'Informe a nacionalidade.', maxLength: { value: 100, message: 'Use no máximo 100 caracteres.' } })} placeholder="Digite a nacionalidade" className={fieldClass} aria-invalid={Boolean(form.formState.errors.nationality)} />
          {form.formState.errors.nationality && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors.nationality.message}</span>}
        </label>
        {(['dateOfBirth', 'dateOfDeath'] as const).map((field) => <label key={field} className={labelClass}>
          <span>{field === 'dateOfBirth' ? 'Data de nascimento' : 'Data de falecimento'}</span>
          <input {...form.register(field)} onChange={(event) => { const value = formatDateInput(event.target.value); event.target.value = value; form.setValue(field, value, { shouldDirty: true }); form.clearErrors(field) }} type="text" inputMode="numeric" autoComplete="off" placeholder="dd/mm/aaaa" maxLength={10} className={fieldClass} aria-label={field === 'dateOfBirth' ? 'Data de nascimento' : 'Data de falecimento'} aria-invalid={Boolean(form.formState.errors[field])} />
          {form.formState.errors[field] && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors[field]?.message}</span>}
        </label>)}
      </div>

      <label className={labelClass}>
        <span>Biografia resumida</span>
        <textarea {...form.register('biography', { maxLength: { value: 500, message: 'A biografia deve ter no máximo 500 caracteres.' } })} maxLength={500} rows={5} placeholder="Digite uma breve biografia" className="box-border min-h-[100px] w-full max-w-full resize-y rounded-[9px] border border-[#315bbd] bg-white px-[9px] py-[9px] text-[13px] leading-[17px] text-[#19294c] placeholder:text-[#69768f] focus:outline-none focus:ring-2 focus:ring-[#315bbd]/20" />
        <span aria-live="polite" className="self-end text-[11px] font-normal text-[#52627f]">{biography.length}/500 caracteres</span>
      </label>

      <div className="flex flex-col gap-4 pt-[5px] sm:flex-row sm:items-center">
        <p className="flex-1 text-[12px] leading-5 text-[#718096]">Vincule os livros do autor no cadastro de livros</p>
        <div className="flex justify-end gap-3 sm:gap-[15px]">
          <button type="button" onClick={() => { form.reset(); form.clearErrors() }} className="h-[42px] min-w-[106px] rounded-[9px] border border-[#315bbd] bg-white px-4 text-[12px] font-semibold text-[#19294c]">Cancelar</button>
          <button type="submit" disabled={form.formState.isSubmitting} className="h-[42px] min-w-[170px] rounded-[9px] bg-[#2e56b2] px-4 text-[12px] font-semibold text-white disabled:opacity-60">{form.formState.isSubmitting ? 'Cadastrando...' : 'Cadastrar autor'}</button>
        </div>
      </div>
    </form>
  </section>
}
