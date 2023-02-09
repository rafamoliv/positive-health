import { NavbarBrandProps } from '../types'

const NavbarBrand = ({ children }: NavbarBrandProps) => {
  return (
    <div className="navbar-brand d-flex align-items-center gap-2">
      {children}
    </div>
  )
}

export default NavbarBrand
