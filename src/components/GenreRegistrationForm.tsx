import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateGenreSchema } from '../../electron/genre/genre.schemas'
import { pageCardClass, pageContentClass, pageFieldClass, pageLabelClass, pagePrimaryButtonClass, pageSecondaryButtonClass } from '@/lib/pageStyles'

type GenreValues = {
  name: string
  description?: string
}

const fieldClass = pageFieldClass
const labelClass = pageLabelClass

function genreErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('DUPLICATE_GENRE')) return 'Já existe um gênero com esse nome. Confira se algum campo foi preenchido incoretamente ou atualize os dados do gênero já existente.'
  if (message.includes('GENRE_NAME_INVALID')) return 'Informe um nome válido para o gênero (de 2 a 50 caracteres).'
  if (message.includes('GENRE_DESCRIPTION_INVALID')) return 'A descrição deve ter no máximo 240 caracteres.'
  if (message.includes('NOT_AUTHENTICATED') || message.includes('SESSION_EXPIRED')) return 'Sua sessão expirou. Entre novamente.'
  return 'Não foi possível cadastrar o gênero. Confira os dados e tente novamente.'
}

export function GenreRegistrationForm({ onSuccess, onCancel }: { onSuccess: (genre: { name: string; description: string }) => void; onCancel: () => void }) {
  const form = useForm<GenreValues>({ resolver: zodResolver(CreateGenreSchema), defaultValues: { name: '', description: '' }, mode: 'onSubmit', reValidateMode: 'onChange' })
  const name = form.watch('name')
  const description = form.watch('description') ?? ''

  const onSubmit = async (values: GenreValues) => {
    try {
      await window.authAPI.createGenre({ name: values.name.trim(), ...(values.description?.trim() ? { description: values.description.trim() } : {}) })
      onSuccess({ name: values.name.trim(), description: values.description?.trim() ?? '' })
    } catch (error) {
      form.setError('root.server', { type: 'server', message: genreErrorMessage(error) })
    }
  }

  return <section className={`${pageContentClass} ${pageCardClass}`}>
    <form aria-label="Cadastrar gênero" noValidate className="space-y-[12px]" onSubmit={form.handleSubmit(onSubmit, () => form.setError('root.server', { type: 'validation', message: 'Preencha o campo obrigatório para concluir o cadastro.' }))}>
      {form.formState.errors.root?.server?.message && <p role="alert" className="rounded-[7px] bg-[#FDEBEC] px-4 py-3 text-left text-[13px] leading-5 text-[#B42331]">{form.formState.errors.root.server.message}</p>}

      <label className={labelClass}>
        <span>Nome do gênero <span aria-hidden="true">*</span></span>
        <input {...form.register('name')} maxLength={50} placeholder="Digite o nome do gênero" className={fieldClass} aria-invalid={Boolean(form.formState.errors.name)} />
        {form.formState.errors.name && <span role="alert" className="text-[13px] font-normal text-[#B42331]">{form.formState.errors.name.message}</span>}
        <span aria-live="polite" className="-mt-1 self-end text-[11px] font-normal text-[#69768f]">{name.length}/50 caracteres</span>
      </label>

      <label className={labelClass}>
        <span>Descrição</span>
        <textarea {...form.register('description')} maxLength={240} rows={4} placeholder="Escreva uma breve descrição do gênero" className="min-h-[100px] w-full resize-y rounded-[8px] border border-[#c6cedb] bg-white px-[10px] py-[9px] text-[13px] leading-[17px] text-[#19294c] placeholder:text-[#8792a5] focus:outline-none focus:ring-2 focus:ring-[#315bbd]/20" aria-invalid={Boolean(form.formState.errors.description)} />
        {form.formState.errors.description && <span role="alert" className="text-[13px] font-normal text-[#B42331]">{form.formState.errors.description.message}</span>}
        <span aria-live="polite" className="-mt-1 self-end text-[11px] font-normal text-[#69768f]">{description.length}/240 caracteres</span>
      </label>

      <div className="flex flex-col gap-3 border-t border-[#e6e9ef] pt-3 sm:flex-row sm:items-center">
        <p className="flex-1 text-[11px] leading-4 text-[#718096]">Os livros do gênero são vinculados depois, no cadastro de livros.</p>
        <div className="flex flex-col-reverse justify-end gap-2 sm:flex-row">
          <button type="button" onClick={onCancel} className={pageSecondaryButtonClass}>Cancelar</button>
          <button type="submit" disabled={form.formState.isSubmitting} className={`${pagePrimaryButtonClass} min-w-[150px]`}>{form.formState.isSubmitting ? 'Cadastrando...' : 'Cadastrar gênero'}</button>
        </div>
      </div>
    </form>
  </section>
}
