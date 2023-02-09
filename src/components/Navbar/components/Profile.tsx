import { NavbarProfileProps } from '../types'

const NavbarProfile = ({ children, name }: NavbarProfileProps) => {
  return (
    <div className="navbar__profile">
      <h3 className="text-light">{name}</h3>
      {children}
    </div>
  )
}

export default NavbarProfile
