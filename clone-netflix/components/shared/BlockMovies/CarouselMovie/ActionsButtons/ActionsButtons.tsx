"use client"
import { Button } from "@/components/ui/button";
import { ActionsButtonsProps } from "./ActionsButtons.types";
import { Play, X } from "lucide-react";

export  function ActionsButtons(props: ActionsButtonsProps) {
    const {movieId, movie, isMyList} = props
  return (
    <div className="flex justify-between mb-5 ">
        <div className="flex gap-2 ">
        <Button size="icon" variant="ghost" className="bg-slate-50 rounded-full 
        flex items-center justify-center h-7 w-7 " 
        onClick={() => console.log("Click")}>
<Play className="text-zinc-900 fill-zinc-900 h-3 w-3"/>
        </Button>
        {isMyList ? (
            <Button size="icon" variant="ghost" 
            className="bg-zinc-900 border-gray-400 
            border-2 rounded-full flex items-center justify-center 
            h-7 w-7">
                <X  width={10} height={10} 
                className="text-slate-50 fill-zinc-900 
                h-3 w-3 hover:text-zinc-900"/>
            </Button>
        ):(
            <Button>No esta en mi lista</Button>
        )}
        </div>
    </div>
  )
}
