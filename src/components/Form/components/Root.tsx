import type { FormEventHandler, FormHTMLAttributes, ReactNode } from 'react'

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
}

export function FormRoot({ children, onSubmit, ...rest }: FormRootProps) {
  return (
    <form className="d-flex flex-column gap-3" onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  )
}
