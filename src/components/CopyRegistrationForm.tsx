import { useEffect, useMemo, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

type Condition = 'NEW' | 'GOOD' | 'FAIR' | 'POOR'
type BookChoice = { id: string; title: string; isbn: string; authors: { author: { name: string } }[] }
type CopyValues = {
  bookId: string
  copies: { conservationCondition: Condition; shelfLocation: string; observation: string }[]
  acquisitionDate: string
  acquisitionMethod: string
}
export type CopyRegistrationResult = {
  bookTitle: string
  copies: { inventoryCode: string; conservationCondition: Condition; shelfLocation: string; observation: string }[]
}

const fieldClass = 'h-[42px] w-full min-w-0 rounded-[8px] border border-[#c6cedb] bg-white px-[10px] text-[13px] font-medium text-[#19294c] placeholder:text-[#8792a5] focus:outline-none focus:ring-2 focus:ring-[#315bbd]/20'
const labelClass = 'flex min-w-0 flex-col gap-[7px] text-[12px] font-semibold leading-4 text-[#19294c]'
const conditions: { value: Condition; label: string }[] = [
  { value: 'NEW', label: 'Novo' },
  { value: 'GOOD', label: 'Bom' },
  { value: 'FAIR', label: 'Regular' },
  { value: 'POOR', label: 'Ruim' },
]

function formatDateInput(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 8)
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
}

function parseDateInput(value: string) {
  if (!value) return undefined
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value)
  if (!match) return null
  const [, day, month, year] = match
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)))
  if (date.getUTCFullYear() !== Number(year) || date.getUTCMonth() !== Number(month) - 1 || date.getUTCDate() !== Number(day)) return null
  return `${year}-${month}-${day}`
}

function copyErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('COPY_BOOK_REQUIRED')) return 'Selecione um livro.'
  if (message.includes('COPY_BOOK_NOT_FOUND') || message.includes('COPY_BOOK_INACTIVE')) return 'O livro selecionado não está mais disponível. Escolha outro livro.'
  if (message.includes('COPY_QUANTITY_LIMIT_EXCEEDED')) return 'O limite é de 10 exemplares por operação.'
  if (message.includes('COPY_QUANTITY_INVALID')) return 'Informe uma quantidade válida de exemplares.'
  if (message.includes('COPY_LOCATION_INVALID')) return 'Informe uma localização válida para cada exemplar.'
  if (message.includes('COPY_OBSERVATION_INVALID')) return 'Uma observação excedeu o limite de 500 caracteres.'
  if (message.includes('COPY_ACQUISITION_DATE_CANNOT_BE_FUTURE')) return 'A data de aquisição não pode estar no futuro.'
  if (message.includes('COPY_ACQUISITION_DATE_INVALID')) return 'Informe uma data de aquisição válida.'
  if (message.includes('NOT_AUTHENTICATED') || message.includes('SESSION_EXPIRED')) return 'Sua sessão expirou. Entre novamente.'
  return 'Não foi possível cadastrar os exemplares. Confira os dados e tente novamente.'
}

export function CopyRegistrationForm({ onSuccess, onCancel }: { onSuccess: (result: CopyRegistrationResult) => void; onCancel: () => void }) {
  const form = useForm<CopyValues>({
    defaultValues: { bookId: '', copies: [{ conservationCondition: 'NEW', shelfLocation: '', observation: '' }], acquisitionDate: '', acquisitionMethod: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })
  const { fields, append, remove, update } = useFieldArray({ control: form.control, name: 'copies' })
  const [books, setBooks] = useState<BookChoice[]>([])
  const [selectedBook, setSelectedBook] = useState<BookChoice | null>(null)
  const [query, setQuery] = useState('')
  const [isChoosingBook, setIsChoosingBook] = useState(false)
  const [booksError, setBooksError] = useState('')
  const [copyFeedback, setCopyFeedback] = useState('')
  const bookId = form.watch('bookId')
  const today = useMemo(() => new Date().toISOString().slice(0, 10), [])

  useEffect(() => {
    let cancelled = false
    const timer = window.setTimeout(() => {
      window.authAPI.searchActiveBooks(query).then((results) => {
        if (!cancelled) {
          setBooks(results)
          setBooksError('')
        }
      }).catch(() => {
        if (!cancelled) setBooksError('Não foi possível carregar os livros. Tente novamente.')
      })
    }, query ? 180 : 0)
    return () => { cancelled = true; window.clearTimeout(timer) }
  }, [query])

  const chooseBook = (book: BookChoice) => {
    setSelectedBook(book)
    form.setValue('bookId', book.id, { shouldValidate: true })
    setIsChoosingBook(false)
    setQuery('')
    form.clearErrors('bookId')
  }

  const changeQuantity = (next: number) => {
    const quantity = Math.max(1, Math.min(10, next))
    if (quantity > fields.length) {
      for (let index = fields.length; index < quantity; index += 1) append({ conservationCondition: 'NEW', shelfLocation: '', observation: '' })
    } else if (quantity < fields.length) {
      remove(Array.from({ length: fields.length - quantity }, (_, index) => quantity + index))
    }
    setCopyFeedback('')
  }

  const copyFirstToAll = () => {
    const first = form.getValues('copies.0')
    if (!first) return
    fields.slice(1).forEach((_, index) => update(index + 1, { ...first }))
    setCopyFeedback('Os dados do primeiro exemplar foram copiados para os demais.')
  }

  const onSubmit = async (values: CopyValues) => {
    form.clearErrors('root.server')
    if (!values.bookId) {
      form.setError('bookId', { type: 'required', message: 'Selecione um livro.' })
      return
    }
    const missingLocation = values.copies.findIndex((copy) => !copy.shelfLocation.trim())
    if (missingLocation >= 0) {
      form.setError(`copies.${missingLocation}.shelfLocation`, { type: 'required', message: 'Informe a localização.' })
      return
    }
    if (values.copies.length < 1 || values.copies.length > 10) {
      form.setError('root.server', { type: 'validation', message: 'A quantidade deve ser de 1 a 10 exemplares.' })
      return
    }
    const acquisitionDate = parseDateInput(values.acquisitionDate)
    if (acquisitionDate === null) {
      form.setError('acquisitionDate', { type: 'validate', message: 'Informe uma data válida no formato DD/MM/AAAA.' })
      return
    }
    if (acquisitionDate && acquisitionDate > today) {
      form.setError('acquisitionDate', { type: 'validate', message: 'A data de aquisição não pode estar no futuro.' })
      return
    }
    try {
      const result = await window.authAPI.createCopies({
        bookId: values.bookId,
        copies: values.copies.map((copy) => ({
          conservationCondition: copy.conservationCondition,
          shelfLocation: copy.shelfLocation.trim(),
          ...(copy.observation.trim() ? { observation: copy.observation.trim() } : {}),
        })),
        ...(acquisitionDate ? { acquisitionDate } : {}),
        ...(values.acquisitionMethod.trim() ? { acquisitionMethod: values.acquisitionMethod.trim() } : {}),
      })
      onSuccess({
        bookTitle: result.book.title,
        copies: result.copies.map((copy) => ({
          inventoryCode: copy.inventoryCode,
          conservationCondition: copy.conservationCondition as Condition,
          shelfLocation: copy.shelfLocation ?? '',
          observation: copy.observation ?? '',
        })),
      })
    } catch (error) {
      form.setError('root.server', { type: 'server', message: copyErrorMessage(error) })
    }
  }

  return <section className="mx-auto mt-[18px] w-full max-w-[1000px] rounded-[12px] bg-white px-5 py-6 shadow-[0_8px_28px_rgba(24,43,82,0.06)] sm:px-7 lg:px-[30px] lg:py-[28px]">
    <form aria-label="Adicionar exemplares" noValidate className="space-y-[17px]" onSubmit={form.handleSubmit(onSubmit, () => form.setError('root.server', { type: 'validation', message: 'Confira os campos obrigatórios dos exemplares.' }))}>
      {form.formState.errors.root?.server?.message && <p role="alert" className="rounded-[7px] bg-[#FDEBEC] px-4 py-3 text-[13px] leading-5 text-[#B42331]">{form.formState.errors.root.server.message}</p>}
      <div className={labelClass}>
        <span>Livro <span aria-hidden="true">*</span></span>
        {selectedBook && !isChoosingBook ? <div className="flex min-h-[58px] items-center gap-3 rounded-[8px] border border-[#cdd7eb] bg-[#eef3ff] px-3 py-2.5 sm:px-[14px]">
          <div className="min-w-0 flex-1"><p className="truncate text-[14px] font-bold leading-5 text-[#19294c]">{selectedBook.title}</p><p className="truncate text-[12px] font-normal leading-4 text-[#718096]">{selectedBook.authors.map(({ author }) => author.name).join(', ') || 'Autor não informado'} · ISBN {selectedBook.isbn}</p></div>
          <button type="button" onClick={() => setIsChoosingBook(true)} className="h-[38px] shrink-0 rounded-[8px] border border-[#c6cedb] bg-white px-3 text-[12px] font-semibold text-[#19294c]">Trocar livro</button>
        </div> : <div className="relative">
          <input value={query} onChange={(event) => setQuery(event.target.value)} onFocus={() => setIsChoosingBook(true)} placeholder="Buscar por título, autor ou ISBN" className={fieldClass} aria-label="Buscar livro" aria-expanded={isChoosingBook} />
          {isChoosingBook && <div className="absolute z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-[8px] border border-[#d4dae5] bg-white py-1 shadow-lg" role="listbox" aria-label="Livros disponíveis">
            {booksError ? <p role="alert" className="px-3 py-2 text-[12px] font-normal text-[#B42331]">{booksError}</p> : books.length ? books.map((book) => <button key={book.id} type="button" role="option" aria-selected={book.id === bookId} onClick={() => chooseBook(book)} className="block w-full px-3 py-2 text-left hover:bg-[#f1f4fa]"><span className="block truncate text-[13px] font-semibold text-[#19294c]">{book.title}</span><span className="block truncate text-[11px] font-normal text-[#718096]">{book.authors.map(({ author }) => author.name).join(', ') || 'Autor não informado'} · ISBN {book.isbn}</span></button>) : <p className="px-3 py-2 text-[12px] font-normal text-[#718096]">Nenhum livro encontrado.</p>}
          </div>}
        </div>}
        {form.formState.errors.bookId && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors.bookId.message}</span>}
      </div>

      <div className={labelClass}>
        <span>Quantidade de exemplares <span aria-hidden="true">*</span></span>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" aria-label="Diminuir quantidade" disabled={fields.length <= 1} onClick={() => changeQuantity(fields.length - 1)} className="h-[42px] w-[42px] rounded-[8px] border border-[#c6cedb] bg-white text-[19px] text-[#19294c] disabled:opacity-45">−</button>
          <output className="flex h-[42px] w-[88px] items-center justify-center rounded-[8px] border border-[#c6cedb] text-[14px] font-semibold text-[#19294c]" aria-label={`Quantidade de exemplares: ${fields.length}`}>{fields.length}</output>
          <button type="button" aria-label="Aumentar quantidade" disabled={fields.length >= 10} onClick={() => changeQuantity(fields.length + 1)} className="h-[42px] w-[42px] rounded-[8px] border border-[#c6cedb] bg-white text-[19px] text-[#19294c] disabled:opacity-45">+</button>
          <span className="ml-1 text-[12px] font-normal text-[#718096]">Máximo de 10 por operação</span>
        </div>
      </div>

      <section aria-label="Dados de cada exemplar">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-[12px] font-semibold leading-4 text-[#19294c]">Dados de cada exemplar</h2>
          {fields.length > 1 && <button type="button" onClick={copyFirstToAll} className="h-[36px] rounded-[8px] border border-[#c6cedb] bg-white px-3 text-[12px] font-semibold text-[#19294c]">Copiar o primeiro para todos</button>}
        </div>
        <div className="hidden grid-cols-[84px_minmax(150px,1fr)_minmax(150px,1fr)_minmax(130px,1fr)] gap-3 border-b border-[#dfe3ea] pb-2 text-[11px] font-medium text-[#718096] md:grid"><span>Exemplar</span><span>Estado de conservação</span><span>Localização</span><span>Observação</span></div>
        <div className="divide-y divide-[#e6e9ef]">
          {fields.map((field, index) => <div key={field.id} className="grid grid-cols-1 gap-2 py-3 md:grid-cols-[84px_minmax(150px,1fr)_minmax(150px,1fr)_minmax(130px,1fr)] md:items-center md:gap-3">
            <span className="text-[12px] font-bold text-[#19294c]">nº {index + 1}</span>
            <label className={labelClass}><span className="md:sr-only">Estado de conservação</span><select {...form.register(`copies.${index}.conservationCondition`)} className={fieldClass}>{conditions.map((condition) => <option key={condition.value} value={condition.value}>{condition.label}</option>)}</select></label>
            <label className={labelClass}><span className="md:sr-only">Localização</span><input {...form.register(`copies.${index}.shelfLocation`, { required: 'Informe a localização.' })} placeholder="Ex.: Estante B, prateleira 3" className={fieldClass} aria-invalid={Boolean(form.formState.errors.copies?.[index]?.shelfLocation)} />{form.formState.errors.copies?.[index]?.shelfLocation && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors.copies[index]?.shelfLocation?.message}</span>}</label>
            <label className={labelClass}><span className="md:sr-only">Observação</span><input {...form.register(`copies.${index}.observation`, { maxLength: { value: 500, message: 'Use no máximo 500 caracteres.' } })} maxLength={500} placeholder="Opcional" className={fieldClass} />{form.formState.errors.copies?.[index]?.observation && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors.copies[index]?.observation?.message}</span>}</label>
          </div>)}
        </div>
        <p aria-live="polite" className="text-[11px] text-[#718096]">Os códigos de tombo são gerados ao salvar.{copyFeedback && <span className="ml-2 text-[#096644]">{copyFeedback}</span>}</p>
      </section>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className={labelClass}><span>Data de aquisição</span><input {...form.register('acquisitionDate')} onChange={(event) => { const value = formatDateInput(event.target.value); event.target.value = value; form.setValue('acquisitionDate', value, { shouldDirty: true }); form.clearErrors('acquisitionDate') }} type="text" inputMode="numeric" autoComplete="off" maxLength={10} placeholder="dd/mm/aaaa" className={fieldClass} aria-invalid={Boolean(form.formState.errors.acquisitionDate)} />{form.formState.errors.acquisitionDate && <span role="alert" className="font-normal text-[#B42331]">{form.formState.errors.acquisitionDate.message}</span>}</label>
        <label className={labelClass}><span>Forma de aquisição</span><input {...form.register('acquisitionMethod', { maxLength: { value: 100, message: 'Use no máximo 100 caracteres.' } })} placeholder="Ex.: compra, doação" className={fieldClass} /></label>
      </div>
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center">
        <p className="flex-1 text-[11px] leading-5 text-[#718096]">A data e a forma de aquisição valem para todos os exemplares desta operação.</p>
        <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row sm:gap-[13px]">
          <button type="button" onClick={onCancel} className="h-[42px] min-w-[110px] rounded-[8px] border border-[#c6cedb] bg-white px-4 text-[12px] font-semibold text-[#19294c]">Cancelar</button>
          <button type="submit" disabled={form.formState.isSubmitting || !selectedBook} className="h-[42px] min-w-[190px] rounded-[8px] bg-[#315bbd] px-4 text-[12px] font-semibold text-white disabled:opacity-60">{form.formState.isSubmitting ? 'Adicionando...' : 'Adicionar exemplares'}</button>
        </div>
      </div>
    </form>
  </section>
}
