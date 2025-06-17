import React from 'react'
import MovieCard from './MovieCard'

const MovieCardSection = () => {
  return (
    <div>
        <div className="card-container mx-[3vw] bg-amber-500 h-[35vw]">
            <span className='flex items-center justify-between mt-6 '>
                <p className='text-3xl font-bold'>Watch latest movie</p>
                <a href="">see all</a>
            </span>
            
            <div>
                 <MovieCard/>
                 <MovieCard/>
             
            </div>
              
              
           
        </div>
    </div>
  )
}

export default MovieCardSection