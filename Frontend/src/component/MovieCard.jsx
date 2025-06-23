import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = (props) => {

  

  return (
    <div className='  hover:scale-109 ease-in-out duration-300 '>
        <div className="card-img-container w-[100%] h-[28vw] mt-[1.8vw] border-1 border-zinc-400 rounded-2xl overflow-hidden  cursor-pointer">
            <a href="http://localhost:3000/movie"><img src={props.imgURL} alt="Alice" className='w-[100%] h-[23vw]'  /></a>
            <span className='w-[95%] mt-2' >
                <p className='text-md text-black font-semibold mx-2'>Alice in Wonderland</p>
                 <span className='flex items-center justify-start gap-2 ml-3'>
                    <p className='text-gray-400'>4.2</p>
                    <img src="../src/assets/Star.png" alt="Star" className='w-[1vw] h-[1vw]' />
                    <img src="../src/assets/Star.png" alt="Star" className='w-[1vw] h-[1vw]' />
                    <img src="../src/assets/Star.png" alt="Star" className='w-[1vw] h-[1vw]' />
                    <img src="../src/assets/Star.png" alt="Star" className='w-[1vw] h-[1vw]' />
                    <img src="../src/assets/Star14.png" alt="Star14" className='w-[1.16vw] h-[1.18vw]' />
                </span>
                <p className='text-[#6F6F6F] font-light mx-2'>Adventure | UA13+ | English,Hindi</p>
            </span>
        </div>
    </div>
  )
}

export default MovieCard