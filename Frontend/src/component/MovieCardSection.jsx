import React from 'react'
import MovieCard from './MovieCard'

const MovieCardSection = (props) => {
  return (
    <div>
        <div className="card-container mx-[3vw] bg-white h-[35vw]">
            <span className='flex items-center justify-between mt-[4vw] '>
                <p className='text-3xl font-bold'>{props.title}</p>
                <a href="http://localhost:5173/movies" className='underline text-gray-500'>see all</a>
            </span>
            
            <div className='grid grid-cols-4 gap-[3vw]'>
                 <MovieCard imgURL={props.imgTitle}/>
                 <MovieCard imgURL={props.imgTitle}/>
                 <MovieCard imgURL={props.imgTitle}/>
                 <MovieCard imgURL={props.imgTitle}/>
             
            </div>
              
              
           
        </div>
    </div>
  )
}

export default MovieCardSection