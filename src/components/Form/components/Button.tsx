import type { ReactNode } from 'react'

import { Button } from '@/components/Button'

interface FormButtonProps {
  children: ReactNode
  disabled: boolean
}

export function FormButton({ children, ...rest }: FormButtonProps) {
  return (
    <Button type="submit" variant="secondary" {...rest}>
      {children}
    </Button>
  )
}
