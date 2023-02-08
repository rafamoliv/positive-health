/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  faRightFromBracket,
  faCircleInfo,
  faGrip,
  faCalendarDays,
  faListCheck,
  faGear,
  faBell
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { forwardRef } from 'react'
import { Dropdown, Image, Figure } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import { ChildrenProps, CustomToggleProps } from '../types'

import { IconLogoPh } from '@/assets'
import { privateURL, publicURL } from '@/routes/urls'

/**
 *
 */

/**
 * Custom dropdown toggle
 */

const CustomToggle = forwardRef<HTMLButtonElement, CustomToggleProps>(
  ({ children, onClick }, ref) => (
    <button
      className="bg-light border-0 rounded-circle p-0"
      onClick={(e: any) => {
        e.preventDefault()
        onClick(e)
      }}
      ref={ref}
    >
      {children}
    </button>
  )
)
CustomToggle.displayName = 'CustomToggle'

/**
 * Internal pages template
 * @param {ReactNode} children
 */

export const Root = ({ children }: ChildrenProps) => {
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

      <div className="align-items-center d-flex flex-column w-100 pl-3 pr-3">
        <header className="pl-2 pr-2 bg-dark w-100">
          <div
            className="d-flex align-items-center container justify-content-between m-auto"
            style={{ height: '80px' }}
          >
            <h2 className="text-light">Olá, Rafael Oliveira</h2>

            <nav className="d-flex align-items-center gap-4">
              <FontAwesomeIcon
                className={clsx(svgStyles, 'p-2 p-2 text-light')}
                icon={faBell}
              />

              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
                  <Figure className="m-0">
                    <Image
                      alt="PositiveHealth Logo"
                      roundedCircle
                      src={'https://picsum.photos/48'}
                    />
                  </Figure>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href={'#'}>Perfil</Dropdown.Item>
                  <Dropdown.Item href={'#'}>Configurações</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href={publicURL.SIGNIN}>Sair</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </nav>
          </div>
        </header>

        <div className="container">
          <div className="row">{children}</div>
        </div>
      </div>
    </div>
  )
}
