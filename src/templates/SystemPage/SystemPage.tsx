import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { IconLogoPh, IconLogoPositiveHealth } from '@/assets'
import { privateURL } from '@/routes/urls'

/**
 * Internal pages template
 * @param {ReactNode} children
 */

interface SystemPageProps {
  children: ReactNode
}

export const SystemPage = ({ children }: SystemPageProps) => {
  return (
    <div className="d-flex flex-nowrap vh-100">
      <div
        className="d-flex flex-column flex-shrink-0 bg-dark"
        style={{ width: '4.5rem' }}
      >
        <Link to={privateURL.DASHBOARD}>
          <figure className="text-center">
            <img
              alt="PositiveHealth logo small"
              className="w-50"
              src={IconLogoPh}
            />
          </figure>
        </Link>
        teste
      </div>
      <div>
        <nav>
          <figure>
            <img alt="PositiveHealth Logo" src={IconLogoPositiveHealth} />
          </figure>
        </nav>
        <p>sidebar</p>
        {children}
      </div>
    </div>
  )
}
