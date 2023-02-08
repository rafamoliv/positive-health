/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'

interface FormRootProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error: string | undefined
  placeholder: string
  id: string
  register: any
  type: string
}

export function FormInput({
  className,
  placeholder,
  id,
  register,
  type,
  error
}: FormRootProps) {
  return (
    <div
      className={clsx('d-flex flex-column', className)}
      style={{ height: '72px' }}
    >
      <input
        className="border border-1 rounded-2 p-3 shadow-none"
        placeholder={placeholder}
        type={type}
        {...register(id)}
      />
      {error && <span className="text-danger ms-3">{error}</span>}
    </div>
  )
}
