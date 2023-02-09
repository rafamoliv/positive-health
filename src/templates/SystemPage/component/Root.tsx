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
import { forwardRef, useContext } from 'react'
import { Dropdown, Figure } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import { CustomToggleProps, RootProps } from '../types'

import { IconLogoPh } from '@/assets'
import { AppContext } from '@/context/AppContext'
import { privateURL } from '@/routes/urls'

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

export const Root = ({ children, title }: RootProps) => {
  const { t } = useTranslation('systemPagesText')
  const { handleSignOut, user } = useContext(AppContext)
  const { pathname: location } = useLocation()

  const labelStyles = 'fw-semibold'
  const linkStyles = 'd-flex flex-column text-center text-decoration-none p-2'
  const listStyles = 'mb-2'
  const svgStyles = 'fs-4'

  return (
    <div className="d-flex flex-nowrap vh-100 w-100">
      <nav
        className={clsx(
          'd-flex flex-column flex-shrink-0 pt-3 pb-3 bg-dark',
          'position-fixed h-100'
        )}
        style={{ width: '6rem', zIndex: '1' }}
      >
        <Link className={linkStyles} to={privateURL.DASHBOARD}>
          <Figure className="text-center">
            <Figure.Image
              alt="PositiveHealth logo small"
              src={IconLogoPh}
              width={40}
            />
          </Figure>
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
              <span className={labelStyles}>{t('sidebar.dashboard')}</span>
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
              <span className={labelStyles}>{t('sidebar.schedule')}</span>
            </Link>
          </li>
          <li>
            <Link
              className={clsx(linkStyles, {
                'link-success': location === privateURL.APPOINTMENTS
              })}
              to={privateURL.APPOINTMENTS}
            >
              <FontAwesomeIcon className={svgStyles} icon={faListCheck} />
              <span className={labelStyles}>{t('sidebar.appointment')}</span>
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

        <Link className={linkStyles} onClick={() => handleSignOut?.()} to={'#'}>
          <FontAwesomeIcon className={svgStyles} icon={faRightFromBracket} />
        </Link>
      </nav>

      <div className="align-items-center d-flex flex-column w-100 pl-3 pr-3">
        <header
          className={clsx('pl-2 pr-2 bg-dark w-100', 'position-sticky top-0')}
        >
          <div
            className="d-flex align-items-center container justify-content-between m-auto"
            style={{ height: '80px' }}
          >
            <h2 className="text-light">
              {t('navbar.welcome', { value: user?.name })}
            </h2>

            <nav className="d-flex align-items-center gap-4">
              <FontAwesomeIcon
                className={clsx(svgStyles, 'p-2 p-2 text-light')}
                icon={faBell}
              />

              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
                  <Figure className="m-0">
                    <Figure.Image
                      alt="PositiveHealth Logo"
                      className="mb-0"
                      height={48}
                      roundedCircle
                      src={user?.avatar as string}
                      width={48}
                    />
                  </Figure>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href={'#'}>
                    {t('navbar.menu.profile')}
                  </Dropdown.Item>
                  <Dropdown.Item href={'#'}>
                    {t('navbar.menu.settings')}
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href={'#'} onClick={() => handleSignOut?.()}>
                    {t('navbar.menu.logout')}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </nav>
          </div>
        </header>

        <div className="container">
          {title && <h2 className="fs-2, fw-bold pt-3 px-2">{title}</h2>}
          <div className="row">{children}</div>
        </div>
      </div>
    </div>
  )
}
