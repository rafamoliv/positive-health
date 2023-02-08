import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title: string
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div style={{ width: '160px' }}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  )
}
