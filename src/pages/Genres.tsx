import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GenreRegistrationForm } from '@/components/GenreRegistrationForm'
import { pageCardClass, pageContentClass, pageDescriptionClass, pagePrimaryButtonClass, pageSecondaryButtonClass, pageSectionTitleClass, pageTitleClass } from '@/lib/pageStyles'

type RegisteredGenre = { name: string; description: string }

export default function Genres() {
  const [registeredGenre, setRegisteredGenre] = useState<RegisteredGenre | null>(null)
  const navigate = useNavigate()

  return <DashboardLayout>
    <div className={pageContentClass}>
      <header className="mb-4">
        <h1 className={pageTitleClass}>{registeredGenre ? 'Gênero cadastrado' : 'Cadastrar gênero'}</h1>
        {!registeredGenre && <p className={pageDescriptionClass}>Preencha os dados do gênero. Os campos com * são obrigatórios</p>}
      </header>
      {registeredGenre ? <section className={pageCardClass}>
        <h2 className={pageSectionTitleClass}>Cadastro realizado com sucesso</h2>
        <p className="text-[12px] leading-4 text-[#52627f]">O gênero já está disponível para ser vinculado a livros.</p>
        <dl className="mt-[11px] grid gap-3 text-[12px] leading-[17px] sm:grid-cols-2">
          <div><dt className="text-[#718096]">Nome do gênero</dt><dd className="font-semibold text-[#19294c]">{registeredGenre.name}</dd></div>
          {registeredGenre.description && <div><dt className="text-[#718096]">Descrição</dt><dd className="whitespace-pre-wrap font-semibold text-[#19294c]">{registeredGenre.description}</dd></div>}
        </dl>
        <p role="status" className="mt-3 rounded-[8px] bg-[#e5f5ee] px-3 py-3 text-[11px] font-semibold text-[#096644]">Gênero registrado com sucesso.</p>
        <div className="mt-4 flex flex-col justify-end gap-2 sm:flex-row">
          <button type="button" onClick={() => setRegisteredGenre(null)} className={pageSecondaryButtonClass}>Cadastrar outro gênero</button>
          <button type="button" onClick={() => navigate('/users/register')} className={pagePrimaryButtonClass}>Concluir</button>
        </div>
      </section> : <GenreRegistrationForm onSuccess={setRegisteredGenre} onCancel={() => navigate('/users/register')} />}
    </div>
  </DashboardLayout>
}
