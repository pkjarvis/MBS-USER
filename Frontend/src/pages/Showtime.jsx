import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import { Dropdown } from "primereact/dropdown";
import Footer from "../component/Footer";
import MainHeader from "../component/MainHeader";
import { useNavigate } from "react-router-dom";

const Showtime = () => {


  const [language, setLanguage] = useState(null);
  const languagesArray = [
    { name: "Hindi", code: "HND" },
    { name: "Marathi", code: "MRT" },
    { name: "English", code: "ENG" },
    { name: "Malayalam", code: "MLM" },
    { name: "Telugu", code: "TLG" },
  ];


  const [preferredslot, setPreferredSlot] = useState(null);
  const timeslotArray = [
    { name: "8AM-10AM", code: "T1" },
    { name: "10AM-12AM", code: "T2" },
    { name: "12AM-2PM", code: "T3" },
    { name: "2PM-4PM", code: "T4" },
    { name: "4PM-6PM", code: "T5" },
    { name: "6PM-8PM", code: "T6" },
    { name: "8PM-10PM", code: "T7" },
    { name: "10PM-12PM", code: "T8" },
  ];

  const navigate=useNavigate("");

  const handleClick=()=>{
    navigate("/showbooking");
  }
  const username=localStorage.getItem("userName");
  useEffect(()=>{
    console.log(username);
  },[username])


  return (
    <div>
      <div className="showtime-container">
         <div className="theatre-container font-[Inter]">
            <NavBar title={username} />
            <span className="flex items-center justify-start mx-[3vw] gap-1 mt-2">
                <a href="http://localhost:5173/dashboard" className='cursor-pointer font-light text-zinc-500 '>Home / </a>
                <a href="http://localhost:5173/movie" className='cursor-pointer font-light text-zinc-500'>Movie /</a>
                <a href="http://localhost:5173/showtime" className='cursor-pointer'> Show Time</a>
            </span> 

        </div>
        
        {/* Header Section */}
        <div className="flex items-center justify-start  h-[30vw] p-2 mt-[3vw]">
          {/* Header Left Section */}
          <div className="h-[33vw] w-[20%] items-start">
            <img
              src="../src/assets/Azaad.png"
              alt="Azaad"
              className="w-[95%] h-[70%] my-auto"
            />
          </div>
          {/* Header Right Section*/}
          <div className="h-[100%] flex flex-col items-start justify-start p-[2vw] max-w-[50%]">
            <h1 className="text-4xl font-bold">Azaad</h1>
            <p className="text-[#6F6F6F] mt-[1vw]">
              <span className="text-black ">2h 49m</span>{" "}
              Drama,Action | UA13+ | English, Hindi
            </p>
            <div className="date-container w-[auto] h-[28%]  rounded-xl border-1 border-[#EBEBEB] flex items-center justify-start mt-4">
              <div className="flex items-center justify-between gap-4  w-[auto] p-[1vw]">
               <span className="bg-[#F5F5F5] flex flex-col w-[17%] h-[5vw] p-4 items-center justify-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-115 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] h-[5vw] p-4 items-center justify-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-115 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] h-[5vw] p-4 items-center justify-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-115 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] h-[5vw] p-4 items-center justify-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-115 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] h-[5vw] p-4 items-center justify-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-115 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] h-[5vw] p-4 items-center justify-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-115 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] h-[5vw] p-4 items-center justify-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-115 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
              </div>
            </div>
        
        
            <div className="flex items-center mt-[2vw] gap-[2vw]">
              <div className="card flex justify-content-center">
                <Dropdown
                  value={language}
                  onChange={(e) => setLanguage(e.value)}
                  options={languagesArray}
                  optionLabel="name"
                  placeholder="Language"
                  className="w-full md:w-14rem"
                />
              </div>
              <div className="card flex justify-content-center ">
                <Dropdown
                  value={preferredslot}
                  onChange={(e) => setPreferredSlot(e.value)}
                  options={timeslotArray}
                  optionLabel="name"
                  placeholder="Preffered time slots"
                  className="w-full md:w-14rem"
                />
              </div>
            </div>

          </div>
        </div>
        {/* Time Slots Section */}
         <div className="time-slots bg-[#F9F9F9] mx-[3vw] flex flex-col mt-[-6vw]">
              <div>
                <span className="flex items-center justify-start gap-4 px-2 py-2">
                  <img src="../src/assets/pvr.png" alt="PVR" className="w-[3vw] h-[3vw] rounded-full" />
                  <span className="flex flex-col items-start">
                    <p className="font-semibold text-xl">PVR Elan Miracle</p>
                    <p className="text-base font-medium">Sec 84,Gurugram</p>
                    <p className="text-base font-light text-[#707070]">Allow cancellation</p>
                  </span>
                </span>
                <div className="h-[auto] mt-2 grid grid-cols-7 px-2 gap-4 ">
                  <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                  
                  
                </div>
                <hr className="text-[#C2C2C2] mt-[1vw]"/>
              </div>

                <div>
                <span className="flex items-center justify-start gap-4 px-2 py-2">
                  <img src="../src/assets/pvr.png" alt="PVR" className="w-[3vw] h-[3vw] rounded-full" />
                  <span className="flex flex-col items-start">
                    <p className="font-semibold text-xl">PVR Elan Miracle</p>
                    <p className="text-base font-medium">Sec 84,Gurugram</p>
                    <p className="text-base font-light text-[#707070]">Allow cancellation</p>
                  </span>
                </span>
                <div className="h-[auto] mt-2 grid grid-cols-7 px-2 gap-4 ">
                  <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                  
                  
                </div>
                <hr className="text-[#C2C2C2] mt-[1vw]"/>
              </div>


                <div>
                <span className="flex items-center justify-start gap-4 px-2 py-2">
                  <img src="../src/assets/pvr.png" alt="PVR" className="w-[3vw] h-[3vw] rounded-full" />
                  <span className="flex flex-col items-start">
                    <p className="font-semibold text-xl">PVR Elan Miracle</p>
                    <p className="text-base font-medium">Sec 84,Gurugram</p>
                    <p className="text-base font-light text-[#707070]">Allow cancellation</p>
                  </span>
                </span>
                <div className="h-[auto] mt-2 grid grid-cols-7 px-2 gap-4 ">
                  <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                  
                  
                </div>
                <hr className="text-[#C2C2C2] mt-[1vw]"/>
              </div>

                 <div>
                <span className="flex items-center justify-start gap-4 px-2 py-2">
                  <img src="../src/assets/pvr.png" alt="PVR" className="w-[3vw] h-[3vw] rounded-full" />
                  <span className="flex flex-col items-start">
                    <p className="font-semibold text-xl">PVR Elan Miracle</p>
                    <p className="text-base font-medium">Sec 84,Gurugram</p>
                    <p className="text-base font-light text-[#707070]">Allow cancellation</p>
                  </span>
                </span>
                <div className="h-[auto] mt-2 grid grid-cols-7 px-2 gap-4 ">
                  <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                  
                  
                </div>
                <hr className="text-[#C2C2C2] mt-[1vw]"/>
              </div>


                 <div>
                <span className="flex items-center justify-start gap-4 px-2 py-2">
                  <img src="../src/assets/pvr.png" alt="PVR" className="w-[3vw] h-[3vw] rounded-full" />
                  <span className="flex flex-col items-start">
                    <p className="font-semibold text-xl">PVR Elan Miracle</p>
                    <p className="text-base font-medium">Sec 84,Gurugram</p>
                    <p className="text-base font-light text-[#707070]">Allow cancellation</p>
                  </span>
                </span>
                <div className="h-[auto] mt-2 grid grid-cols-7 px-2 gap-4 ">
                  <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                  
                  
                </div>
                <hr className="text-[#C2C2C2] mt-[1vw]"/>
              </div>


                <div className="mb-4">
                <span className="flex items-center justify-start gap-4 px-2 py-2">
                  <img src="../src/assets/pvr.png" alt="PVR" className="w-[3vw] h-[3vw] rounded-full" />
                  <span className="flex flex-col items-start">
                    <p className="font-semibold text-xl">PVR Elan Miracle</p>
                    <p className="text-base font-medium">Sec 84,Gurugram</p>
                    <p className="text-base font-light text-[#707070]">Allow cancellation</p>
                  </span>
                </span>
                <div className="h-[auto] mt-2 grid grid-cols-7 px-2 gap-4 ">
                  <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                 <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                   <div className="font-medium border-1 border-[#ACACAC] p-2 w-[10vw] text-center rounded-2xl cursor-pointer" onClick={handleClick}>
                    <p className="text-[#008610] ">2:40 PM</p>
                  </div>
                  
                  
                </div>
                
              </div>





          </div>

        {/* Footer Section */}
          <Footer/>
      </div>
    </div>
  );
};

export default Showtime;
