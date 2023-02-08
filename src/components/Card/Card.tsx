import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
}

interface RootProps extends CardProps {
  title: string
}

export const Root = ({ children, title }: RootProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className="d-flex flex-column gap-2">{children}</div>
    </div>
  )
}

export const Item = ({ children }: CardProps) => {
  return <div className="bg-white rounded-5 p-4">{children}</div>
}

export const Card = {
  Root,
  Item
}
