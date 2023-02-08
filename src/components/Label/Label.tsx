import { FC, HTMLAttributes } from 'react'

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  children: string
  title: string
}

export const Label: FC<LabelProps> = ({ children, title }, rest) => {
  return (
    <div {...rest}>
      <label className="fs-6">{title}</label>
      <p className="fs-4 fw-semibold">{children}</p>
    </div>
  )
}
