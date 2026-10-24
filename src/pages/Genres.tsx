import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DashboardLayout } from '@/components/DashboardLayout'
import { GenreRegistrationForm } from '@/components/GenreRegistrationForm'

type RegisteredGenre = { name: string; description: string }

export default function Genres() {
  const [registeredGenre, setRegisteredGenre] = useState<RegisteredGenre | null>(null)
  const navigate = useNavigate()

  return <DashboardLayout>
    <div className="mx-auto w-full max-w-[724px]">
      <header>
        <h1 className="text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#151515]">{registeredGenre ? 'Gênero cadastrado' : 'Cadastrar gênero'}</h1>
        {!registeredGenre && <p className="text-[12px] leading-[17px] text-[#718096]">Preencha os dados do gênero. Os campos com * são obrigatórios</p>}
      </header>
      {registeredGenre ? <section className="mt-[39px] rounded-[9px] bg-white px-5 py-5 sm:px-7 lg:px-[29px] lg:py-[18px]">
        <h2 className="text-[14px] font-bold leading-5 text-[#19294c]">Cadastro realizado com sucesso</h2>
        <p className="text-[12px] leading-4 text-[#52627f]">O gênero já está disponível para ser vinculado a livros.</p>
        <dl className="mt-[11px] grid gap-3 text-[12px] leading-[17px] sm:grid-cols-2">
          <div><dt className="text-[#718096]">Nome do gênero</dt><dd className="font-semibold text-[#19294c]">{registeredGenre.name}</dd></div>
          {registeredGenre.description && <div><dt className="text-[#718096]">Descrição</dt><dd className="whitespace-pre-wrap font-semibold text-[#19294c]">{registeredGenre.description}</dd></div>}
        </dl>
        <p role="status" className="mt-[10px] rounded-[9px] bg-[#e5f5ee] px-[13px] py-[14px] text-[12px] font-semibold text-[#096644]">Gênero registrado com sucesso.</p>
        <div className="mt-[23px] flex flex-col justify-end gap-3 sm:flex-row">
          <button type="button" onClick={() => setRegisteredGenre(null)} className="h-[45px] rounded-[9px] border border-[#315bbd] bg-white px-[14px] text-[12px] font-semibold text-[#19294c]">Cadastrar outro gênero</button>
          <button type="button" onClick={() => navigate('/home')} className="h-[45px] min-w-[113px] rounded-[9px] bg-[#2e56b2] px-6 text-[12px] font-semibold text-white">Concluir</button>
        </div>
      </section> : <GenreRegistrationForm onSuccess={setRegisteredGenre} onCancel={() => navigate('/home')} />}
    </div>
  </DashboardLayout>
}
