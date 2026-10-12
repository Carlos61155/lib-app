import type { ReactNode } from 'react'
import {
  useController,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'

type RequiredFieldProps<TFormValues extends FieldValues> = {
  name: FieldPath<TFormValues>
  label: string
  placeholder: string
  type?: string
  autoComplete?: string
  icon: ReactNode
}

export function RequiredField<TFormValues extends FieldValues>({
  name,
  label,
  placeholder,
  type = 'text',
  autoComplete,
  icon,
}: RequiredFieldProps<TFormValues>) {
  const { control } = useFormContext<TFormValues>()
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      validate: (value) =>
        String(value ?? '').trim().length > 0 ||
        `O campo ${label.toLocaleLowerCase('pt-BR')} é obrigatório`,
    },
  })
  const errorId = `${field.name}-error`

  return (
    <Field className="gap-1.5">
      <FieldLabel htmlFor={field.name} className="pl-4 text-[14px] font-semibold text-[#273653]">
        {label}
      </FieldLabel>
      <div className="relative">
        <Input
          {...field}
          id={field.name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={fieldState.invalid}
          aria-describedby={fieldState.error ? errorId : undefined}
          className={`h-11 rounded-[8px] bg-white px-4 pr-11 text-[14px] font-medium placeholder:text-[#6e7a91] focus-visible:ring-2 ${
            fieldState.invalid
              ? 'border-[#B42331] focus-visible:border-[#B42331] focus-visible:ring-[#B42331]/20'
              : 'border-[#414141] focus-visible:border-[#2e56b2] focus-visible:ring-[#2e56b2]/20'
          }`}
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#65748b]">
          {icon}
        </span>
      </div>
      {fieldState.error && (
        <p id={errorId} role="alert" className="pl-4 text-[12px] leading-4 text-[#B42331]">
          {fieldState.error.message}
        </p>
      )}
    </Field>
  )
}
