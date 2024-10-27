import { NavbarProps } from "./NavBar.type"
import { NavBarDesktop } from "./NavBarDesktop"
import { NavBarMovile } from "./NavBarMovile"


const NavBar = (props: NavbarProps) => {
  const {users} = props
  return (
    <nav>
        <div className="hidden mx-auto md:block">
            <NavBarDesktop users={users}/>
        </div>
        <div className="md:hidden ">
            <NavBarMovile />
        </div>
    </nav>
  )
}

export default NavBar
