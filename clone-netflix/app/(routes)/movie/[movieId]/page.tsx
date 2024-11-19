import { db } from '@/lib/db'
import React from 'react'
import { redirect } from 'next/navigation'

export default async function MovieIdPage({params,}: {
  params: {movieId: string}
}) {
  const movieFilm = await db.movie.findUnique({
    where:{
      id: params.movieId
    }
  })
  const popularMovie = await db.popularMovie.findUnique({
    where:{
      id: params.movieId
    }
  })

  if(!movieFilm || !popularMovie) {
    redirect("/")
  }

  const currentMovie = movieFilm 
  ? movieFilm.movieVideo 
  : popularMovie 
  ? popularMovie.movieVideo 
  : "";

  const titleMovie = movieFilm ? movieFilm.title : popularMovie ? popularMovie.title : "";

  return (
    <div>MovieIdPage</div>
  )
}
