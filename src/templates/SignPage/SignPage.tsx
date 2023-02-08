import { ReactNode } from 'react'

interface SignPageProps {
  children: ReactNode
}

export const SignPage = ({ children }: SignPageProps) => {
  return (
    <div className="d-flex align-items-center vh-100 justify-content-center">
      <div className="d-flex flex-column border border-1 p-5 rounded-4 bg-white">
        {children}
      </div>
    </div>
  )
}
