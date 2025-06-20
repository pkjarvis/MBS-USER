import React from 'react'

import NavBar from './NavBar'

const MainHeader = (props) => {
  return (
    
     <div className="theatre-container font-[Inter]">
            <NavBar />
            <span className="flex items-center justify-start mx-[3vw] gap-1 mt-2">
                <a href="http://localhost:5173/dashboard" className='cursor-pointer font-light text-zinc-500 '>Home / </a>
                <a href="http://localhost:5173/movie" className='cursor-pointer font-light text-zinc-500'>{props.headerlink} </a>
                <a href="http://localhost:5173/showtime" className='cursor-pointer'> {props.nextlink}</a>
            </span> 

        </div>
    
  )
}

export default MainHeader