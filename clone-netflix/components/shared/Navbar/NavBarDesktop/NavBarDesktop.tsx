import { cn } from "@/lib/utils";
import { BellRing, Search } from "lucide-react";
import { Logo } from "../../Logo";
import { itemsNavbar } from "@/data/items-navbar";
import Link from "next/link";
interface NavbarItem {
  name: string;
  link: string;
}

export function NavBarDesktop() {
  return (
    <div
      className={cn(
        "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300"
      )}
    >
      <div className="px-[4%] mx-auto h-full">
        <div className="flex gap-4 justify-between h-full items-center">
          <div className="flex gap-2 items-center">
            <Logo />
            <div className="ml-10 flex gap-4 ">
              {itemsNavbar.map((item: NavbarItem) => (
                <Link key={item.name} href={item.link} className="hover:text-gray-300 transition-all duration-300">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Search className="cursor-pointer" />
            <BellRing className="cursor-pointer" />
            <div className="flex gap-2 items-center">
              <p>Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
