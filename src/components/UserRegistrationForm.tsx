import { useState } from 'react'
import { FormProvider, useForm, useFormContext, useController } from 'react-hook-form'
import type { RegistrationSuccessData } from '@/components/RegistrationSuccess'

const profiles = ['Aluno', 'Professor', 'Bibliotecário'] as const
type Profile = (typeof profiles)[number]
type RegistrationValues = {
  name: string
  cpf: string
  email: string
  registrationNumber: string
  course: string
  department: string
}

function cpfIsValid(input: string) {
  if (!/^\d{11}$/.test(input) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(input)) return false
  const cpf = input.replace(/[.-]/g, '')
  if (!/^\d{11}$/.test(cpf) || /^(\d)\1{10}$/.test(cpf)) return false
  const digit = (length: number) => {
    const sum = [...cpf.slice(0, length)].reduce((total, value, index) => total + Number(value) * (length + 1 - index), 0)
    const remainder = sum % 11
    return remainder < 2 ? 0 : 11 - remainder
  }
  return digit(9) === Number(cpf[9]) && digit(10) === Number(cpf[10])
}

function RegistrationField({ name, label, placeholder, type = 'text', validate }: {
  name: keyof RegistrationValues
  label: string
  placeholder: string
  type?: string
  validate?: (value: string) => true | string
}) {
  const { control } = useFormContext<RegistrationValues>()
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      validate: (value) => {
        const normalized = String(value ?? '').trim()
        if (!normalized) return `${label} é obrigatório.`
        return validate?.(normalized) ?? true
      },
    },
  })
  const errorId = `${name}-error`

  return (
    <label className="flex min-w-0 flex-col gap-[10px] text-[13px] font-semibold leading-4 text-[#19294c]">
      <span>{label} <span aria-hidden="true">*</span></span>
      <input
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={fieldState.invalid}
        aria-describedby={fieldState.error ? errorId : undefined}
        className={`h-[52px] w-full rounded-[10px] border bg-white px-[10px] text-[14px] font-medium text-[#19294c] placeholder:text-[#69768f] focus:outline-none ${fieldState.invalid ? 'border-[#B42331]' : 'border-[#315bbd]'}`}
      />
      {fieldState.error && <span id={errorId} role="alert" className="text-[12px] font-normal text-[#B42331]">{fieldState.error.message}</span>}
    </label>
  )
}

function StudentProfessorFields({ profile }: { profile: 'Aluno' | 'Professor' }) {
  return (
    <>
      <RegistrationField name="name" label="Nome completo" placeholder="Digite o nome completo" validate={(value) => value.length <= 120 || 'Use no máximo 120 caracteres.'} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7">
        <RegistrationField name="cpf" label="CPF" placeholder="000.000.000-00" validate={(value) => cpfIsValid(value) || 'Informe um CPF válido.'} />
        <RegistrationField name="email" label="E-mail" placeholder="email@example.com" type="email" validate={(value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254) || 'Informe um e-mail válido.'} />
        <RegistrationField name="registrationNumber" label="Matrícula" placeholder="Digite a matrícula" validate={(value) => value.length <= 40 || 'Use no máximo 40 caracteres.'} />
        {profile === 'Professor' ? (
          <RegistrationField name="department" label="Departamento" placeholder="Digite o departamento" />
        ) : (
          <RegistrationField name="course" label="Curso" placeholder="Digite o curso" validate={(value) => value.length <= 120 || 'Use no máximo 120 caracteres.'} />
        )}
      </div>
    </>
  )
}

function LibrarianFields() {
  return (
    <>
      <RegistrationField name="name" label="Nome completo" placeholder="Digite o nome completo" validate={(value) => value.length <= 120 || 'Use no máximo 120 caracteres.'} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-7">
        <RegistrationField name="cpf" label="CPF" placeholder="000.000.000-00" validate={(value) => cpfIsValid(value) || 'Informe um CPF válido.'} />
        <RegistrationField name="email" label="E-mail" placeholder="email@example.com" type="email" validate={(value) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254) || 'Informe um e-mail válido.'} />
      </div>
    </>
  )
}

function registrationErrorMessage(error: unknown) {
  const message = error instanceof Error ? error.message : String(error)
  if (message.includes('EMAIL_ALREADY_REGISTERED')) return 'Este e-mail já está cadastrado.'
  if (message.includes('REGISTRATION_NUMBER_ALREADY_REGISTERED')) return 'Esta matrícula já está cadastrada.'
  if (message.includes('CPF_FORMAT_INVALID') || message.includes('CPF_INVALID')) return 'Informe um CPF válido.'
  if (message.includes('DUPLICATE_DATA')) return 'Já existe um cadastro com esses dados.'
  if (message.includes('NOT_AUTHENTICATED') || message.includes('SESSION_EXPIRED')) return 'Sua sessão expirou. Entre novamente.'
  if (message.includes('PASSWORD_CHANGE_REQUIRED')) return 'Defina sua senha antes de cadastrar usuários.'
  return 'Não foi possível cadastrar o usuário. Confira os dados e tente novamente.'
}

export function UserRegistrationForm({ onSuccess }: { onSuccess: (data: RegistrationSuccessData) => void }) {
  const [profile, setProfile] = useState<Profile>('Aluno')
  const form = useForm<RegistrationValues>({
    defaultValues: { name: '', cpf: '', email: '', registrationNumber: '', course: '', department: '' },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldUnregister: true,
  })

  const changeProfile = (nextProfile: Profile) => {
    setProfile(nextProfile)
    form.clearErrors()
    form.reset({ name: '', cpf: '', email: '', registrationNumber: '', course: '', department: '' })
  }

  const onSubmit = async (values: RegistrationValues) => {
    try {
      let result: { accessCode?: string; temporaryPassword?: string } = {}
      if (profile === 'Aluno') {
        await window.authAPI.createStudent({ name: values.name.trim(), cpf: values.cpf.trim(), email: values.email.trim(), registrationNumber: values.registrationNumber.trim(), course: values.course.trim() })
      } else if (profile === 'Professor') {
        await window.authAPI.createProfessor({ name: values.name.trim(), cpf: values.cpf.trim(), email: values.email.trim(), registrationNumber: values.registrationNumber.trim(), department: values.department.trim() })
      } else {
        result = await window.authAPI.createLibrarian({ name: values.name.trim(), cpf: values.cpf.trim(), email: values.email.trim() })
      }
      onSuccess({
        name: values.name.trim(),
        profile,
        ...(profile !== 'Bibliotecário' ? { registrationNumber: values.registrationNumber.trim() } : {}),
        ...(profile === 'Aluno' ? { courseOrDepartment: values.course.trim() } : {}),
        ...(profile === 'Professor' ? { courseOrDepartment: values.department.trim() } : {}),
        ...result,
      })
    } catch (error) {
      form.setError('root.server', { type: 'server', message: registrationErrorMessage(error) })
    }
  }

  return (
    <section className="mx-auto mt-[50px] w-full max-w-[724px] rounded-[9px] bg-white px-5 py-7 sm:px-7 lg:px-[29px] lg:pb-[39px] lg:pt-[43px]">
      <FormProvider {...form}>
        <form aria-label="Cadastrar usuário" noValidate className="space-y-[12px]" onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset>
            <legend className="mb-[7px] text-[13px] font-semibold leading-4 text-[#19294c]">Perfil *</legend>
            <div className="flex flex-wrap gap-3 sm:gap-7">
              {profiles.map((option) => {
                const isSelected = profile === option
                return <button key={option} type="button" aria-pressed={isSelected} onClick={() => changeProfile(option)} className={`h-[51px] min-w-[117px] rounded-[10px] border border-[#315bbd] px-5 text-[13px] font-semibold ${isSelected ? 'bg-[#2e56b2] text-white' : 'bg-white text-[#19294c]'}`}>{option}</button>
              })}
            </div>
          </fieldset>

          {profile === 'Bibliotecário' ? <LibrarianFields /> : <StudentProfessorFields profile={profile} />}

          {form.formState.errors.root?.server?.message && <p role="alert" className="text-[13px] text-[#B42331]">{form.formState.errors.root.server.message}</p>}
          <div className="flex flex-col gap-4 pt-[19px] sm:flex-row sm:items-center">
            <p className="flex-1 text-[13px] leading-5 text-[#718096]">O usuário e senha são gerados pelo sistema</p>
            <div className="flex justify-end gap-3 sm:gap-[23px]">
              <button type="button" onClick={() => { form.reset(); form.clearErrors() }} className="h-[51px] min-w-[117px] rounded-[10px] border border-[#315bbd] bg-white px-5 text-[13px] font-semibold text-[#19294c]">Cancelar</button>
              <button type="submit" disabled={form.formState.isSubmitting} className="h-[51px] min-w-[191px] rounded-[10px] bg-[#2e56b2] px-5 text-[13px] font-semibold text-white disabled:opacity-60">{form.formState.isSubmitting ? 'Cadastrando...' : `Cadastrar ${profile.toLocaleLowerCase('pt-BR')}`}</button>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  )
}
