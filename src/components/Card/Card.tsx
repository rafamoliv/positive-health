import clsx from 'clsx'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

interface RootProps extends CardProps {
  title: string
}

export const Root = ({ children, className, title }: RootProps) => {
  return (
    <div>
      <h4>{title}</h4>
      <div className={clsx('d-flex flex-column gap-2', className)}>
        {children}
      </div>
    </div>
  )
}

export const Item = ({ children, className }: CardProps) => {
  return (
    <div className={clsx('bg-white rounded-5 p-4', className)}>{children}</div>
  )
}

export const Card = {
  Root,
  Item
}
