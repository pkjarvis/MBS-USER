import React from 'react'
import NavBar from '../component/NavBar'

const Profile = () => {
  return (
    <div>
        <div className="profile-container">
            <NavBar/>
            <div className='bg-[#E2E0E0] p-2'>
                <div className='flex items-center gap-[3vw] mx-[2.4vw]'>
                    <a href="http://localhost:5173/profile" >Profile</a>
                    <a href="http://localhost:5173/history">History</a>
                </div>
                
            </div>
            <div className='bg-[#F1F1F1] mx-[3vw] h-[70vh] pt-[2vw] mt-[1.6vw]'>
              <div className="h-[6.4vw] w-[100%] bg-linear-to-r from-[#2D3148] to-[#E54D61] relative ">
                <div className='flex items-center justify-start gap-[2vw] pt-[2vw] mx-[12vw] '>
                    <span className='w-[6.4vw] h-[6.2vw] rounded-full bg-[#D9D9D9] flex items-center justify-center '>
                        <img src="../src/assets/camera.png" alt="Camera" className='w-[3vw] h-[3vw] z-10' /> 
                    </span>
                    <p className='text-xl text-white'>Hi, Guest</p>
                </div>
              </div>

              <div className='content-container flex flex-col items-start mt-[2vw] ml-[22vw]'>
                <h2 className='text-2xl font-medium text-center'>Personal Details</h2>
                <span className='flex items-center gap-[6vw] mt-[1vw]'>
                    <p>First Name</p>
                    <input type="text" placeholder="Enter first name here" className='w-[30vw] h-[2vw] p-1 bg-white border-1 border-[#CCCCCC] focus:outline-none'/>
                </span>
                <span className='flex items-center gap-[6vw] mt-[1vw]'>
                    <p>Last Name</p>
                    <input type="text" placeholder="Enter first name here" className='w-[30vw] h-[2vw] p-1 bg-white border-1 border-[#CCCCCC] focus:outline-none'/>
                </span>
                <span className='flex items-center gap-[6vw] mt-[1vw]'>
                    <p>Email Address</p>
                </span>
                <span className='flex items-center gap-[6vw] mt-[1vw]'>
                    <p>Mobile Number</p>
                </span>
                
              </div>
              
              
              
            </div>
        </div>
    </div>
  )
}

export default Profile