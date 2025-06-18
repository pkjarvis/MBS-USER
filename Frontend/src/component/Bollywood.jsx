import React from 'react'
import MovieCard from './MovieCard'


const Bollywood = () => {
  return (
    <div className='mx-[3vw] mt-[3.6vw] bg-white'>
        <div className="bollywood-container">
            <span className='flex items-center justify-between'>
                <h1 className='font-bold text-3xl'>Bollywood Trending</h1>
                <a href="" className='underline text-zinc-400'>see all</a>
            </span>
            <div className='grid grid-cols-4 gap-[3vw] mt-2'>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    </div>
  )
}

export default Bollywood