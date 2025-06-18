import React from 'react'

import NavBar from './NavBar'

const MainHeader = (props) => {
  return (
    
     <div className="theatre-container font-[Inter]">
            <NavBar />
            <span className="flex items-center justify-start mx-[3vw] gap-1 mt-2">
                <a href="http://localhost:5173/dashboard" className='cursor-pointer font-light text-zinc-500 '>Home / </a>
                <a href="http://localhost:5173/movie" className='cursor-pointer'>{props.headerlink}</a>
            </span>
            {/* <span className="flex items-center justify-between mx-6">
                <h2 className="font-bold text-2xl">{props.title}</h2>
                <a href={props.btnlink}>
                    <AddButton title={props.btncontent} /> 
                </a>
            </span> */}
           
            

        </div>
    
  )
}

export default MainHeader