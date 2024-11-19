import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMovile } from "./NavBarMovile";

import { NavbarProps } from "./NavBar.types";

export function NavBar(props: NavbarProps) {
  const { users } = props;

  return (
    <nav>
      <div className="hidden mx-auto md:block">
        <NavBarDesktop users={users} />
      </div>
      <div className="md:hidden">
        <NavBarMovile users={users} />
      </div>
    </nav>
  );
}