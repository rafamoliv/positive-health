import { Nav, Navbar, Offcanvas, Figure } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { NavbarCanvasProps } from '../types'

import { IconLogoPositiveHealth } from '@/assets'
import { privateURL } from '@/routes/urls'

const NavbarCanvas = ({ children, expand }: NavbarCanvasProps) => {
  document.querySelector('.btn-close')?.classList.toggle('btn-close-white')

  return (
    <Navbar.Offcanvas
      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
      className={'navbar-dark bg-dark'}
      id={`offcanvasNavbar-expand-${expand}`}
      placement="end"
    >
      <Offcanvas.Header className="navbar__toggle" closeButton>
        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
          <Link
            className={
              'd-flex flex-column text-center text-decoration-none p-2'
            }
            to={privateURL.DASHBOARD}
          >
            <Figure className="text-center mb-0">
              <Figure.Image
                alt="PositiveHealth logo small"
                src={IconLogoPositiveHealth}
                width={128}
              />
            </Figure>
          </Link>
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Nav className="justify-content-start gap-2 flex-grow-1 pe-3">
          {children}
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  )
}

export default NavbarCanvas
