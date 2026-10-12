import { Lock, BookOpen, User } from 'lucide-react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { RequiredField } from '@/components/RequiredField'

type LoginFormValues = {
  username: string
  password: string
}

export function LoginForm() {
  const form = useForm<LoginFormValues>({
    defaultValues: { username: '', password: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  return (
    <section className="flex min-h-[520px] flex-1 items-center justify-center bg-white px-7 py-16 sm:px-12 lg:min-h-screen lg:px-16">
      <div className="w-full max-w-[368px]">
        <div className="mb-8 text-center">
          <BookOpen aria-hidden="true" className="mx-auto mb-5 size-11 stroke-[1.35] text-[#2e56b2]" />
          <h1 className="text-[28px] font-bold leading-tight tracking-tight text-[#171717] sm:text-[29px]">
            Bem-vindo de volta
          </h1>
          <p className="mt-2 text-[15px] leading-5 text-[#718096]">
            Informe seu usuário e a senha de acesso ao sistema.
          </p>
        </div>

        <FormProvider {...form}>
          <form className="flex flex-col gap-2.5" onSubmit={form.handleSubmit(() => undefined)}>
            <RequiredField<LoginFormValues>
              name="username"
              label="Usuário"
              placeholder="Digite o usuário"
              autoComplete="username"
              icon={<User aria-hidden="true" className="size-4" />}
            />
            <RequiredField<LoginFormValues>
              name="password"
              label="Senha"
              type="password"
              placeholder="Digite a senha"
              autoComplete="current-password"
              icon={<Lock aria-hidden="true" className="size-4" />}
            />
            <Button
              type="submit"
              className="mt-3 h-11 rounded-[7px] bg-[#2e56b2] text-[18px] font-bold text-white hover:bg-[#25499d]"
            >
              Entrar
            </Button>
          </form>
        </FormProvider>
      </div>
    </section>
  )
}
