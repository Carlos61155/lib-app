import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookRegistrationForm, type BookRegistrationResult } from '@/components/BookRegistrationForm'
import { DashboardLayout } from '@/components/DashboardLayout'
import { pageCardClass, pageContentClass, pageDescriptionClass, pagePrimaryButtonClass, pageSecondaryButtonClass, pageSectionTitleClass, pageTitleClass } from '@/lib/pageStyles'

function Detail({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return <div><dt className="text-[#718096]">{label}</dt><dd className="break-words font-semibold text-[#19294c]">{value}</dd></div>
}

export default function Books() {
  const [registeredBook, setRegisteredBook] = useState<BookRegistrationResult | null>(null)
  const navigate = useNavigate()

  return <DashboardLayout>
    <header className={`${pageContentClass} mb-4`}>
      <h1 className={pageTitleClass}>{registeredBook ? 'Livro cadastrado' : 'Cadastrar livro'}</h1>
      {!registeredBook && <p className={pageDescriptionClass}>Preencha os dados do livro. Os campos com * são obrigatórios.</p>}
    </header>
    {registeredBook ? <section className={`${pageContentClass} ${pageCardClass}`}>
      <h2 className={pageSectionTitleClass}>Cadastro realizado com sucesso</h2>
      <p className="text-[12px] leading-4 text-[#52627f]">O livro já está disponível no acervo. Os exemplares podem ser adicionados depois.</p>
      <dl className="mt-[11px] grid min-w-0 grid-cols-1 gap-3 text-[12px] leading-[17px] sm:grid-cols-2">
        <Detail label="Título" value={registeredBook.title} />
        <Detail label="Subtítulo" value={registeredBook.subTitle} />
        <Detail label="Autores" value={registeredBook.authors.join(', ')} />
        <Detail label="Gêneros" value={registeredBook.genres.join(', ')} />
        <Detail label="ISBN" value={registeredBook.isbn} />
        <Detail label="Editora" value={registeredBook.publisher} />
        <Detail label="Ano de publicação" value={registeredBook.yearOfPublication} />
        <Detail label="Edição" value={registeredBook.edition} />
        <Detail label="Número de páginas" value={registeredBook.numberOfPages} />
        <Detail label="Idioma" value={registeredBook.language} />
        <Detail label="Sinopse" value={registeredBook.synopsis} />
        <Detail label="Capa" value={registeredBook.coverName} />
      </dl>
      <p role="status" className="mt-3 rounded-[8px] bg-[#e5f5ee] px-3 py-3 text-[11px] font-semibold text-[#096644]">Livro registrado com sucesso.</p>
      <div className="mt-4 flex flex-col justify-end gap-2 sm:flex-row">
        <button type="button" onClick={() => setRegisteredBook(null)} className={pageSecondaryButtonClass}>Cadastrar outro livro</button>
        <button type="button" onClick={() => navigate('/users/register')} className={pagePrimaryButtonClass}>Concluir</button>
      </div>
    </section> : <BookRegistrationForm onSuccess={setRegisteredBook} onCancel={() => navigate('/users/register')} />}
  </DashboardLayout>
}
