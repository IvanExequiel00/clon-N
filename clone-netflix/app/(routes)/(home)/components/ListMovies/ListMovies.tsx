import { BlockMovies } from "@/components/shared/BlockMovies/BlockMovies";
import { ListMoviesProps } from "./ListMovies.types";


export  function ListMovies(props: ListMoviesProps) {
    const { movies } = props;
  return (
    <div>
        <BlockMovies title="Peliculas mas recientes" movies={movies} isMyList={false}/>
    </div>
  )
}
