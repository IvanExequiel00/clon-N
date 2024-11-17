import { db } from '@/lib/db'
import React from 'react'

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

  if(!movieFilm || !popularMovie) return null;
  return (
    <div>MovieIdPage</div>
  )
}
