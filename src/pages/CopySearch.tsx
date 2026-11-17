import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AlertCircle, ArrowLeft, BookOpen, CheckCircle2, ChevronDown, CircleHelp, LoaderCircle, Search, X } from 'lucide-react'
import { DashboardLayout } from '@/components/DashboardLayout'

type CopyStatus = 'AVAILABLE' | 'LOANED' | 'BORROWED' | string
type BookChoice = Awaited<ReturnType<typeof window.authAPI.searchBooksForCopyFilter>>[number]
type CopyResult = Awaited<ReturnType<typeof window.authAPI.searchCopies>>[number]
type CopyDetails = Awaited<ReturnType<typeof window.authAPI.getCopyDetails>>
type SearchFilters = {
  inventoryCode: string
  status: string
  shelfLocation: string
  conservationCondition: string
  bookId: string
}
type SearchState = { filters: SearchFilters; results: CopyResult[] }

const defaultFilters: SearchFilters = {
  inventoryCode: '',
  status: '',
  shelfLocation: '',
  conservationCondition: '',
  bookId: '',
}

const conditionLabels: Record<string, string> = {
  NEW: 'Novo', GOOD: 'Bom', FAIR: 'Regular', POOR: 'Ruim',
}
const statusLabels: Record<string, string> = {
  AVAILABLE: 'Disponível', LOANED: 'Emprestado', BORROWED: 'Emprestado', OVERDUE: 'Em atraso', LATE: 'Em atraso',
}

const fieldClass = 'h-[42px] w-full min-w-0 rounded-[8px] border border-[#c6cedb] bg-white px-[10px] text-[13px] font-medium text-[#19294c] placeholder:text-[#8792a5] outline-none transition focus:border-[#315bbd] focus:ring-2 focus:ring-[#315bbd]/20 aria-[invalid=true]:border-[#c43d4b] aria-[invalid=true]:focus:ring-[#c43d4b]/20'
const labelClass = 'flex min-w-0 flex-col gap-[7px] text-[12px] font-semibold leading-4 text-[#19294c]'

function errorText(error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('COPY_SEARCH_CRITERIA_REQUIRED')) return 'Informe pelo menos um critério para buscar.'
  if (message.includes('COPY_SEARCH_LOCATION_TOO_SHORT')) return 'Informe ao menos 2 caracteres para a localização.'
  if (message.includes('COPY_SEARCH_BOOK_ID_INVALID')) return 'Selecione um livro válido.'
  if (message.includes('NOT_AUTHENTICATED') || message.includes('SESSION_EXPIRED')) return 'Sua sessão expirou. Entre novamente.'
  return 'Não foi possível buscar os exemplares. Tente novamente.'
}

function getStatusLabel(status: CopyStatus) {
  return statusLabels[status] ?? status.toLocaleLowerCase().replace(/_/g, ' ')
}

function getStatusClass(status: CopyStatus) {
  if (status === 'AVAILABLE') return 'bg-[#e5f5ee] text-[#096644]'
  if (status === 'LOANED' || status === 'BORROWED') return 'bg-[#fff2d6] text-[#8a5700]'
  if (status === 'OVERDUE' || status === 'LATE' || status === 'IN_ARREARS') return 'bg-[#fdebec] text-[#b42331]'
  return 'bg-[#eef1f6] text-[#52627f]'
}

function formatDate(value: Date | string | null | undefined) {
  if (!value) return '—'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '—' : new Intl.DateTimeFormat('pt-BR').format(date)
}

function DetailField({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="min-w-0">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.04em] text-[#718096]">{label}</dt>
      <dd className="mt-1 break-words text-[12px] font-medium leading-[17px] text-[#19294c]">{value || '—'}</dd>
    </div>
  )
}

function DetailStatusField({ label, value, className }: { label: string; value: string; className: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.04em] text-[#718096]">{label}</dt>
      <dd className="mt-1"><span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${className}`}>{value}</span></dd>
    </div>
  )
}

function CopyDetailsView({ copyId, searchState }: { copyId: string; searchState?: SearchState }) {
  const navigate = useNavigate()
  const [copy, setCopy] = useState<CopyDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    window.authAPI.getCopyDetails(copyId).then((result) => {
      if (!cancelled) setCopy(result)
    }).catch((reason: unknown) => {
      if (!cancelled) setError(reason instanceof Error && reason.message.includes('COPY_NOT_FOUND')
        ? 'Este exemplar não foi encontrado.'
        : 'Não foi possível carregar os detalhes do exemplar.')
    }).finally(() => {
      if (!cancelled) setLoading(false)
    })
    return () => { cancelled = true }
  }, [copyId])

  const backToResults = () => {
    navigate('/copies/search', { state: searchState ? { searchState } : null })
  }

  const authorNames = copy?.book.authors.map(({ author }) => author.name).join(', ')

  return (
    <div className="mx-auto w-full max-w-[1000px]">
      <button type="button" onClick={backToResults} className="mb-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#315bbd] hover:underline">
        <ArrowLeft aria-hidden="true" className="size-4" /> Voltar aos resultados
      </button>
      {loading ? (
        <div role="status" className="flex min-h-[250px] items-center justify-center gap-2 rounded-[12px] bg-white text-[13px] text-[#718096] shadow-[0_8px_28px_rgba(24,43,82,0.06)]">
          <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> Carregando exemplar...
        </div>
      ) : error ? (
        <div role="alert" className="rounded-[12px] border border-[#f1c4c8] bg-white p-5 text-[13px] text-[#a52836]">{error}</div>
      ) : copy ? (
        <>
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#315bbd]">Acervo</p>
              <h1 className="mt-1 text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#19294c]">Exemplar {copy.inventoryCode}</h1>
            </div>
            <span className={`mt-1 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${getStatusClass(copy.status)}`}>
              {getStatusLabel(copy.status)}
            </span>
          </div>

          <section className="rounded-[12px] bg-white px-5 py-5 shadow-[0_8px_28px_rgba(24,43,82,0.06)] sm:px-7">
            <h2 className="text-[14px] font-bold text-[#19294c]">Dados do exemplar</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              <DetailField label="Código de tombo" value={copy.inventoryCode} />
              <DetailStatusField label="Situação" value={getStatusLabel(copy.status)} className={getStatusClass(copy.status)} />
              <DetailField label="Localização" value={copy.shelfLocation} />
              <DetailField label="Estado de conservação" value={copy.conservationCondition ? conditionLabels[copy.conservationCondition] ?? copy.conservationCondition : undefined} />
              <DetailField label="Data de cadastro" value={formatDate(copy.acquisitionDate)} />
              <DetailStatusField label="Situação do livro" value={copy.book.isActive ? 'Ativo' : 'Inativo'} className={copy.book.isActive ? 'bg-[#e5f5ee] text-[#096644]' : 'bg-[#fdebec] text-[#b42331]'} />
            </dl>
          </section>

          <section className="mt-3 rounded-[12px] bg-white px-5 py-5 shadow-[0_8px_28px_rgba(24,43,82,0.06)] sm:px-7">
            <h2 className="text-[14px] font-bold text-[#19294c]">Livro a que pertence</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              <DetailField label="Título" value={copy.book.title} />
              <DetailField label="Autores" value={authorNames} />
              <DetailField label="ISBN" value={copy.book.isbn} />
              <DetailField label="Editora" value={copy.book.publisher} />
              <DetailField label="Ano de publicação" value={String(copy.book.yearOfPublication)} />
            </dl>
          </section>

          <section className="mt-3 rounded-[12px] bg-white px-5 py-5 shadow-[0_8px_28px_rgba(24,43,82,0.06)] sm:px-7">
            <h2 className="text-[14px] font-bold text-[#19294c]">Empréstimo atual</h2>
            <p className="mt-2 text-[12px] leading-5 text-[#718096]">
              {copy.status === 'AVAILABLE'
                ? 'Este exemplar não possui empréstimo em andamento.'
                : 'Este exemplar está emprestado no momento.'}
            </p>
          </section>
        </>
      ) : null}
    </div>
  )
}

function CopySearchForm({ initialState }: { initialState?: SearchState }) {
  const navigate = useNavigate()
  const [filters, setFilters] = useState<SearchFilters>(initialState?.filters ?? defaultFilters)
  const [results, setResults] = useState<CopyResult[] | null>(initialState?.results ?? null)
  const [bookQuery, setBookQuery] = useState('')
  const [selectedBook, setSelectedBook] = useState<BookChoice | null>(null)
  const [bookOptions, setBookOptions] = useState<BookChoice[]>([])
  const [showBookOptions, setShowBookOptions] = useState(false)
  const [bookLoading, setBookLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [requestError, setRequestError] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const hasSearched = results !== null

  useEffect(() => {
    if (!bookQuery.trim()) {
      setBookOptions([])
      return
    }

    let cancelled = false
    const timer = window.setTimeout(() => {
      setBookLoading(true)
      window.authAPI.searchBooksForCopyFilter(bookQuery.trim()).then((books) => {
        if (!cancelled) setBookOptions(books)
      }).catch(() => {
        if (!cancelled) setBookOptions([])
      }).finally(() => {
        if (!cancelled) setBookLoading(false)
      })
    }, 180)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [bookQuery])

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    setFilters((current) => ({ ...current, [key]: value }))
    setFieldErrors((current) => ({ ...current, [key]: '' }))
    setRequestError('')
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
    setSelectedBook(null)
    setBookQuery('')
    setBookOptions([])
    setShowBookOptions(false)
    setFieldErrors({})
    setRequestError('')
    setResults(null)
  }

  const selectBook = (book: BookChoice) => {
    setSelectedBook(book)
    setFilters((current) => ({ ...current, bookId: book.id }))
    setBookQuery(`${book.title} · ${book.authors.map(({ author }) => author.name).join(', ')}`)
    setShowBookOptions(false)
    setFieldErrors((current) => ({ ...current, bookId: '' }))
  }

  const handleBookInput = (value: string) => {
    setBookQuery(value)
    setSelectedBook(null)
    setFilters((current) => ({ ...current, bookId: '' }))
    setShowBookOptions(true)
    setFieldErrors((current) => ({ ...current, bookId: '' }))
  }

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    const inventoryCode = filters.inventoryCode.trim()
    const shelfLocation = filters.shelfLocation.trim()
    const hasCriteria = Boolean(inventoryCode || filters.status || shelfLocation || filters.conservationCondition || filters.bookId)

    if (!hasCriteria) nextErrors.form = 'Preencha um ou mais campos para localizar os exemplares.'
    if (inventoryCode && !/^\d{6}$/.test(inventoryCode)) nextErrors.inventoryCode = 'Código de tombo incompleto. Informe os 6 dígitos.'
    if (shelfLocation && shelfLocation.length < 2) nextErrors.shelfLocation = 'Informe ao menos 2 caracteres.'
    if (bookQuery.trim() && !filters.bookId) nextErrors.bookId = 'Selecione um livro da lista.'
    setFieldErrors(nextErrors)
    setRequestError('')
    if (Object.keys(nextErrors).length) return

    setIsSearching(true)
    try {
      const searchFilters = {
        ...(inventoryCode ? { inventoryCode } : {}),
        ...(filters.status ? { status: filters.status } : {}),
        ...(shelfLocation ? { shelfLocation } : {}),
        ...(filters.conservationCondition ? { conservationCondition: filters.conservationCondition } : {}),
        ...(filters.bookId ? { bookId: filters.bookId } : {}),
      }
      const found = await window.authAPI.searchCopies(searchFilters)
      setResults(found)
    } catch (error) {
      setRequestError(errorText(error))
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const searchState = useMemo<SearchState>(() => ({ filters, results: results ?? [] }), [filters, results])

  const openDetails = (copyId: string) => {
    navigate(`/copies/search/${copyId}`, { state: { searchState } })
  }

  return (
    <div className="mx-auto w-full max-w-[1000px]">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#315bbd]">Acervo</p>
          <h1 className="mt-1 text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#19294c]">Buscar Exemplar</h1>
          <p className="mt-1 text-[12px] leading-[17px] text-[#718096]">Localize uma cópia física e verifique a situação atual do acervo.</p>
        </div>
        <span className="mb-1 inline-flex items-center gap-2 text-[10px] font-medium text-[#718096]"><span className="size-[7px] rounded-full bg-[#36a976]" />Dados atualizados em tempo real</span>
      </div>

      <form onSubmit={handleSearch} noValidate className="rounded-[12px] bg-white px-5 py-5 shadow-[0_8px_28px_rgba(24,43,82,0.06)] sm:px-7 lg:px-[30px] lg:py-[22px]">
        <div className="mb-4 flex items-start gap-3">
          <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef3ff] text-[#315bbd]"><Search aria-hidden="true" className="size-4" /></span>
          <div>
            <h2 className="text-[14px] font-bold leading-5 text-[#19294c]">Critérios de Busca</h2>
            <p className="text-[11px] leading-4 text-[#718096]">Preencha um ou mais campos para localizar os exemplares.</p>
          </div>
        </div>

        {fieldErrors.form && <p role="alert" className="mb-3 flex items-center gap-2 rounded-[8px] bg-[#fff0f1] px-3 py-2 text-[11px] font-medium text-[#a52836]"><AlertCircle aria-hidden="true" className="size-4 shrink-0" />{fieldErrors.form}</p>}
        {requestError && <p role="alert" className="mb-3 flex items-center gap-2 rounded-[8px] bg-[#fff0f1] px-3 py-2 text-[11px] font-medium text-[#a52836]"><AlertCircle aria-hidden="true" className="size-4 shrink-0" />{requestError}</p>}

        <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
          <label className={labelClass}>
            <span>Código de tombo</span>
            <input value={filters.inventoryCode} onChange={(event) => updateFilter('inventoryCode', event.target.value.replace(/\D/g, '').slice(0, 6))} inputMode="numeric" autoComplete="off" placeholder="Ex.: 000123" className={fieldClass} aria-invalid={Boolean(fieldErrors.inventoryCode)} />
            {fieldErrors.inventoryCode && <span role="alert" className="font-normal text-[#b42331]">{fieldErrors.inventoryCode}</span>}
          </label>

          <label className={labelClass}>
            <span>Situação do exemplar</span>
            <span className="relative">
              <select value={filters.status} onChange={(event) => updateFilter('status', event.target.value)} className={`${fieldClass} appearance-none pr-8`}>
                <option value="">Todas as situações</option>
                <option value="AVAILABLE">Disponível</option>
                <option value="LOANED">Emprestado</option>
              </select>
              <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-[10px] top-1/2 size-4 -translate-y-1/2 text-[#718096]" />
            </span>
          </label>

          <label className={labelClass}>
            <span>Localização na estante</span>
            <input value={filters.shelfLocation} onChange={(event) => updateFilter('shelfLocation', event.target.value)} autoComplete="off" placeholder="Ex.: Corredor B" className={fieldClass} aria-invalid={Boolean(fieldErrors.shelfLocation)} />
            {fieldErrors.shelfLocation && <span role="alert" className="font-normal text-[#b42331]">{fieldErrors.shelfLocation}</span>}
          </label>

          <label className={labelClass}>
            <span>Estado de conservação</span>
            <span className="relative">
              <select value={filters.conservationCondition} onChange={(event) => updateFilter('conservationCondition', event.target.value)} className={`${fieldClass} appearance-none pr-8`}>
                <option value="">Todos os estados</option>
                <option value="NEW">Novo</option>
                <option value="GOOD">Bom</option>
                <option value="FAIR">Regular</option>
                <option value="POOR">Ruim</option>
              </select>
              <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-[10px] top-1/2 size-4 -translate-y-1/2 text-[#718096]" />
            </span>
          </label>
        </div>

        <label className={`${labelClass} relative mt-3 max-w-[420px]`}>
          <span>Livro</span>
          <span className="relative">
            <input value={bookQuery} onChange={(event) => handleBookInput(event.target.value)} onFocus={() => bookQuery && setShowBookOptions(true)} onBlur={() => window.setTimeout(() => setShowBookOptions(false), 120)} autoComplete="off" placeholder="Busque por título, ISBN ou autor" className={fieldClass} aria-invalid={Boolean(fieldErrors.bookId)} aria-expanded={showBookOptions} aria-controls="copy-book-options" />
            {bookQuery && <button type="button" aria-label="Limpar livro" onMouseDown={(event) => event.preventDefault()} onClick={() => handleBookInput('')} className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[#718096] hover:bg-[#eef1f6]"><X aria-hidden="true" className="size-3.5" /></button>}
          </span>
          {showBookOptions && bookQuery.trim() && (
            <div id="copy-book-options" role="listbox" className="absolute left-0 right-0 top-full z-20 mt-1 max-h-[220px] overflow-y-auto rounded-[8px] border border-[#dfe3ea] bg-white py-1 shadow-[0_8px_20px_rgba(24,43,82,0.12)]">
              {bookLoading ? <p className="px-3 py-2 text-[11px] font-normal text-[#718096]">Buscando livros...</p>
                : bookOptions.length ? bookOptions.map((book) => <button type="button" key={book.id} role="option" aria-selected={selectedBook?.id === book.id} onMouseDown={(event) => event.preventDefault()} onClick={() => selectBook(book)} className="flex w-full flex-col gap-0.5 px-3 py-2 text-left text-[11px] font-medium text-[#19294c] hover:bg-[#eef3ff]"><span>{book.title}</span><span className="font-normal text-[#718096]">{book.authors.map(({ author }) => author.name).join(', ')} · ISBN {book.isbn}</span></button>)
                  : <p className="px-3 py-2 text-[11px] font-normal text-[#718096]">Nenhum livro encontrado.</p>}
            </div>
          )}
          {fieldErrors.bookId && <span role="alert" className="font-normal text-[#b42331]">{fieldErrors.bookId}</span>}
        </label>

        <div className="mt-4 flex flex-col gap-3 border-t border-[#e6e9ef] pt-3 sm:flex-row sm:items-center">
          <p className="flex flex-1 items-center gap-2 text-[10px] text-[#718096]"><CircleHelp aria-hidden="true" className="size-3.5 shrink-0" />Você também pode apertar <kbd className="rounded-[4px] border border-[#dfe3ea] bg-[#f8f9fb] px-1.5 py-0.5 font-semibold text-[#52627f]">Enter</kbd> para buscar</p>
          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button type="button" onClick={clearFilters} className="h-[38px] rounded-[8px] border border-[#c6cedb] bg-white px-4 text-[11px] font-semibold text-[#19294c] transition hover:bg-[#f7f9fc]">Limpar filtros</button>
            <button type="submit" disabled={isSearching} className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[8px] bg-[#315bbd] px-4 text-[11px] font-semibold text-white transition hover:bg-[#294fa9] disabled:cursor-wait disabled:opacity-65">
              {isSearching ? <LoaderCircle aria-hidden="true" className="size-3.5 animate-spin" /> : <Search aria-hidden="true" className="size-3.5" />}
              {isSearching ? 'Buscando...' : 'Buscar exemplares'}
            </button>
          </div>
        </div>
      </form>

      <section aria-live="polite" className="mt-3 rounded-[12px] bg-white px-5 py-5 shadow-[0_8px_28px_rgba(24,43,82,0.06)] sm:px-7 lg:px-[30px]">
        {hasSearched && results.length > 0 ? (
          <>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-[14px] font-bold text-[#19294c]">Resultados da busca</h2>
                <p className="mt-0.5 text-[10px] text-[#718096]"><span className="font-semibold text-[#315bbd]">{results.length}</span> {results.length === 1 ? 'exemplar encontrado' : 'exemplares encontrados'}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#718096]"><CheckCircle2 aria-hidden="true" className="size-3.5 text-[#36a976]" />Resultados atualizados</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-left text-[11px] text-[#52627f]">
                <thead><tr className="border-y border-[#dfe3ea] bg-[#f7f9fc] text-[9px] font-semibold uppercase tracking-[0.04em] text-[#718096]"><th className="px-3 py-3">Código de tombo</th><th className="px-3 py-3">Livro</th><th className="px-3 py-3">Localização</th><th className="px-3 py-3">Situação</th><th className="px-3 py-3 text-right">Detalhes</th></tr></thead>
                <tbody>{results.map((copy) => <tr key={copy.id} className="border-b border-[#e6e9ef] last:border-0 hover:bg-[#fafbfe]"><td className="px-3 py-3 font-mono font-bold text-[#19294c]">{copy.inventoryCode}</td><td className="max-w-[280px] truncate px-3 py-3 font-semibold text-[#19294c]">{copy.book.title}</td><td className="px-3 py-3">{copy.shelfLocation || '—'}</td><td className="px-3 py-3"><span className={`inline-flex whitespace-nowrap rounded-full px-2 py-1 text-[9px] font-semibold ${getStatusClass(copy.status)}`}>{getStatusLabel(copy.status)}</span></td><td className="px-3 py-3 text-right"><button type="button" onClick={() => openDetails(copy.id)} className="inline-flex h-[30px] items-center justify-center rounded-[7px] border border-[#c6cedb] bg-white px-3 text-[10px] font-semibold text-[#315bbd] transition hover:border-[#315bbd] hover:bg-[#eef3ff]">Ver detalhes</button></td></tr>)}</tbody>
              </table>
            </div>
          </>
        ) : hasSearched ? (
          <div className="flex min-h-[190px] flex-col items-center justify-center px-4 py-8 text-center">
            <span className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#eef3ff] text-[#315bbd]"><BookOpen aria-hidden="true" className="size-5" /></span>
            <h2 className="text-[13px] font-bold text-[#19294c]">Nenhum exemplar encontrado</h2>
            <p className="mt-1 max-w-[360px] text-[11px] leading-[17px] text-[#718096]">Nenhum exemplar corresponde aos filtros selecionados. Revise os critérios e tente novamente.</p>
          </div>
        ) : (
          <div className="flex min-h-[190px] flex-col items-center justify-center px-4 py-8 text-center">
            <span className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#eef3ff] text-[#315bbd]"><Search aria-hidden="true" className="size-5" /></span>
            <h2 className="text-[13px] font-bold text-[#19294c]">Comece definindo os critérios</h2>
            <p className="mt-1 max-w-[360px] text-[11px] leading-[17px] text-[#718096]">Os exemplares encontrados aparecerão aqui com sua situação e localização atualizadas.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default function CopySearch() {
  const { copyId } = useParams()
  const location = useLocation()
  const carriedState = (location.state as { searchState?: SearchState } | null)?.searchState

  return (
    <DashboardLayout>
      {copyId
        ? <CopyDetailsView copyId={copyId} searchState={carriedState} />
        : <CopySearchForm key={location.key} initialState={carriedState} />}
    </DashboardLayout>
  )
}
