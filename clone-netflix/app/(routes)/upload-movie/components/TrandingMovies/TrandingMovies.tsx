"use client"

import { Button } from "@/components/ui/button"
import { trendingMovies } from "./TrandingMovies.data"
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export  function TrandingMovies() {
    const [IsLoading, setIsLoading] = useState(false);
    const {toast} = useToast();
    const upLoadTrendingMovies = async () =>{
        setIsLoading(true)
        try {
            await axios.post("/api/create-popular-movies", {
                movies: trendingMovies
            })
            toast({title: "Peliculas subidas con exito"})
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }
  return (
    <div className="border rounded-lg border-white-400 p-6 hover:bg-slate-500 transition-all
    duration-300"
    >
    <h1 className="text-xl font-bold mb-4 ">Subir peliculas trend</h1>
    <Button className="w-full " onClick={upLoadTrendingMovies} variant="secondary" disabled={IsLoading}>
        Subir peliculas
        <Upload className="w-4 h-4 ml-2"/>
    </Button>
     </div>
  )
}
