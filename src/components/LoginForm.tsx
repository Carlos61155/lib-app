import { useEffect, useState } from 'react'
import { Lock, BookOpen, User } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { RequiredField } from '@/components/RequiredField'

type LoginFormValues = {
  username: string
  password: string
  newPassword: string
  confirmPassword: string
}

function errorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error)
}

export function LoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const sessionExpired = Boolean(
    (location.state as { sessionExpired?: boolean } | null)?.sessionExpired,
  )
  const [mustChangePassword, setMustChangePassword] = useState(false)
  const [temporaryPassword, setTemporaryPassword] = useState('')
  const [invalidCredentials, setInvalidCredentials] = useState(false)
  const [lockedUntil, setLockedUntil] = useState<number | null>(null)
  const [now, setNow] = useState(Date.now())
  const form = useForm<LoginFormValues>({
    defaultValues: { username: '', password: '', newPassword: '', confirmPassword: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })
  const username = form.watch('username')
  const password = form.watch('password')
  const isLocked = lockedUntil !== null && now < lockedUntil
  const remainingSeconds = isLocked ? Math.ceil((lockedUntil - now) / 1000) : 0

  useEffect(() => {
    if (lockedUntil === null) return
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [lockedUntil])

  useEffect(() => {
    if (lockedUntil !== null && now >= lockedUntil) setLockedUntil(null)
  }, [lockedUntil, now])

  useEffect(() => {
    setInvalidCredentials(false)
  }, [username, password])

  const onSubmit = async ({ username, password, newPassword }: LoginFormValues) => {
    if (!mustChangePassword) {
      try {
        const result = await window.authAPI.login(username, password)
        if (result.user.mustChangePassword) {
          setTemporaryPassword(password)
          setMustChangePassword(true)
          form.reset({ username, password: '', newPassword: '', confirmPassword: '' })
          return
        }
        navigate('/home')
      } catch (error) {
        const message = errorMessage(error)
        if (message.includes('ACCOUNT_LOCKED')) {
          const lockTimestamp = message.match(/ACCOUNT_LOCKED:(\d{4}-\d{2}-\d{2}T[^\s]+)/)?.[1]
          const parsedLockUntil = lockTimestamp ? Date.parse(lockTimestamp) : NaN
          if (Number.isFinite(parsedLockUntil)) {
            setLockedUntil(parsedLockUntil)
            setNow(Date.now())
          } else {
            form.setError('root.server', { type: 'server', message: 'O acesso está temporariamente bloqueado.' })
          }
          setInvalidCredentials(false)
          return
        }
        if (message.includes('INVALID_CREDENTIALS')) {
          setInvalidCredentials(true)
          return
        }
        form.setError('root.server', { type: 'server', message: loginErrorMessage(message) })
      }
      return
    }

    try {
      await window.authAPI.changePassword(temporaryPassword, newPassword)
      setTemporaryPassword('')
      navigate('/home')
    } catch (error) {
      const message = errorMessage(error)
      if (message.includes('PASSWORD_TOO_SHORT')) {
        form.setError('newPassword', { type: 'server', message: 'A senha deve ter pelo menos 12 caracteres.' })
      } else if (message.includes('PASSWORD_MUST_BE_DIFFERENT')) {
        form.setError('newPassword', { type: 'server', message: 'A nova senha deve ser diferente da senha provisória.' })
      } else if (message.includes('INVALID_CURRENT_PASSWORD')) {
        form.setError('root.server', { type: 'server', message: 'Não foi possível validar a senha provisória. Entre novamente.' })
      } else {
        form.setError('root.server', { type: 'server', message: 'Não foi possível definir a senha. Tente novamente.' })
      }
    }
  }

  return (
    <section className="flex min-h-[520px] flex-1 items-center justify-center bg-white px-7 py-16 sm:px-12 lg:min-h-screen lg:px-16">
      <div className="w-full max-w-[368px]">
        <div className="mb-8 text-center">
          <BookOpen aria-hidden="true" className="mx-auto mb-5 size-11 stroke-[1.35] text-[#2e56b2]" />
          <h1 className="text-[28px] font-bold leading-tight tracking-tight text-[#171717] sm:text-[29px]">
            {isLocked ? 'Acesso bloqueado' : mustChangePassword ? 'Defina sua senha' : 'Bem-vindo de volta'}
          </h1>
          <p className="mt-2 text-[15px] leading-5 text-[#718096]">
            {isLocked
              ? 'O login está temporariamente bloqueado por excesso de tentativas inválidas'
              : mustChangePassword
              ? 'Você entrou com a senha provisória. Crie uma nova senha para continuar.'
              : 'Informe seu usuário e a senha de acesso ao sistema.'}
          </p>
          {sessionExpired && (
            <p role="status" className="mt-4 rounded-[7px] bg-[#EAF2FF] px-4 py-3 text-left text-[13px] leading-5 text-[#2E56B2]">
              Sua sessão foi encerrada por inatividade. Entre novamente
            </p>
          )}
          {invalidCredentials && !mustChangePassword && !isLocked && (
            <p role="alert" className="mt-4 rounded-[7px] bg-[#FDEBEC] px-4 py-3 text-left text-[13px] leading-5 text-[#B42331]">
              Usuário e/ou senha incorretos
            </p>
          )}
        </div>

        <FormProvider {...form}>
          <form className="flex flex-col gap-2.5" onSubmit={form.handleSubmit(onSubmit)}>
            {!mustChangePassword ? (
              <>
                <RequiredField<LoginFormValues>
                  name="username"
                  label="Usuário"
                  placeholder="Digite o usuário"
                  autoComplete="username"
                  icon={<User aria-hidden="true" className="size-4" />}
                  forceInvalid={invalidCredentials}
                  disabled={isLocked}
                />
                <RequiredField<LoginFormValues>
                  name="password"
                  label="Senha"
                  type="password"
                  placeholder="Digite a senha"
                  autoComplete="current-password"
                  icon={<Lock aria-hidden="true" className="size-4" />}
                  forceInvalid={invalidCredentials}
                  disabled={isLocked}
                />
              </>
            ) : (
              <>
                <RequiredField<LoginFormValues>
                  name="newPassword"
                  label="Senha"
                  type="password"
                  placeholder="Digite a senha"
                  autoComplete="new-password"
                  icon={<Lock aria-hidden="true" className="size-4" />}
                  helperText="Mínimo de 12 caracteres. Deve ser diferente da senha provisória"
                  validate={(value) => value.length >= 12 || 'Mínimo de 12 caracteres'}
                />
                <RequiredField<LoginFormValues>
                  name="confirmPassword"
                  label="Confirmar senha"
                  type="password"
                  placeholder="Repita a sua senha"
                  autoComplete="new-password"
                  icon={<Lock aria-hidden="true" className="size-4" />}
                  validate={(value) => value === form.getValues('newPassword') || 'As senhas não coincidem.'}
                />
              </>
            )}
            {isLocked && !mustChangePassword && (
              <p role="status" className="rounded-[7px] bg-[#E5E7EB] px-4 py-3 text-center text-[13px] leading-5 text-[#414141]">
                Tente novamente em: {formatCountdown(remainingSeconds)}
              </p>
            )}
            {form.formState.errors.root?.server?.message && (
              <p role="alert" className="pl-4 text-[12px] leading-4 text-[#B42331]">
                {form.formState.errors.root.server.message}
              </p>
            )}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting || isLocked}
              className="mt-3 h-11 rounded-[7px] bg-[#2e56b2] text-[18px] font-bold text-white hover:bg-[#25499d]"
            >
              {form.formState.isSubmitting ? 'Entrando...' : mustChangePassword ? 'Definir senha' : 'Entrar'}
            </Button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}

function loginErrorMessage(message: string) {
  if (message.includes('INVALID_CREDENTIALS')) return 'Usuário ou senha inválidos.'
  if (message.includes('ACCOUNT_LOCKED')) return 'Conta temporariamente bloqueada. Tente novamente mais tarde.'
  if (message.includes('ACCOUNT_UNAVAILABLE')) return 'Esta conta não está disponível.'
  return 'Não foi possível entrar. Tente novamente.'
}

function formatCountdown(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, '0')).join(':')
}
