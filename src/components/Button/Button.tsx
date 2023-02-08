import { ReactNode, FC, ButtonHTMLAttributes } from 'react'
import { Button } from 'react-bootstrap'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: string
}

export const ButtonPersonalized: FC<ButtonProps> = (
  { children, disabled, onClick, type, variant = 'outline-secondary' },
  rest
) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
      {...rest}
    >
      {children}
    </Button>
  )
}
