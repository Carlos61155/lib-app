import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookRegistrationForm, type BookRegistrationResult } from '@/components/BookRegistrationForm'
import { DashboardLayout } from '@/components/DashboardLayout'

function Detail({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return <div><dt className="text-[#718096]">{label}</dt><dd className="break-words font-semibold text-[#19294c]">{value}</dd></div>
}

export default function Books() {
  const [registeredBook, setRegisteredBook] = useState<BookRegistrationResult | null>(null)
  const navigate = useNavigate()

  return <DashboardLayout>
    <header className="mx-auto w-full max-w-[900px]">
      <h1 className="text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#151515]">{registeredBook ? 'Livro cadastrado' : 'Cadastrar livro'}</h1>
      {!registeredBook && <p className="text-[12px] leading-[17px] text-[#718096]">Preencha os dados do livro. Os campos com * são obrigatórios.</p>}
    </header>
    {registeredBook ? <section className="mx-auto mt-[39px] w-full max-w-[900px] rounded-[9px] bg-white px-5 py-5 sm:px-7 lg:px-[29px] lg:py-[18px]">
      <h2 className="text-[14px] font-bold leading-5 text-[#19294c]">Cadastro realizado com sucesso</h2>
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
      <p role="status" className="mt-[10px] rounded-[9px] bg-[#e5f5ee] px-[13px] py-[14px] text-[12px] font-semibold text-[#096644]">Livro registrado com sucesso.</p>
      <div className="mt-[23px] flex flex-col justify-end gap-3 sm:flex-row">
        <button type="button" onClick={() => setRegisteredBook(null)} className="h-[45px] rounded-[9px] border border-[#315bbd] bg-white px-[14px] text-[12px] font-semibold text-[#19294c]">Cadastrar outro livro</button>
        <button type="button" onClick={() => navigate('/home')} className="h-[45px] min-w-[113px] rounded-[9px] bg-[#2e56b2] px-6 text-[12px] font-semibold text-white">Concluir</button>
      </div>
    </section> : <BookRegistrationForm onSuccess={setRegisteredBook} onCancel={() => navigate('/home')} />}
  </DashboardLayout>
}
