import {
  faRightFromBracket,
  faCircleInfo,
  faGrip,
  faCalendarDays,
  faListCheck,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { IconLogoPh } from '@/assets'
import { privateURL, publicURL } from '@/routes/urls'

/**
 * Internal pages template
 * @param {ReactNode} children
 */

interface SystemPageProps {
  children: ReactNode
}

export const SystemPage = ({ children }: SystemPageProps) => {
  const { pathname: location } = useLocation()

  const labelStyles = 'fw-semibold'
  const linkStyles = 'd-flex flex-column text-center text-decoration-none p-2'
  const listStyles = 'mb-2'
  const svgStyles = 'fs-4'

  return (
    <div className="bg-light d-flex flex-nowrap vh-100 w-100">
      <nav
        className="d-flex flex-column flex-shrink-0 pt-3 pb-3 bg-dark"
        style={{ width: '5rem' }}
      >
        <Link className={linkStyles} to={privateURL.DASHBOARD}>
          <figure className="text-center">
            <img
              alt="PositiveHealth logo small"
              className="w-50"
              src={IconLogoPh}
            />
          </figure>
        </Link>

        <ul className="mb-auto p-0">
          <li className={listStyles}>
            <Link
              className={clsx(linkStyles, {
                'link-success': location === privateURL.DASHBOARD
              })}
              to={privateURL.DASHBOARD}
            >
              <FontAwesomeIcon className={svgStyles} icon={faGrip} />
              <span className={labelStyles}>Painel</span>
            </Link>
          </li>
          <li className={listStyles}>
            <Link
              className={clsx(linkStyles, {
                'link-success': location === privateURL.SCHEDULING
              })}
              to={privateURL.SCHEDULING}
            >
              <FontAwesomeIcon className={svgStyles} icon={faCalendarDays} />
              <span className={labelStyles}>Agenda</span>
            </Link>
          </li>
          <li>
            <Link
              className={clsx(linkStyles, {
                'link-success': location === privateURL.CONSULTATION
              })}
              to={privateURL.CONSULTATION}
            >
              <FontAwesomeIcon className={svgStyles} icon={faListCheck} />
              <span className={labelStyles}>Consulta</span>
            </Link>
          </li>
        </ul>

        <Link className={linkStyles} to={privateURL.DASHBOARD}>
          <FontAwesomeIcon className={svgStyles} icon={faGear} />
        </Link>

        <Link
          className={linkStyles}
          target={'_blank'}
          to={'https://www.linkedin.com/in/rafamoliv/'}
        >
          <FontAwesomeIcon className={svgStyles} icon={faCircleInfo} />
        </Link>

        <Link className={linkStyles} to={publicURL.SIGNIN}>
          <FontAwesomeIcon className={svgStyles} icon={faRightFromBracket} />
        </Link>
      </nav>

      <div className="align-items-center d-flex flex-column w-100 p-3">
        <header className="pl-2 pr-2">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: '1400px' }}
          >
            <h2>Olá, Rafael Oliveira</h2>

            <figure>
              <img alt="PositiveHealth Logo" src={'https://picsum.photos/80'} />
            </figure>
          </div>
        </header>

        <section style={{ width: '1400px' }}>{children}</section>
      </div>
    </div>
  )
}
