import { ChildrenProps } from '../types'

export const Aside = ({ children }: ChildrenProps) => {
  return <aside className="col-5">{children}</aside>
}
