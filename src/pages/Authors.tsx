import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/DashboardLayout'
import { AuthorRegistrationForm, type AuthorRegistrationResult } from '@/components/AuthorRegistrationForm'
import { pageCardClass, pageContentClass, pageDescriptionClass, pagePrimaryButtonClass, pageSecondaryButtonClass, pageSectionTitleClass, pageTitleClass } from '@/lib/pageStyles'

export default function Authors() {
  const [registeredAuthor, setRegisteredAuthor] = useState<AuthorRegistrationResult | null>(null)
  const navigate = useNavigate()

  return (
    <DashboardLayout>
      <header className={`${pageContentClass} mb-4`}>
        <h1 className={pageTitleClass}>{registeredAuthor ? 'Autor cadastrado' : 'Cadastrar autor'}</h1>
        {!registeredAuthor && <p className={pageDescriptionClass}>Preencha os dados do autor. Os campos com * são obrigatórios</p>}
      </header>
      {registeredAuthor ? (
        <section className={`${pageContentClass} ${pageCardClass}`}>
          <h2 className={pageSectionTitleClass}>Cadastro realizado com sucesso</h2>
          <p className="text-[12px] leading-4 text-[#52627f]">O autor já está disponível para ser vinculado a livros.</p>
          <dl className="mt-[11px] grid min-w-0 grid-cols-1 gap-3 text-[12px] leading-[17px] sm:grid-cols-2">
            <div><dt className="text-[#718096]">Nome completo</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.name}</dd></div>
            <div><dt className="text-[#718096]">Nacionalidade</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.nationality}</dd></div>
            {registeredAuthor.pseudonym && <div><dt className="text-[#718096]">Nome literário / pseudônimo</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.pseudonym}</dd></div>}
            {registeredAuthor.dateOfBirth && <div><dt className="text-[#718096]">Data de nascimento</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.dateOfBirth}</dd></div>}
            {registeredAuthor.dateOfDeath && <div><dt className="text-[#718096]">Data de falecimento</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.dateOfDeath}</dd></div>}
            {registeredAuthor.biography && <div className="min-w-0 sm:col-span-2"><dt className="text-[#718096]">Biografia resumida</dt><dd className="min-w-0 whitespace-pre-wrap break-words [overflow-wrap:anywhere] font-semibold text-[#19294c]">{registeredAuthor.biography}</dd></div>}
          </dl>
          <p role="status" className="mt-3 rounded-[8px] bg-[#e5f5ee] px-3 py-3 text-[11px] font-semibold text-[#096644]">Autor registrado com sucesso.</p>
          <div className="mt-4 flex flex-col justify-end gap-2 sm:flex-row">
            <button type="button" onClick={() => setRegisteredAuthor(null)} className={pageSecondaryButtonClass}>Cadastrar outro autor</button>
            <button type="button" onClick={() => navigate('/users/register')} className={pagePrimaryButtonClass}>Concluir</button>
          </div>
        </section>
      ) : <AuthorRegistrationForm onSuccess={setRegisteredAuthor} />}
    </DashboardLayout>
  )
}
