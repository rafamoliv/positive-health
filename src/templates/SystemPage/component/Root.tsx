/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useContext } from 'react'
import { Dropdown, Figure } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { Button } from '@/components'
import { Navbar } from '@/components/Navbar/Navbar'

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
 * @param {string} title
 */

export const Root = ({ children, title }: RootProps) => {
  const { t, i18n } = useTranslation('systemPagesText')
  const { handleSignOut, user } = useContext(AppContext)

  const linkStyles = 'd-flex flex-column text-center text-decoration-none p-2'

  const expand = 'xl'

  return (
    <main className="w-100 systemPages">
      <Navbar.Root expand={expand}>
        <Navbar.Brand>
          <Link className={linkStyles} to={privateURL.DASHBOARD}>
            <Figure className="text-center mb-0">
              <Figure.Image
                alt="PositiveHealth logo small"
                src={IconLogoPh}
                width={36}
              />
            </Figure>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle expand={expand} />
        <Navbar.Canvas expand={expand}>
          <Navbar.Profile name={t('navbar.welcome', { value: user?.name })}>
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
          </Navbar.Profile>

          <Navbar.Nav to={privateURL.DASHBOARD}>
            {t('sidebar.dashboard')}
          </Navbar.Nav>
          <Navbar.Nav to={privateURL.SCHEDULING}>
            {t('sidebar.schedule')}
          </Navbar.Nav>
          <Navbar.Nav to={privateURL.APPOINTMENTS}>
            {t('sidebar.appointment')}
          </Navbar.Nav>
          <div className="d-flex">
            <Button onClick={() => i18n.changeLanguage('ptbr')} variant="dark">
              PT
            </Button>
            <Button onClick={() => i18n.changeLanguage('en')} variant="dark">
              EN
            </Button>
          </div>
        </Navbar.Canvas>
      </Navbar.Root>

      <div className="align-items-center d-flex flex-column w-100 pl-3 pr-3">
        {/** Page content */}
        <div className="container">
          {title && <h2 className="fs-2, fw-bold pt-3 px-2">{title}</h2>}
          <div className="row">{children}</div>
        </div>
      </div>
    </main>
  )
}
