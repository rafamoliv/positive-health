import { ChildrenProps } from '../types'

export const Section = ({ children }: ChildrenProps) => {
  return <section className="col-7 p-4">{children}</section>
}
