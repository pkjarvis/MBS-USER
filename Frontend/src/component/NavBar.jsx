import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-center mt-[2vw]'>
        <div className="nav-container  w-[95%] flex items-center justify-between p-2">
            <img src="../src/assets/Logo.png" alt="WebLogo" className='w-[2.6vw] h-[2.6vw]' />
            <span className='container-right flex items-center justify-center gap-4'>
                <span className='flex items-center gap-2'>
                    <p className='text-[#373737] font-normal'>New Delhi</p>
                    <img src="../src/assets/dropDown.png" alt="DropDown" className='w-[1vw] h-[0.7vw]' />
                </span>

                <span className='flex items-center gap-1 cursor-pointer'>
                    <img src="../src/assets/user.png" alt="Profile" className='w-[2vw] h-[2vw]' />
                     <p className='text-[#373737] font-normal'>Hi,{" "} Rohit Negi</p>
                </span>
            </span>
        </div>
    </div>
  )
}

export default NavBar