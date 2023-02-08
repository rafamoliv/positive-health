import { ReactNode, FC, ButtonHTMLAttributes } from 'react'
import { Button } from 'react-bootstrap'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  variant?: string
}

export const ButtonPersonalized: FC<ButtonProps> = (
  { children, onClick, type, variant = 'outline-secondary' },
  rest
) => {
  return (
    <Button onClick={onClick} type={type} variant={variant} {...rest}>
      {children}
    </Button>
  )
}
