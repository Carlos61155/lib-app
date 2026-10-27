import { useEffect, useMemo, useState } from 'react'
import { useForm, type Resolver } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { z } from 'zod'
import { CreateBookSchema } from '../../electron/book/book.schemas'

type BookValues = {
  title: string
  subTitle: string
  authorIds: string[]
  genreIds: string[]
  isbn: string
  publisher: string
  yearOfPublication: string
  edition: string
  numberOfPages: string
  language: string
  synopsis: string
}
type ParsedBookValues = z.infer<typeof CreateBookSchema>
type TextFieldName = Exclude<keyof BookValues, 'authorIds' | 'genreIds'>
type Choice = { id: string; name: string }
type Cover = { token: string; fileName: string; previewDataUrl: string }
export type BookRegistrationResult = Pick<BookValues, 'title' | 'subTitle' | 'isbn' | 'publisher' | 'yearOfPublication' | 'edition' | 'numberOfPages' | 'language' | 'synopsis'> & { authors: string[]; genres: string[]; coverName?: string }

const inputClass = 'h-[44px] w-full rounded-[9px] border border-[#315bbd] bg-white px-[10px] text-[13px] font-medium text-[#19294c] placeholder:text-[#69768f] focus:outline-none focus:ring-2 focus:ring-[#315bbd]/20'
const labelClass = 'flex min-w-0 flex-col gap-[7px] text-[12px] font-semibold leading-4 text-[#19294c]'

function bookErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('DUPLICATE_BOOK')) return 'Já existe um livro com esse ISBN. Confira se algum campo foi preenchido incorretamente ou atualize os dados do livro já existente.'
  if (message.includes('BOOK_COVER_TOO_LARGE')) return 'A imagem da capa deve ter no máximo 5 MB.'
  if (message.includes('BOOK_COVER_FORMAT_INVALID')) return 'Formato de capa inválido. Envie uma imagem JPG, PNG ou WebP.'
  if (message.includes('BOOK_COVER_TOKEN_INVALID')) return 'Não foi possível carregar a capa selecionada. Selecione a imagem novamente.'
  if (message.includes('BOOK_ISBN_INVALID') || message.includes('BOOK_YEAR_INVALID') || message.includes('BOOK_YEAR_CANNOT_BE_FUTURE')) return 'Confira se algum campo foi preenchido incorretamente'
  if (message.includes('BOOK_TITLE_INVALID')) return 'Informe um título válido para o livro.'
  if (message.includes('BOOK_PUBLISHER_INVALID')) return 'Informe uma editora válida.'
  if (message.includes('BOOK_NUMBER_OF_PAGES_INVALID')) return 'Informe um número de páginas válido.'
  if (message.includes('BOOK_AUTHOR_INACTIVE_OR_NOT_FOUND')) return 'Um dos autores selecionados não está mais disponível. Atualize a seleção.'
  if (message.includes('BOOK_GENRE_INACTIVE_OR_NOT_FOUND')) return 'Um dos gêneros selecionados não está mais disponível. Atualize a seleção.'
  if (message.includes('BOOK_AUTHORS_INVALID')) return 'Selecione pelo menos um autor válido.'
  if (message.includes('BOOK_GENRES_INVALID')) return 'Selecione pelo menos um gênero válido.'
  if (message.includes('NOT_AUTHENTICATED') || message.includes('SESSION_EXPIRED')) return 'Sua sessão expirou. Entre novamente.'
  return 'Não foi possível cadastrar o livro. Confira os dados e tente novamente.'
}

function SearchMultiSelect({ label, placeholder, choices, selectedIds, onChange, error }: {
  label: string
  placeholder: string
  choices: Choice[]
  selectedIds: string[]
  onChange: (ids: string[]) => void
  error?: string
}) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const selected = choices.filter((choice) => selectedIds.includes(choice.id))
  const available = choices.filter((choice) => !selectedIds.includes(choice.id) && choice.name.toLocaleLowerCase('pt-BR').includes(query.trim().toLocaleLowerCase('pt-BR')))

  return <div className={labelClass}>
    <span>{label} <span aria-hidden="true">*</span></span>
    <div className="relative">
      <div className={`flex min-h-[44px] w-full items-center gap-2 rounded-[9px] border bg-white px-[10px] ${error ? 'border-[#B42331]' : 'border-[#315bbd]'}`}>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[14px] shrink-0 text-[#718096]" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10.8" cy="10.8" r="6.5" /><path d="m16 16 4.2 4.2" /></svg>
        {selected.length > 0 && <div className="flex max-w-[55%] flex-wrap gap-1">{selected.map((choice) => <span key={choice.id} className="inline-flex max-w-full items-center gap-1 rounded border border-[#315bbd] bg-[#edf2fc] px-1.5 py-1 text-[11px] text-[#19294c]">{choice.name}<button type="button" aria-label={`Remover ${choice.name}`} onClick={() => onChange(selectedIds.filter((id) => id !== choice.id))} className="font-bold text-[#52627f]">×</button></span>)}</div>}
        <input value={query} onChange={(event) => setQuery(event.target.value)} onFocus={() => setIsOpen(true)} onBlur={() => window.setTimeout(() => setIsOpen(false), 140)} onKeyDown={(event) => { if (event.key === 'Escape') setIsOpen(false); if (event.key === 'Enter' && available[0]) { event.preventDefault(); onChange([...selectedIds, available[0].id]); setQuery('') } }} placeholder={selected.length ? 'Adicionar mais' : placeholder} className="min-w-0 flex-1 bg-transparent text-[13px] font-medium text-[#19294c] outline-none placeholder:text-[#69768f]" aria-label={`Buscar ${label.toLocaleLowerCase('pt-BR')}`} aria-expanded={isOpen} />
      </div>
      {isOpen && <div className="absolute z-20 mt-1 max-h-48 w-full overflow-y-auto rounded-[8px] border border-[#d4dae5] bg-white py-1 shadow-lg" role="listbox" aria-label={label}>
        {available.length ? available.slice(0, 50).map((choice) => <button key={choice.id} type="button" role="option" aria-selected={false} onMouseDown={(event) => event.preventDefault()} onClick={() => { onChange([...selectedIds, choice.id]); setQuery('') }} className="block w-full px-3 py-2 text-left text-[13px] font-normal text-[#19294c] hover:bg-[#f1f4fa]">{choice.name}</button>) : <p className="px-3 py-2 text-[12px] font-normal text-[#718096]">{choices.length ? 'Nenhum resultado encontrado.' : 'Nenhum registro disponível.'}</p>}
      </div>}
    </div>
    {error && <span role="alert" className="font-normal text-[#B42331]">{error}</span>}
  </div>
}

export function BookRegistrationForm({ onSuccess, onCancel }: { onSuccess: (book: BookRegistrationResult) => void; onCancel: () => void }) {
  const form = useForm<BookValues, unknown, ParsedBookValues>({ resolver: zodResolver(CreateBookSchema) as unknown as Resolver<BookValues, unknown, ParsedBookValues>, defaultValues: { title: '', subTitle: '', authorIds: [], genreIds: [], isbn: '', publisher: '', yearOfPublication: '', edition: '', numberOfPages: '', language: '', synopsis: '' }, mode: 'onSubmit', reValidateMode: 'onChange' })
  const [authors, setAuthors] = useState<Choice[]>([])
  const [genres, setGenres] = useState<Choice[]>([])
  const [cover, setCover] = useState<Cover | null>(null)
  const [isLoadingChoices, setIsLoadingChoices] = useState(true)
  const [choicesError, setChoicesError] = useState('')
  const authorIds = form.watch('authorIds')
  const genreIds = form.watch('genreIds')
  form.register('authorIds', { validate: (ids) => ids.length > 0 || 'Selecione pelo menos um autor.' })
  form.register('genreIds', { validate: (ids) => ids.length > 0 || 'Selecione pelo menos um gênero.' })
  const selectedAuthors = useMemo(() => authors.filter((author) => authorIds.includes(author.id)).map((author) => author.name), [authors, authorIds])
  const selectedGenres = useMemo(() => genres.filter((genre) => genreIds.includes(genre.id)).map((genre) => genre.name), [genres, genreIds])

  useEffect(() => {
    let cancelled = false
    Promise.all([window.authAPI.listActiveAuthors(), window.authAPI.listActiveGenres()]).then(([authorList, genreList]) => {
      if (cancelled) return
      setAuthors(authorList)
      setGenres(genreList)
      setChoicesError('')
    }).catch(() => {
      if (!cancelled) setChoicesError('Não foi possível carregar autores e gêneros. Tente novamente.')
    }).finally(() => { if (!cancelled) setIsLoadingChoices(false) })
    return () => { cancelled = true }
  }, [])

  const selectCover = async () => {
    form.clearErrors('root.server')
    try {
      const nextCover = await window.authAPI.selectBookCover()
      if (!nextCover) return
      if (cover) await window.authAPI.discardBookCover(cover.token)
      setCover(nextCover)
    } catch (error) {
      form.setError('root.server', { type: 'server', message: bookErrorMessage(error) })
    }
  }

  const removeCover = async () => {
    if (cover) await window.authAPI.discardBookCover(cover.token).catch(() => undefined)
    setCover(null)
  }

  const onSubmit = async (values: ParsedBookValues) => {
    const optionalTextValue = (value: unknown) =>
      typeof value === 'string' ? value.trim() : ''
    const title = optionalTextValue(values.title)
    const isbn = optionalTextValue(values.isbn)
    const publisher = optionalTextValue(values.publisher)
    const subTitle = optionalTextValue(values.subTitle)
    const edition = optionalTextValue(values.edition)
    const language = optionalTextValue(values.language)
    const synopsis = optionalTextValue(values.synopsis)
    const numberOfPages = values.numberOfPages == null
      ? ''
      : String(values.numberOfPages)

    try {
      await window.authAPI.createBook({
        title,
        isbn,
        publisher,
        yearOfPublication: values.yearOfPublication,
        authorIds: values.authorIds,
        genreIds: values.genreIds,
        ...(subTitle ? { subTitle } : {}),
        ...(edition ? { edition } : {}),
        ...(numberOfPages ? { numberOfPages } : {}),
        ...(language ? { language } : {}),
        ...(synopsis ? { synopsis } : {}),
        ...(cover ? { coverToken: cover.token } : {}),
      })
      onSuccess({ title, subTitle, isbn, publisher, yearOfPublication: String(values.yearOfPublication), edition, numberOfPages, language, synopsis, authors: selectedAuthors, genres: selectedGenres, ...(cover ? { coverName: cover.fileName } : {}) })
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      form.setError('root.server', { type: 'server', message: bookErrorMessage(error) })
      if (message.includes('BOOK_ISBN_INVALID')) form.setError('isbn', { type: 'server', message: 'ISBN inválido' })
      if (message.includes('BOOK_YEAR_CANNOT_BE_FUTURE')) form.setError('yearOfPublication', { type: 'server', message: 'O ano de publicação não pode ser futuro' })
      if (message.includes('BOOK_YEAR_INVALID')) form.setError('yearOfPublication', { type: 'server', message: 'Informe um ano válido.' })
    }
  }

  const handleCancel = async () => {
    await removeCover()
    onCancel()
  }

  const textInput = (name: TextFieldName, label: string, placeholder: string, options: { required?: string; type?: string; maxLength?: number; inputMode?: 'numeric' | 'text'; validate?: (value: string) => true | string } = {}) => <label className={labelClass}>
    <span>{label}{options.required && <> <span aria-hidden="true">*</span></>}</span>
    <input {...form.register(name, { ...(options.required ? { required: options.required } : {}), ...(options.maxLength ? { maxLength: { value: options.maxLength, message: `Use no máximo ${options.maxLength} caracteres.` } } : {}), ...(options.validate ? { validate: options.validate } : {}) })} type={options.type ?? 'text'} inputMode={options.inputMode} maxLength={options.maxLength} placeholder={placeholder} className={inputClass} aria-invalid={Boolean(form.formState.errors[name])} />
    {form.formState.errors[name]?.message && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors[name]?.message}</span>}
  </label>

  return <section className="mx-auto mt-[27px] w-full max-w-[900px] rounded-[9px] bg-white px-5 py-6 sm:px-7 lg:px-[29px] lg:py-[29px]">
    <form aria-label="Cadastrar livro" noValidate className="space-y-[13px]" onSubmit={form.handleSubmit(onSubmit, (errors) => form.setError('root.server', { type: 'validation', message: errors.isbn || errors.yearOfPublication ? 'Confira se algum campo foi preenchido incorretamente' : 'Preencha os campos obrigatórios para concluir o cadastro.' }))}>
      {form.formState.errors.root?.server?.message && <p role="alert" className="rounded-[7px] bg-[#FDEBEC] px-4 py-3 text-left text-[13px] leading-5 text-[#B42331]">{form.formState.errors.root.server.message}</p>}
      {choicesError && <p role="alert" className="rounded-[7px] bg-[#FDEBEC] px-4 py-3 text-left text-[13px] leading-5 text-[#B42331]">{choicesError}</p>}
      {isLoadingChoices && <p role="status" className="text-[12px] text-[#718096]">Carregando autores e gêneros...</p>}
      <div className="grid grid-cols-1 gap-x-5 gap-y-[13px] sm:grid-cols-2 sm:gap-x-[13px]">
        <div className="sm:col-span-2">{textInput('title', 'Título', 'Digite o título', { required: 'Informe o título.', maxLength: 300 })}</div>
        <div className="sm:col-span-2">{textInput('subTitle', 'Subtítulo', 'Digite o subtítulo', { maxLength: 300 })}</div>
        <SearchMultiSelect label="Autores" placeholder="Buscar autor por nome" choices={authors} selectedIds={authorIds} onChange={(ids) => form.setValue('authorIds', ids, { shouldValidate: true, shouldDirty: true })} error={form.formState.errors.authorIds?.message} />
        <SearchMultiSelect label="Gêneros" placeholder="Buscar gênero por nome" choices={genres} selectedIds={genreIds} onChange={(ids) => form.setValue('genreIds', ids, { shouldValidate: true, shouldDirty: true })} error={form.formState.errors.genreIds?.message} />
        <div>{textInput('isbn', 'ISBN', '978-0-00-000000-0', { maxLength: 20 })}</div>
        <div>{textInput('publisher', 'Editora', 'Digite a editora', { required: 'Informe a editora.', maxLength: 200 })}</div>
        <div>{textInput('yearOfPublication', 'Ano de publicação', 'aaaa', { type: 'number', inputMode: 'numeric' })}</div>
        <div>{textInput('edition', 'Edição', 'Ex.: 2ª edição', { maxLength: 50 })}</div>
        <div>{textInput('numberOfPages', 'Número de páginas', 'Digite o número de páginas', { type: 'number', inputMode: 'numeric' })}</div>
        <div>{textInput('language', 'Idioma', 'Digite o idioma', { maxLength: 50 })}</div>
        <label className={`${labelClass} sm:col-span-1`}>
          <span>Sinopse</span>
          <textarea {...form.register('synopsis', { maxLength: { value: 5000, message: 'A sinopse deve ter no máximo 5000 caracteres.' } })} rows={4} maxLength={5000} placeholder="Escreva um resumo do livro" className="min-h-[100px] w-full resize-y rounded-[9px] border border-[#315bbd] bg-white px-[10px] py-[10px] text-[13px] leading-[17px] text-[#19294c] placeholder:text-[#69768f] focus:outline-none focus:ring-2 focus:ring-[#315bbd]/20" aria-invalid={Boolean(form.formState.errors.synopsis)} />
          {form.formState.errors.synopsis && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors.synopsis.message}</span>}
        </label>
        <div className={labelClass}>
          <span>Capa</span>
          {cover ? <div className="flex min-h-[100px] items-center gap-3 rounded-[9px] border border-dashed border-[#c5cad5] p-3">
            <img src={cover.previewDataUrl} alt="Prévia da capa do livro" className="h-[76px] w-[56px] rounded object-cover" />
            <span className="min-w-0 flex-1 truncate text-[12px] font-normal text-[#52627f]">{cover.fileName}</span>
            <button type="button" onClick={() => void removeCover()} className="shrink-0 text-[12px] font-semibold text-[#315bbd]">Remover</button>
          </div> : <button type="button" onClick={() => void selectCover()} className="flex min-h-[100px] w-full flex-col items-center justify-center gap-1 rounded-[9px] border border-dashed border-[#c5cad5] text-[12px] font-normal text-[#52627f] hover:bg-[#f8f9fc]">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 text-[#718096]" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 15v4h14v-4" /></svg>
            <span className="font-semibold">Enviar capa</span><span className="text-[10px] text-[#718096]">JPG, PNG ou WebP, até 5 MB</span>
          </button>}
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-[5px] sm:flex-row sm:items-center">
        <p className="flex-1 text-[11px] leading-5 text-[#718096]">O livro é criado sem exemplares. Eles podem ser adicionados depois.</p>
        <div className="flex justify-end gap-3 sm:gap-[15px]">
          <button type="button" onClick={() => void handleCancel()} className="h-[42px] min-w-[106px] rounded-[9px] border border-[#315bbd] bg-white px-4 text-[12px] font-semibold text-[#19294c]">Cancelar</button>
          <button type="submit" disabled={form.formState.isSubmitting} className="h-[42px] min-w-[150px] rounded-[9px] bg-[#2e56b2] px-4 text-[12px] font-semibold text-white disabled:opacity-60">{form.formState.isSubmitting ? 'Cadastrando...' : 'Cadastrar livro'}</button>
        </div>
      </div>
    </form>
  </section>
}
