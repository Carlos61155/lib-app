import { useState } from 'react'

export type RegistrationSuccessData = {
  name: string
  profile: 'Aluno' | 'Professor' | 'Bibliotecário'
  registrationNumber?: string
  courseOrDepartment?: string
  accessCode?: string
  temporaryPassword?: string
}

export function RegistrationSuccess({ data, onFinish }: {
  data: RegistrationSuccessData
  onFinish: () => void
}) {
  const [copied, setCopied] = useState(false)
  const isLibrarian = data.profile === 'Bibliotecário'

  const copyTemporaryPassword = async () => {
    if (!data.temporaryPassword) return
    try {
      await navigator.clipboard.writeText(data.temporaryPassword)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="mx-auto mt-[12px] w-full max-w-[724px] rounded-[9px] bg-white px-6 py-8 sm:px-[30px] lg:px-[31px] lg:pb-[30px] lg:pt-[29px]">
      <p className="text-[14px] font-semibold leading-5 text-[#19294c]">Cadastro concluído com sucesso</p>
      {isLibrarian && <p className="text-[14px] leading-5 text-[#718096]">Repasse a senha provisória ao usuário. Ele deverá trocá-la no primeiro acesso.</p>}

      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 text-[14px] leading-5 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="text-[#718096]">Nome do usuário</p>
          <p className="font-semibold text-[#19294c]">{data.name}</p>
        </div>
        <div className="sm:min-w-[105px]">
          <p className="text-[#718096]">Perfil</p>
          <p className="font-semibold text-[#19294c]">{data.profile}</p>
        </div>
        {data.registrationNumber && <div>
          <p className="text-[#718096]">Matrícula do usuário</p>
          <p className="font-semibold text-[#19294c]">{data.registrationNumber}</p>
        </div>}
        {data.courseOrDepartment && <div>
          <p className="text-[#718096]">{data.profile === 'Professor' ? 'Departamento' : 'Curso'}</p>
          <p className="font-semibold text-[#19294c]">{data.courseOrDepartment}</p>
        </div>}
        {isLibrarian && data.accessCode && <div>
          <p className="text-[#718096]">Usuário de acesso</p>
          <p className="font-semibold text-[#19294c]">{data.accessCode}</p>
        </div>}
      </div>

      {isLibrarian && data.temporaryPassword && <div className="mt-5">
        <label htmlFor="temporary-password" className="mb-2 block pl-1 text-[14px] font-semibold text-[#19294c]">Senha provisória</label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input id="temporary-password" readOnly value={data.temporaryPassword} className="h-[42px] min-w-0 flex-1 rounded-[8px] border border-[#315bbd] bg-white px-4 text-[14px] font-semibold text-[#19294c]" />
          <button type="button" onClick={copyTemporaryPassword} className="h-[42px] rounded-[8px] border border-[#315bbd] bg-white px-5 text-[14px] font-semibold text-[#19294c]">{copied ? 'Senha copiada' : 'Copiar senha'}</button>
        </div>
        <p className="mx-1 mt-4 rounded-[8px] bg-[#fff9bf] px-4 py-3 text-[14px] font-semibold text-[#aaa23b]">Anote ou copie essa senha. Ela não será exibida novamente.</p>
      </div>}

      <div className="mt-2 flex flex-col justify-end gap-3 sm:flex-row">
        <button type="button" onClick={onFinish} className="h-[41px] rounded-[8px] border border-[#315bbd] bg-white px-4 text-[14px] font-semibold text-[#19294c]">Cadastrar outro usuário</button>
        <button type="button" onClick={onFinish} className="h-[41px] rounded-[8px] bg-[#2e56b2] px-7 text-[14px] font-semibold text-white">Concluir</button>
      </div>
    </section>
  )
}
