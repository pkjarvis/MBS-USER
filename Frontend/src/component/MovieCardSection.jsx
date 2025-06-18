import React from 'react'
import MovieCard from './MovieCard'

const MovieCardSection = () => {
  return (
    <div>
        <div className="card-container mx-[3vw] bg-white h-[35vw]">
            <span className='flex items-center justify-between mt-[4vw] '>
                <p className='text-3xl font-bold'>Watch latest movie</p>
                <a href="http://localhost:5173/movies" className='underline text-gray-500'>see all</a>
            </span>
            
            <div className='grid grid-cols-4 gap-[3vw]'>
                 <MovieCard/>
                 <MovieCard/>
                 <MovieCard/>
                 <MovieCard/>
             
            </div>
              
              
           
        </div>
    </div>
  )
}

export default MovieCardSection