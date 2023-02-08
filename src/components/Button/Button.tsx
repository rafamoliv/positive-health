import { ReactNode, FC, ButtonHTMLAttributes } from 'react'
import { Button } from 'react-bootstrap'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: string
}

export const ButtonPersonalized: FC<ButtonProps> = (
  { children, onClick, variant = 'outline-secondary' },
  rest
) => {
  return (
    <Button onClick={onClick} variant={variant} {...rest}>
      {children}
    </Button>
  )
}
