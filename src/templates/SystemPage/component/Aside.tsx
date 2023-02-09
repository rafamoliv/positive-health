import { ChildrenProps } from '../types'

export const Aside = ({ children }: ChildrenProps) => {
  return <aside className="p-4 w-100">{children}</aside>
}
