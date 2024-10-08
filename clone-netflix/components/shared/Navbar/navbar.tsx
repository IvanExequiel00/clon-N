import { NavBarDesktop } from "./NavBarDesktop"
import { NavBarMovile } from "./NavBarMovile"


const NavBar = () => {
  return (
    <nav>
        <div className="hidden mx-auto md:block">
            <NavBarDesktop />
        </div>
        <div className="md:hidden ">
            <NavBarMovile />
        </div>
    </nav>
  )
}

export default NavBar
