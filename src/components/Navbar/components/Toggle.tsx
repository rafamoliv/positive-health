import { Navbar } from 'react-bootstrap'

import { NavbarToggleProps } from '../types'

const NavbarToggle = ({ expand }: NavbarToggleProps) => {
  return (
    <Navbar.Toggle
      aria-controls={`offcanvasNavbar-expand-${expand}`}
      className={'navbar-dark'}
    />
  )
}

export default NavbarToggle
