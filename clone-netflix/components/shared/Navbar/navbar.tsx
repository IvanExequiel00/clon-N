import { NavbarProps } from "./NavBar.types";
import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMovile } from "./NavBarMovile";


export  function NavBar(props: NavbarProps) {
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
  )
}



// import { NavBarDesktop } from "./NavBarDesktop";
// import { NavBarMovile } from "./NavBarMovile";

// import { NavbarProps } from "./NavBar.type";

// export function NavBar(props: NavbarProps) {
//   const { users } = props;

//   return (
//     <nav>
//       <div className="hidden mx-auto md:block">
//         <NavBarDesktop users={users} />
//       </div>
//       <div className="md:hidden">
//         <NavBarMovile users={users} />
//       </div>
//     </nav>
//   );
// }