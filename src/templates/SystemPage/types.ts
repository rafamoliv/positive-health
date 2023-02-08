/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'

export interface ChildrenProps {
  children: ReactNode
}

export interface RootProps extends ChildrenProps {
  title?: string
}

export interface CustomToggleProps extends ChildrenProps {
  onClick: (e: any) => void
}
