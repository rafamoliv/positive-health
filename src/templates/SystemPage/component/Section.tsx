import { ChildrenProps } from '../types'

export const Section = ({ children }: ChildrenProps) => {
  return <section className="p-4 w-100">{children}</section>
}
