import { useEffect, useState, type FormEvent } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { AlertCircle, ArrowLeft, BookOpen, CheckCircle2, LoaderCircle, Search } from 'lucide-react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { pageCardClass, pageContentClass, pageDescriptionClass, pageFieldClass, pageLabelClass, pageTitleClass } from '@/lib/pageStyles'

type BookFilters = {
  title: string
  author: string
  genre: string
  publisher: string
  isbn: string
  yearOfPublication: string
  availableOnly: boolean
}
type BookResult = Awaited<ReturnType<typeof window.authAPI.searchBooks>>[number]
type BookDetails = Awaited<ReturnType<typeof window.authAPI.getBookSearchDetails>>

const emptyFilters: BookFilters = {
  title: '', author: '', genre: '', publisher: '', isbn: '', yearOfPublication: '', availableOnly: false,
}
const labelClass = pageLabelClass
const fieldClass = pageFieldClass

function formatError(error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('BOOK_SEARCH_CRITERIA_REQUIRED')) return 'Preencha pelo menos um critério para buscar livros.'
  if (message.includes('BOOK_SEARCH_TEXT_TOO_SHORT')) return 'Os campos de texto precisam ter ao menos 2 caracteres.'
  if (message.includes('BOOK_SEARCH_YEAR')) return 'Informe um ano de publicação válido.'
  if (message.includes('BOOK_SEARCH_ISBN_INVALID')) return 'Informe um ISBN válido.'
  if (message.includes('NOT_AUTHENTICATED') || message.includes('SESSION_EXPIRED')) return 'Sua sessão expirou. Entre novamente.'
  return 'Não foi possível buscar os livros. Tente novamente.'
}

function BookDetailsView({ bookId }: { bookId: string }) {
  const navigate = useNavigate()
  const [book, setBook] = useState<BookDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    window.authAPI.getBookSearchDetails(bookId).then((result) => {
      if (!cancelled) setBook(result)
    }).catch((reason: unknown) => {
      if (!cancelled) setError(reason instanceof Error && reason.message.includes('BOOK_NOT_FOUND')
        ? 'Este livro não foi encontrado.'
        : 'Não foi possível carregar os detalhes do livro.')
    }).finally(() => {
      if (!cancelled) setLoading(false)
    })
    return () => { cancelled = true }
  }, [bookId])

  const Detail = ({ label, value }: { label: string; value?: string | number | null }) => (
    <div className="min-w-0"><dt className="text-[10px] font-semibold uppercase tracking-[0.04em] text-[#718096]">{label}</dt><dd className="mt-1 break-words text-[12px] font-medium leading-[17px] text-[#19294c]">{value || '—'}</dd></div>
  )

  return <div className={pageContentClass}>
    <button type="button" onClick={() => navigate('/books/search')} className="mb-4 inline-flex items-center gap-2 text-[12px] font-semibold text-[#315bbd] hover:underline"><ArrowLeft aria-hidden="true" className="size-4" />Voltar à busca</button>
    {loading ? <div role="status" className={`${pageCardClass} flex min-h-[220px] items-center justify-center gap-2 text-[12px] text-[#718096]`}><LoaderCircle aria-hidden="true" className="size-4 animate-spin" />Carregando livro...</div>
      : error ? <div role="alert" className={`${pageCardClass} border border-[#f1c4c8] text-[12px] text-[#a52836]`}>{error}</div>
        : book ? <>
          <header className="mb-4"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#315bbd]">Acervo</p><h1 className={`mt-1 ${pageTitleClass}`}>{book.title}</h1>{book.subTitle && <p className={`mt-1 ${pageDescriptionClass}`}>{book.subTitle}</p>}</header>
          <section className={pageCardClass}>
            <div className="flex flex-wrap items-start justify-between gap-3"><h2 className="text-[14px] font-bold text-[#19294c]">Detalhes do livro</h2><span className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold ${book.isActive ? 'bg-[#e5f5ee] text-[#096644]' : 'bg-[#fdebec] text-[#b42331]'}`}>{book.isActive ? 'Ativo' : 'Inativo'}</span></div>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-[112px_minmax(0,1fr)]">
              <div className="flex justify-center sm:justify-start">
                {book.coverPath ? <img src={`file://${book.coverPath}`} alt={`Capa de ${book.title}`} className="h-[156px] w-[112px] rounded-[8px] object-cover shadow-sm" /> : <div className="flex h-[156px] w-[112px] flex-col items-center justify-center gap-2 rounded-[8px] border border-dashed border-[#c6cedb] bg-[#f7f9fc] text-[#8792a5]"><BookOpen aria-hidden="true" className="size-7" /><span className="text-[10px]">Sem capa</span></div>}
              </div>
              <dl className="grid min-w-0 grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              <Detail label="Título" value={book.title} /><Detail label="Autores" value={book.authors.map((author) => author.name).join(', ')} /><Detail label="Gêneros" value={book.genres.map((genre) => genre.name).join(', ')} /><Detail label="ISBN" value={book.isbn} />
              <Detail label="Editora" value={book.publisher} /><Detail label="Ano de publicação" value={book.yearOfPublication} /><Detail label="Edição" value={book.edition} /><Detail label="Número de páginas" value={book.numberOfPages} /><Detail label="Idioma" value={book.language} />
              <Detail label="Exemplares no acervo" value={book.totalCopies} /><Detail label="Disponíveis" value={book.availableCopies} />
              {book.synopsis && <div className="sm:col-span-2 lg:col-span-3"><Detail label="Sinopse" value={book.synopsis} /></div>}
              </dl>
            </div>
          </section>
          <section className={`mt-3 ${pageCardClass}`}>
            <h2 className="text-[14px] font-bold text-[#19294c]">Exemplares</h2>
            {book.copies.length ? <div className="mt-3 overflow-x-auto"><table className="w-full min-w-[520px] border-collapse text-left text-[11px] text-[#52627f]"><thead><tr className="border-y border-[#dfe3ea] bg-[#f7f9fc] text-[9px] font-semibold uppercase tracking-[0.04em] text-[#718096]"><th className="px-3 py-3">Código de tombo</th><th className="px-3 py-3">Localização</th><th className="px-3 py-3">Situação</th></tr></thead><tbody>{book.copies.map((copy) => <tr key={copy.id} className="border-b border-[#e6e9ef] last:border-0"><td className="px-3 py-3 font-mono font-bold text-[#19294c]">{copy.inventoryCode}</td><td className="px-3 py-3">{copy.shelfLocation || '—'}</td><td className="px-3 py-3">{copy.status === 'AVAILABLE' ? 'Disponível' : copy.status === 'LOANED' || copy.status === 'BORROWED' ? 'Emprestado' : copy.status}</td></tr>)}</tbody></table></div>
              : <p className="mt-2 text-[12px] leading-5 text-[#718096]">Este livro ainda não possui exemplares cadastrados.</p>}
          </section>
        </> : null}
  </div>
}

function BookSearchForm() {
  const navigate = useNavigate()
  const [filters, setFilters] = useState<BookFilters>(emptyFilters)
  const [results, setResults] = useState<BookResult[] | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const update = (key: keyof BookFilters, value: string | boolean) => setFilters((current) => ({ ...current, [key]: value }))
  const clear = () => { setFilters(emptyFilters); setResults(null); setError('') }
  const search = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const hasCriteria = Object.entries(filters).some(([key, value]) => key !== 'availableOnly' && String(value).trim().length > 0)
    if (!hasCriteria) return
    const query = {
      ...(filters.title.trim() ? { title: filters.title.trim() } : {}),
      ...(filters.author.trim() ? { author: filters.author.trim() } : {}),
      ...(filters.genre.trim() ? { genre: filters.genre.trim() } : {}),
      ...(filters.publisher.trim() ? { publisher: filters.publisher.trim() } : {}),
      ...(filters.isbn.trim() ? { isbn: filters.isbn.trim() } : {}),
      ...(filters.yearOfPublication ? { yearOfPublication: filters.yearOfPublication } : {}),
      ...(filters.availableOnly ? { availableOnly: true } : {}),
    }
    setError('')
    setLoading(true)
    try { setResults(await window.authAPI.searchBooks(query)) }
    catch (reason) { setResults([]); setError(formatError(reason)) }
    finally { setLoading(false) }
  }

  const textFields: { key: Exclude<keyof BookFilters, 'availableOnly'>; label: string; placeholder: string }[] = [
    { key: 'title', label: 'Título', placeholder: 'Digite o título do livro' },
    { key: 'author', label: 'Autor', placeholder: 'Digite o nome do autor' },
    { key: 'genre', label: 'Gênero', placeholder: 'Digite o gênero' },
    { key: 'publisher', label: 'Editora', placeholder: 'Digite a editora' },
    { key: 'isbn', label: 'ISBN', placeholder: 'Digite o ISBN completo' },
    { key: 'yearOfPublication', label: 'Ano de publicação', placeholder: 'Ex.: 2024' },
  ]

  return <div className={pageContentClass}>
    <header className="mb-4"><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#315bbd]">Acervo</p><h1 className={`mt-1 ${pageTitleClass}`}>Buscar Livro</h1><p className={`mt-1 ${pageDescriptionClass}`}>Pesquise livros cadastrados e consulte seus detalhes e exemplares.</p></header>
    <form onSubmit={search} noValidate className={pageCardClass}>
      <div className="mb-4 flex items-start gap-3"><span className="flex size-[34px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef3ff] text-[#315bbd]"><Search aria-hidden="true" className="size-4" /></span><div><h2 className="text-[14px] font-bold leading-5 text-[#19294c]">Critérios de busca</h2><p className="text-[11px] leading-4 text-[#718096]">Preencha um ou mais campos para localizar livros.</p></div></div>
      {error && <p role="alert" className="mb-3 flex items-center gap-2 rounded-[8px] bg-[#fff0f1] px-3 py-2 text-[11px] font-medium text-[#a52836]"><AlertCircle aria-hidden="true" className="size-4 shrink-0" />{error}</p>}
      <div className="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">{textFields.map(({ key, label, placeholder }) => <label key={key} className={labelClass}><span>{label}</span><input value={filters[key]} onChange={(event) => update(key, event.target.value)} inputMode={key === 'yearOfPublication' ? 'numeric' : undefined} autoComplete="off" placeholder={placeholder} className={fieldClass} /></label>)}</div>
      <div className="mt-4 flex flex-col gap-3 border-t border-[#e6e9ef] pt-3 sm:flex-row sm:items-center"><label className="flex flex-1 items-center gap-2 text-[11px] font-medium text-[#52627f]"><input type="checkbox" checked={filters.availableOnly} onChange={(event) => update('availableOnly', event.target.checked)} className="size-4 accent-[#315bbd]" />Somente livros com exemplares disponíveis</label><div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end"><button type="button" onClick={clear} className="h-[38px] rounded-[8px] border border-[#c6cedb] bg-white px-4 text-[11px] font-semibold text-[#19294c] transition hover:bg-[#f7f9fc]">Limpar filtros</button><button type="submit" disabled={loading} className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[8px] bg-[#315bbd] px-4 text-[11px] font-semibold text-white transition hover:bg-[#294fa9] disabled:cursor-wait disabled:opacity-65">{loading ? <LoaderCircle aria-hidden="true" className="size-3.5 animate-spin" /> : <Search aria-hidden="true" className="size-3.5" />}{loading ? 'Buscando...' : 'Buscar livros'}</button></div></div>
    </form>
    <section aria-live="polite" className={`mt-3 ${pageCardClass}`}>
      {results && results.length ? <><div className="mb-3 flex flex-wrap items-center justify-between gap-2"><div><h2 className="text-[14px] font-bold text-[#19294c]">Resultados da busca</h2><p className="mt-0.5 text-[10px] text-[#718096]"><span className="font-semibold text-[#315bbd]">{results.length}</span> {results.length === 1 ? 'livro encontrado' : 'livros encontrados'}</p></div><span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-[#718096]"><CheckCircle2 aria-hidden="true" className="size-3.5 text-[#36a976]" />Resultados atualizados</span></div><div className="overflow-x-auto"><table className="w-full min-w-[740px] border-collapse text-left text-[11px] text-[#52627f]"><thead><tr className="border-y border-[#dfe3ea] bg-[#f7f9fc] text-[9px] font-semibold uppercase tracking-[0.04em] text-[#718096]"><th className="px-3 py-3">Livro</th><th className="px-3 py-3">Autor(es)</th><th className="px-3 py-3">Editora / ano</th><th className="px-3 py-3">Exemplares</th><th className="px-3 py-3 text-right">Detalhes</th></tr></thead><tbody>{results.map((book) => <tr key={book.id} className="border-b border-[#e6e9ef] last:border-0 hover:bg-[#fafbfe]"><td className="max-w-[260px] px-3 py-3"><p className="truncate font-semibold text-[#19294c]">{book.title}</p><p className="mt-0.5 text-[10px]">ISBN {book.isbn}</p></td><td className="max-w-[200px] truncate px-3 py-3">{book.authors.map((author) => author.name).join(', ') || '—'}</td><td className="px-3 py-3">{book.publisher} · {book.yearOfPublication}</td><td className="px-3 py-3">{book.availableCopies} disponível(is) / {book.totalCopies}</td><td className="px-3 py-3 text-right"><button type="button" onClick={() => navigate(`/books/search/${book.id}`)} className="inline-flex h-[30px] items-center justify-center rounded-[7px] border border-[#c6cedb] bg-white px-3 text-[10px] font-semibold text-[#315bbd] transition hover:border-[#315bbd] hover:bg-[#eef3ff]">Ver detalhes</button></td></tr>)}</tbody></table></div></>
        : results ? <div className="flex min-h-[190px] flex-col items-center justify-center px-4 py-8 text-center"><span className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#eef3ff] text-[#315bbd]"><BookOpen aria-hidden="true" className="size-5" /></span><h2 className="text-[13px] font-bold text-[#19294c]">Nenhum livro encontrado</h2><p className="mt-1 max-w-[360px] text-[11px] leading-[17px] text-[#718096]">Nenhum livro corresponde aos critérios informados. Revise os filtros e tente novamente.</p></div>
          : <div className="flex min-h-[190px] flex-col items-center justify-center px-4 py-8 text-center"><span className="mb-3 flex size-10 items-center justify-center rounded-full bg-[#eef3ff] text-[#315bbd]"><Search aria-hidden="true" className="size-5" /></span><h2 className="text-[13px] font-bold text-[#19294c]">Comece definindo os critérios</h2><p className="mt-1 max-w-[360px] text-[11px] leading-[17px] text-[#718096]">Os livros encontrados aparecerão aqui com seus dados e disponibilidade no acervo.</p></div>}
    </section>
  </div>
}

export default function BookSearch() {
  const { bookId } = useParams()
  const location = useLocation()
  return <DashboardLayout>{bookId ? <BookDetailsView key={bookId} bookId={bookId} /> : <BookSearchForm key={location.key} />}</DashboardLayout>
}
