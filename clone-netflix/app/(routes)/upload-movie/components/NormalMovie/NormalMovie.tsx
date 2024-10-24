"use client"
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState } from "react";


export  function NormalMovie() {
     const [IsLoading, setIsLoading] = useState(false)
    const uploadMovie = async () =>{
        setIsLoading(true)
        try {

            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

  return (
    <div className="border rounded-lg border-white-400 p-6 hover:[#E50914] transition-all duration-300">
        <h1 className="text-xl font-bold mb-3">Subir peliculas normales</h1>
        <Button className="w-full" 
        variant={"outline"} 
        onClick={uploadMovie}
        disabled={IsLoading}
        >
            Subir Peliculas
            <Upload  className="w-4 h-4 ml-2"/>
        </Button>
        </div>
  )
}
