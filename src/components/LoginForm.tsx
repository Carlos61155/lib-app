import { Lock, BookOpen, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

type LoginFormValues = {
  username: string
  password: string
}

export function LoginForm() {
  const form = useForm<LoginFormValues>({
    defaultValues: { username: '', password: '' },
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

        <form className="flex flex-col gap-2.5" onSubmit={form.handleSubmit(() => undefined)}>
          <Field className="gap-1.5">
            <FieldLabel htmlFor="username" className="pl-4 text-[14px] font-semibold text-[#273653]">
              Usuário
            </FieldLabel>
            <div className="relative">
              <Input
                id="username"
                autoComplete="username"
                placeholder="Digite o usuário"
                className="h-11 rounded-[8px] border-[#414141] bg-white px-4 pr-11 text-[14px] font-medium placeholder:text-[#6e7a91] focus-visible:border-[#2e56b2] focus-visible:ring-[#2e56b2]/20"
                {...form.register('username')}
              />
              <User aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#65748b]" />
            </div>
          </Field>

          <Field className="gap-1.5">
            <FieldLabel htmlFor="password" className="pl-4 text-[14px] font-semibold text-[#273653]">
              Senha
            </FieldLabel>
            <div className="relative">
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Digite a senha"
                className="h-11 rounded-[8px] border-[#414141] bg-white px-4 pr-11 text-[14px] font-medium placeholder:text-[#6e7a91] focus-visible:border-[#2e56b2] focus-visible:ring-[#2e56b2]/20"
                {...form.register('password')}
              />
              <Lock aria-hidden="true" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#65748b]" />
            </div>
          </Field>

          <Button
            type="submit"
            className="mt-3 h-11 rounded-[7px] bg-[#2e56b2] text-[18px] font-bold text-white hover:bg-[#25499d]"
          >
            Entrar
          </Button>
        </form>
      </div>
    </section>
  )
}
