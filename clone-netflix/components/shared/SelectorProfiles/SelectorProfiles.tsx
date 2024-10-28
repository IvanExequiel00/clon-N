"use client";
import { useRouter } from "next/navigation";
import { SelectorProfileProps } from "./SelectorProfiles.types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";
import { UserNetflix } from "@prisma/client";
import Image from "next/image";
import { ChevronDown, Pencil } from "lucide-react";

export function SelectorProfiles(props: SelectorProfileProps) {
  const { users } = props;
  const router = useRouter();
  const { changeCurrentUser, currentUser } = useCurrentNetflixUser();
  const onChange = (userNetflix: UserNetflix) => {
    console.log("change users");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 items-center">
          <Image
            src={
              currentUser ? currentUser.avatarUrl : "/profiles/profile-1.png"
            }
            alt="user Image"
            width={35}
            height={35}
          />
          <ChevronDown className=""/>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2 bg-black/80 border-transparent">
     {users.map((user) =>{
      <DropdownMenuItem key={user.id} onclick={() => onChangeUser(user)}
      className="flex gap-2 mb-3 group"
      >
<Image src={user.avatarUrl} alt="Profile Image" width={30} height={30}/>
<p className="text-white group-hover:text-black">{user.profileName}</p>
      </DropdownMenuItem>
     })}
     <DropdownMenuItem>
      <Pencil className="w-4 h-4"/>
      Administrar Perfil
     </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
