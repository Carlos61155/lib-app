import { useState } from 'react'
import { pageCardClass, pageContentClass, pageFieldClass, pageLabelClass, pagePrimaryButtonClass, pageSecondaryButtonClass } from '@/lib/pageStyles'

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
    <section className={`${pageContentClass} ${pageCardClass}`}>
      <p className="text-[14px] font-bold leading-5 text-[#19294c]">Cadastro concluído com sucesso</p>
      {isLibrarian && <p className="text-[12px] leading-[17px] text-[#718096]">Repasse a senha provisória ao usuário. Ele deverá trocá-la no primeiro acesso.</p>}

      <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 text-[12px] leading-[17px] sm:grid-cols-[1fr_auto]">
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

      {isLibrarian && data.temporaryPassword && <div className="mt-4">
        <label htmlFor="temporary-password" className={`${pageLabelClass} mb-2`}>Senha provisória</label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input id="temporary-password" readOnly value={data.temporaryPassword} className={`${pageFieldClass} flex-1 font-semibold`} />
          <button type="button" onClick={copyTemporaryPassword} className={pageSecondaryButtonClass}>{copied ? 'Senha copiada' : 'Copiar senha'}</button>
        </div>
        <p className="mx-1 mt-4 rounded-[8px] bg-[#fff9bf] px-4 py-3 text-[14px] font-semibold text-[#aaa23b]">Anote ou copie essa senha. Ela não será exibida novamente.</p>
      </div>}

      <div className="mt-4 flex flex-col-reverse justify-end gap-2 sm:flex-row">
        <button type="button" onClick={onFinish} className={pageSecondaryButtonClass}>Cadastrar outro usuário</button>
        <button type="button" onClick={onFinish} className={pagePrimaryButtonClass}>Concluir</button>
      </div>
    </section>
  )
}
