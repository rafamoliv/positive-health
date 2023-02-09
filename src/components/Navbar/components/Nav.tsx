import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

import { NavbarNavProps } from '../types'

const NavbarNav = ({ children, to }: NavbarNavProps) => {
  const { pathname: location } = useLocation()

  return (
    <Link
      className={clsx('nav-link p-2 fw-bold', 'navbar__link', {
        'link-success': location === to
      })}
      to={to}
    >
      {children}
    </Link>
  )
}

export default NavbarNav
