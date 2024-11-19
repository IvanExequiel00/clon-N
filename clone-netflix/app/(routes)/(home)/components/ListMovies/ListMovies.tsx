"use client"
import { BlockMovies } from "@/components/shared/BlockMovies/BlockMovies";
import { ListMoviesProps } from "./ListMovies.types";
import { useLovedFilms } from "@/hooks/use-loved-films";
import { useCurrentNetflixUser } from "@/hooks/use-current-user";



export  function ListMovies(props: ListMoviesProps) {
    const { movies } = props;
    const {lovedFilmsByUser} = useLovedFilms()
    const {currentUser} = useCurrentNetflixUser();
    const userNetflix = currentUser?.id;

    const lovedFilm = userNetflix ? lovedFilmsByUser[userNetflix]: [];
  return (
    <div>
        <BlockMovies  title="Peliculas Fav" movies={lovedFilm} isMyList={true}/>
        <BlockMovies title="Peliculas mas recientes" movies={movies} isMyList={false}/>
        
    </div>
  )
}
