import { useForm } from 'react-hook-form'

type GenreValues = {
  name: string
  description: string
}

const fieldClass = 'h-[52px] w-full rounded-[10px] border border-[#315bbd] bg-white px-[10px] text-[14px] font-medium text-[#19294c] placeholder:text-[#69768f] focus:outline-none focus:ring-2 focus:ring-[#315bbd]/20'
const labelClass = 'flex min-w-0 flex-col gap-[10px] text-[13px] font-semibold leading-4 text-[#19294c]'

function genreErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('DUPLICATE_GENRE')) return 'Já existe um gênero com esse nome. Confira se algum campo foi preenchido incoretamente ou atualize os dados do gênero já existente.'
  if (message.includes('GENRE_NAME_INVALID')) return 'Informe um nome válido para o gênero (de 2 a 50 caracteres).'
  if (message.includes('GENRE_DESCRIPTION_INVALID')) return 'A descrição deve ter no máximo 240 caracteres.'
  if (message.includes('NOT_AUTHENTICATED') || message.includes('SESSION_EXPIRED')) return 'Sua sessão expirou. Entre novamente.'
  return 'Não foi possível cadastrar o gênero. Confira os dados e tente novamente.'
}

export function GenreRegistrationForm({ onSuccess, onCancel }: { onSuccess: (genre: GenreValues) => void; onCancel: () => void }) {
  const form = useForm<GenreValues>({ defaultValues: { name: '', description: '' }, mode: 'onSubmit', reValidateMode: 'onChange' })
  const name = form.watch('name')
  const description = form.watch('description')

  const onSubmit = async (values: GenreValues) => {
    try {
      await window.authAPI.createGenre({ name: values.name.trim(), ...(values.description.trim() ? { description: values.description.trim() } : {}) })
      onSuccess({ name: values.name.trim(), description: values.description.trim() })
    } catch (error) {
      form.setError('root.server', { type: 'server', message: genreErrorMessage(error) })
    }
  }

  return <section className="mx-auto mt-[50px] w-full max-w-[724px] rounded-[9px] bg-white px-5 py-7 sm:px-7 lg:px-[29px] lg:pb-[39px] lg:pt-[43px]">
    <form aria-label="Cadastrar gênero" noValidate className="space-y-[12px]" onSubmit={form.handleSubmit(onSubmit, () => form.setError('root.server', { type: 'validation', message: 'Preencha o campo obrigatório para concluir o cadastro.' }))}>
      {form.formState.errors.root?.server?.message && <p role="alert" className="rounded-[7px] bg-[#FDEBEC] px-4 py-3 text-left text-[13px] leading-5 text-[#B42331]">{form.formState.errors.root.server.message}</p>}

      <label className={labelClass}>
        <span>Nome do gênero <span aria-hidden="true">*</span></span>
        <input {...form.register('name', { required: 'Informe o nome do gênero.', maxLength: { value: 50, message: 'Use no máximo 50 caracteres.' }, minLength: { value: 2, message: 'Informe pelo menos 2 caracteres.' } })} maxLength={50} placeholder="Digite o nome do gênero" className={fieldClass} aria-invalid={Boolean(form.formState.errors.name)} />
        {form.formState.errors.name && <span role="alert" className="text-[13px] font-normal text-[#B42331]">{form.formState.errors.name.message}</span>}
        <span aria-live="polite" className="-mt-1 self-end text-[11px] font-normal text-[#69768f]">{name.length}/50 caracteres</span>
      </label>

      <label className={labelClass}>
        <span>Descrição</span>
        <textarea {...form.register('description', { maxLength: { value: 240, message: 'A descrição deve ter no máximo 240 caracteres.' } })} maxLength={240} rows={4} placeholder="Escreva uma breve descrição do gênero" className="min-h-[100px] w-full resize-y rounded-[10px] border border-[#315bbd] bg-white px-[10px] py-[10px] text-[14px] leading-5 text-[#19294c] placeholder:text-[#69768f] focus:outline-none focus:ring-2 focus:ring-[#315bbd]/20" aria-invalid={Boolean(form.formState.errors.description)} />
        {form.formState.errors.description && <span role="alert" className="text-[13px] font-normal text-[#B42331]">{form.formState.errors.description.message}</span>}
        <span aria-live="polite" className="-mt-1 self-end text-[11px] font-normal text-[#69768f]">{description.length}/240 caracteres</span>
      </label>

      <div className="flex flex-col gap-4 pt-[19px] sm:flex-row sm:items-center">
        <p className="flex-1 text-[12px] leading-5 text-[#718096]">Os livros do gênero são vinculados depois, no cadastro de livros.</p>
        <div className="flex justify-end gap-3 sm:gap-[23px]">
          <button type="button" onClick={onCancel} className="h-[51px] min-w-[117px] rounded-[10px] border border-[#315bbd] bg-white px-5 text-[13px] font-semibold text-[#19294c]">Cancelar</button>
          <button type="submit" disabled={form.formState.isSubmitting} className="h-[51px] min-w-[191px] rounded-[10px] bg-[#2e56b2] px-5 text-[13px] font-semibold text-white disabled:opacity-60">{form.formState.isSubmitting ? 'Cadastrando...' : 'Cadastrar gênero'}</button>
        </div>
      </div>
    </form>
  </section>
}
