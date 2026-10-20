import { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { UserRegistrationForm } from '@/components/UserRegistrationForm'
import { RegistrationSuccess, type RegistrationSuccessData } from '@/components/RegistrationSuccess'

export default function Home() {
  const [registration, setRegistration] = useState<RegistrationSuccessData | null>(null)

  return (
    <DashboardLayout>
      <header className="mx-auto w-full max-w-[724px]">
        <h1 className="text-[22px] font-bold leading-[27px] tracking-[-0.5px] text-[#151515]">{registration ? 'Usuário cadastrado' : 'Cadastrar usuário'}</h1>
        {!registration && <p className="text-[12px] leading-[17px] text-[#718096]">
          Preencha os dados do novo usuário. Os campos com * são obrigatórios
        </p>}
      </header>
      {registration ? (
        <RegistrationSuccess data={registration} onFinish={() => setRegistration(null)} />
      ) : (
        <UserRegistrationForm onSuccess={setRegistration} />
      )}
    </DashboardLayout>
  )
}
