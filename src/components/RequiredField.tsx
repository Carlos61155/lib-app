import type { ReactNode } from 'react'
import {
  useController,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'
import { Field, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { pageFieldClass, pageLabelClass } from '@/lib/pageStyles'

type RequiredFieldProps<TFormValues extends FieldValues> = {
  name: FieldPath<TFormValues>
  label: string
  placeholder: string
  type?: string
  autoComplete?: string
  icon: ReactNode
  helperText?: string
  validate?: (value: string) => true | string
  forceInvalid?: boolean
  disabled?: boolean
}

export function RequiredField<TFormValues extends FieldValues>({
  name,
  label,
  placeholder,
  type = 'text',
  autoComplete,
  icon,
  helperText,
  validate,
  forceInvalid = false,
  disabled = false,
}: RequiredFieldProps<TFormValues>) {
  const { control } = useFormContext<TFormValues>()
  const { field, fieldState } = useController({
    name,
    control,
    rules: {
      validate: (value) => {
        const stringValue = String(value ?? '')
        if (!stringValue.trim()) return `O campo ${label.toLocaleLowerCase('pt-BR')} é obrigatório`
        return validate?.(stringValue) ?? true
      },
    },
  })
  const errorId = `${field.name}-error`
  const isInvalid = fieldState.invalid || forceInvalid

  return (
    <Field className="gap-[7px]">
      <FieldLabel htmlFor={field.name} className={`${pageLabelClass} self-start items-start pl-0 text-left`}>
        {label}
      </FieldLabel>
      <div className="relative">
        <Input
          {...field}
          id={field.name}
          type={type}
          disabled={disabled}
          autoComplete={autoComplete}
          placeholder={placeholder}
          aria-invalid={isInvalid}
          aria-describedby={fieldState.error ? errorId : undefined}
          className={`${pageFieldClass} h-[42px] rounded-[8px] px-4 pr-11 ${
            isInvalid
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
      {helperText && !fieldState.error && (
        <p className="pl-4 text-[12px] leading-4 text-[#718096]">{helperText}</p>
      )}
    </Field>
  )
}
