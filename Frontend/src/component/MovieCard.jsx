import React from 'react'

const MovieCard = () => {
  return (
    <div>
        <div className="card-img-container w-[15%] h-[28vw] mt-[1.8vw] border-1 border-zinc-400 rounded-2xl overflow-hidden ">
            <img src="../src/assets/aliceWonderland.png" alt="Alice" className='w-[100%] h-[23vw]'/>
            <span className='w-[95%] mt-2'>
                <p className='text-md text-black font-semibold mx-2'>Alice in Wonderland</p>
                <p className='text-[#6F6F6F] font-light mx-2'>4.2 </p>
                <p className='text-[#6F6F6F] font-light mx-2'>Adventure|UA13+|English , Hindi</p>
            </span>
        </div>
    </div>
  )
}

export default MovieCard