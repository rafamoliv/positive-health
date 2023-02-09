import { Container, Navbar } from 'react-bootstrap'

import { NavbarProps } from '../types'

const NavbarRoot = ({ children, expand }: NavbarProps) => {
  return (
    <Navbar bg="dark" className="p-3 navbar" expand={expand} sticky={'top'}>
      <Container className={'container'} fluid>
        {children}
      </Container>
    </Navbar>
  )
}

export default NavbarRoot
