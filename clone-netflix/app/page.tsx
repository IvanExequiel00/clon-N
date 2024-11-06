import { redirect } from "next/navigation";

import { db } from "@/lib/db";

import { auth } from "@/auth";

import { TrendingMovies } from "./(routes)/(home)/components/TrendingMovies";
 import { ListMovies } from "./(routes)/(home)/components/ListMovies";
import { SliderVideo } from "./(routes)/(home)/components/sliderVideo";
import NavBar from "@/components/shared/Navbar/NavBar";

export default async function Home() {
  const session = await auth();

  if (!session || !session.user || !session.user.id) {
    return redirect("/login");
  }

  const usersNetflix = await db.userNetflix.findMany({
    where: {
      userId: session.user.id,
    },
  });

  const movies = await db.movie.findMany();
  const trendingMovies = await db.popularMovie.findMany({
    orderBy: { ranking: "asc" },
  });

  return (
    <div className="relative bg-zinc-900">
      <NavBar users={usersNetflix} />
      <SliderVideo />
      <TrendingMovies movies={trendingMovies} />
       {/* <ListMovies movies={movies} /> */}
    </div>
  );
}