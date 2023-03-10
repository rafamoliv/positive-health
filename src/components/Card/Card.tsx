import clsx from 'clsx'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

interface RootProps extends CardProps {
  title: string
}

/**
 * CardRoot to control card component
 */

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

/**
 * CardItem to render each card item
 */

export const Item = ({ children, className }: CardProps) => {
  return (
    <div className={clsx('bg-white rounded-5 p-4', className)}>{children}</div>
  )
}

/**
 * Card component
 *
 * Usage example:
 * <Card.Root>
 *  <Card.Item>example</Card.Item>
 * <Card.Root/>
 */

export const Card = {
  Root,
  Item
}
