import React from 'react';


const ImageContainer = () => {
  return (
    <div>
        <div className='bg-white mt-5  w-[100%] h-[70vh] '>
            <img src="../src/assets/Bg-1.png" alt="Bg1" className='object-fill w-[100%] h-[100%]' />
            <span className='flex flex-col absolute top-[17vw] left-[8.4vw] max-w-[18vw] gap-6'>
                <h1 className='text-white text-4xl font-bold'>Redefined Movie Experience!</h1>
                <p className='text-white text-xl'>At PVR Superplex Mall of India</p>
                <button className='bg-[#FF5295] p-2 text-xl w-[90%] h-[3vw] rounded-lg text-white font-semibold text-center cursor-pointer'>Book Now</button>
            </span>
            
        </div>
    </div>
  )
}

export default ImageContainer