import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  title: string
}

export const Card = ({ children, title }: CardProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className="bg-white rounded-5 p-4">{children}</div>
    </div>
  )
}
