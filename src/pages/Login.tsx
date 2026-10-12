import { Institutional } from '@/components/Institutional'
import { LoginForm } from '@/components/LoginForm'

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <Institutional />
      <LoginForm />
    </main>
  )
}
