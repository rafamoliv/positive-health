import { ChildrenProps } from '../types'

export const Aside = ({ children }: ChildrenProps) => {
  return <aside className="col-5 d-flex flex-column gap-4">{children}</aside>
}
