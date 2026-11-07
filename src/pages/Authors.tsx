import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/DashboardLayout'
import { AuthorRegistrationForm, type AuthorRegistrationResult } from '@/components/AuthorRegistrationForm'

export default function Authors() {
  const [registeredAuthor, setRegisteredAuthor] = useState<AuthorRegistrationResult | null>(null)
  const navigate = useNavigate()

  return (
    <DashboardLayout>
      <header className="mx-auto w-full max-w-[724px]">
        <h1 className="text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#151515]">{registeredAuthor ? 'Autor cadastrado' : 'Cadastrar autor'}</h1>
        {!registeredAuthor && <p className="text-[12px] leading-[17px] text-[#718096]">Preencha os dados do autor. Os campos com * são obrigatórios</p>}
      </header>
      {registeredAuthor ? (
        <section className="mx-auto mt-[39px] w-full max-w-[724px] rounded-[9px] bg-white px-5 py-5 sm:px-7 lg:px-[29px] lg:py-[18px]">
          <h2 className="text-[14px] font-bold leading-5 text-[#19294c]">Cadastro realizado com sucesso</h2>
          <p className="text-[12px] leading-4 text-[#52627f]">O autor já está disponível para ser vinculado a livros.</p>
          <dl className="mt-[11px] grid min-w-0 grid-cols-1 gap-3 text-[12px] leading-[17px] sm:grid-cols-2">
            <div><dt className="text-[#718096]">Nome completo</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.name}</dd></div>
            <div><dt className="text-[#718096]">Nacionalidade</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.nationality}</dd></div>
            {registeredAuthor.pseudonym && <div><dt className="text-[#718096]">Nome literário / pseudônimo</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.pseudonym}</dd></div>}
            {registeredAuthor.dateOfBirth && <div><dt className="text-[#718096]">Data de nascimento</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.dateOfBirth}</dd></div>}
            {registeredAuthor.dateOfDeath && <div><dt className="text-[#718096]">Data de falecimento</dt><dd className="font-semibold text-[#19294c]">{registeredAuthor.dateOfDeath}</dd></div>}
            {registeredAuthor.biography && <div className="min-w-0 sm:col-span-2"><dt className="text-[#718096]">Biografia resumida</dt><dd className="min-w-0 whitespace-pre-wrap break-words [overflow-wrap:anywhere] font-semibold text-[#19294c]">{registeredAuthor.biography}</dd></div>}
          </dl>
          <p role="status" className="mt-[10px] rounded-[9px] bg-[#e5f5ee] px-[13px] py-[14px] text-[12px] font-semibold text-[#096644]">Autor registrado com sucesso.</p>
          <div className="mt-[23px] flex flex-col justify-end gap-3 sm:flex-row">
            <button type="button" onClick={() => setRegisteredAuthor(null)} className="h-[45px] rounded-[9px] border border-[#315bbd] bg-white px-[14px] text-[12px] font-semibold text-[#19294c]">Cadastrar outro autor</button>
            <button type="button" onClick={() => navigate('/home')} className="h-[45px] min-w-[113px] rounded-[9px] bg-[#2e56b2] px-6 text-[12px] font-semibold text-white">Concluir</button>
          </div>
        </section>
      ) : <AuthorRegistrationForm onSuccess={setRegisteredAuthor} />}
    </DashboardLayout>
  )
}
