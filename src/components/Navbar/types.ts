import { ReactNode } from 'react'

interface ChildrenProps {
  children: ReactNode
}

export interface NavbarProps extends ChildrenProps {
  expand: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export type NavbarBrandProps = ChildrenProps

export interface NavbarToggleProps {
  expand: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

export type NavbarCanvasProps = NavbarProps

export interface NavbarNavProps extends ChildrenProps {
  to: string
}

export interface NavbarProfileProps extends ChildrenProps {
  name: string
}
