/* eslint-disable @typescript-eslint/no-explicit-any */
import type { InputHTMLAttributes } from 'react'

interface FormRootProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  id: string
  register: any
  type: string
}

export function FormInput({ placeholder, id, register, type }: FormRootProps) {
  return (
    <input
      className="border border-1 rounded-2 p-3 shadow-none"
      placeholder={placeholder}
      type={type}
      {...register(id)}
    />
  )
}
