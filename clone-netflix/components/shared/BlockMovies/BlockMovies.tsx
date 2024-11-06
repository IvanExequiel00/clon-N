import React from 'react'
import { BlockMoviesProps } from './BlockMovies.types'

export  function BlockMovies(props:BlockMoviesProps) {
    const {title, movies, isMyList} = props;
  return (
    <div className='-top-16 relative px-[4%] md:pt-20 md:pb-20 overflow-auto bg-[#171717]'>
        <h3 className='text-2xl font-semibold mb-3 '>{title}</h3>
    </div>
  )
}
