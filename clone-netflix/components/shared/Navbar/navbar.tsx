import { NavBarDesktop } from "./NavBarDesktop"


const NavBar = () => {
  return (
    <nav>
        <div className="hidden mx-auto md:block">
            <NavBarDesktop />
        </div>
        <div className="md:hidden ">
            <p>Navbar Movile</p>
        </div>
    </nav>
  )
}

export default NavBar
