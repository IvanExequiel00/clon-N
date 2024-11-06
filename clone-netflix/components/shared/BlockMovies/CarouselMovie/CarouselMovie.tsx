
import { Card, CardContent } from '@/components/ui/card'
import { CarouselMovieProps } from './CarouselMovie.types'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'

export  function CarouselMovie(props: CarouselMovieProps) {
    const {movies, isMyList} = props
  return (
    <Carousel className='w-full '>
  <CarouselContent className='-ml-1 gap-2 overflow-inherit'>
    {movies.map((movie) =>(
        <CarouselItem key={movie.id} 
        className='pl-1 md:basis-1/2 lg:basis-1/5 transition delay-300 group relative hover:bg-transparent'>
<Card className='cursor-pointer transition delay-300 group relative'>
    <CardContent className='flex aspect-video items-center justify-center p-6 relative border-none rounded-md bg-zinc-900'>
<Image 
fill
sizes='(max-width: 768px) 100vw, 50vw'
src={movie.thumbnailUrl}
alt='Image'
/>
    </CardContent>
</Card>
        </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
  )
}
