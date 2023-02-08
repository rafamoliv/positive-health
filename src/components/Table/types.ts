import { Key, ReactNode } from 'react'

interface ChildrenProps {
  children: ReactNode
}

export interface TableRootProps extends ChildrenProps {
  title: string
}

export interface TableHeaderProps {
  data: { text: string }[]
}

export type TableBodyProps = ChildrenProps

export type TableRowProps = ChildrenProps

export interface TableCellProps extends ChildrenProps {
  key?: Key
}
