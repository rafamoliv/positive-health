import type { ReactNode } from 'react'

import { Button } from '@/components/Button'

interface FormButtonProps {
  children: ReactNode
}

export function FormButton({ children, ...rest }: FormButtonProps) {
  return (
    <Button type="submit" {...rest}>
      {children}
    </Button>
  )
}
