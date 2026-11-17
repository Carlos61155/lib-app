import { useState } from 'react'
import { DashboardLayout } from '@/components/DashboardLayout'
import { UserRegistrationForm } from '@/components/UserRegistrationForm'
import { RegistrationSuccess, type RegistrationSuccessData } from '@/components/RegistrationSuccess'
import { pageContentClass, pageDescriptionClass, pageTitleClass } from '@/lib/pageStyles'

export default function Home() {
  const [registration, setRegistration] = useState<RegistrationSuccessData | null>(null)

  return (
    <DashboardLayout>
      <header className={`${pageContentClass} mb-4`}>
        <h1 className={pageTitleClass}>{registration ? 'Usuário cadastrado' : 'Cadastrar usuário'}</h1>
        {!registration && <p className={pageDescriptionClass}>
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
