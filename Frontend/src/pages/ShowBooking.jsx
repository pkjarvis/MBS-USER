import React, { useEffect } from "react";
import NavBar from "../component/NavBar";
import { useNavigate } from "react-router-dom";

const ShowBooking = () => {
  const navigate=useNavigate("");
  const handleSubmit=()=>{
    navigate("/");
  }

  const username=localStorage.getItem("userName");
  useEffect(()=>{
    console.log(username);
  },[username])


  

  const handlePopUP=()=>{
    navigate("/booking")
  }

  return (
    <div>
      <div className="show-booking-container">
        <div className="theatre-container font-[Inter]">
          <NavBar title={username} />
          <span className="flex items-center justify-start mx-[3vw] gap-1 mt-2">
            <a
              href="http://localhost:3000/dashboard"
              className="cursor-pointer font-light text-zinc-500 "
            >
              Home /
            </a>
            <a
              href="http://localhost:3000/movie"
              className="cursor-pointer font-light text-zinc-500"
            >
              Movie /
            </a>
            <a
              href="http://localhost:3000/showtime"
              className="cursor-pointer text-zinc-500"
            >
              Showtime /
            </a>
            <a href="http://localhost:3000/showtime" className="cursor-pointer">
              Show Booking
            </a>
          </span>
        </div>
      
      


        <div className="header flex justify-start mx-[3vw] mt-[2vw] gap-4 bg-[#F9F9F9] py-[1.4vw]">
          <img
            src="../src/assets/pvr.png"
            alt="PVR"
            className="w-[3vw] h-[3vw] rounded-full"
          />
          <span className="flex flex-col items-start justify-center">
            <h1 className="text-3xl font-bold">Azaad</h1>
            <p className="font-normal text-[#5E5E5E]">
              Cinepolis: Pacific NSP2, Delhi | Monday,May 26, 2025, 07:05 PM
            </p>
          </span>
        </div>

        <div className="border-1 border-[#D9D9D9] mx-[3vw]">
          <div className="seat-status flex items-center justify-center gap-6  my-[0.5vw]">
            <span className="flex items-center justify-center gap-2">
              <p className="w-[1.3vw] h-[1.3vw] bg-white border-1 border-[#59B200] rounded-md"></p>
              <h3>Available</h3>
            </span>
            <span className="flex items-center justify-center gap-2">
              <p className="w-[1.3vw] h-[1.3vw] bg-[#59B200] border-1 border-[#59B200] rounded-md"></p>
              <h3>Selected</h3>
            </span>
            <span className="flex items-center justify-center gap-2">
              <p className="w-[1.3vw] h-[1.3vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-md"></p>
              <h3>Sold out</h3>
            </span>
          </div>

          <div className="w-[100%] h-[auto] bg-[#F9F9F9] ">
            {/* Mth-row High tier prices*/}
            <div className="main-content mx-[3vw] p-[1vw]">
              <h3 className="text-[#949494] font-normal">Rs.560</h3>
              <hr className="my-2 text-[#D6D6D6]" />
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">M</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[12vw]">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[2vw]">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[2vw]">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[2vw]">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[2vw]">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[2vw] ">
                  <p className="text-center text-base  text-white">10</p>
                </div>
              </div>
            </div>

            {/* Middle tier prices */}
            <div className="main-content mx-[3vw] p-[1vw]">
              <h3 className="text-[#949494] font-normal">Rs.320</h3>
              <hr className="my-1 text-[#D6D6D6]" />
              {/* Repetiton Seats */}
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">L</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[4vw]">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw]">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">11</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] ">
                  <p className="text-center text-base  text-white">12</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">13</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">14</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">15</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">K</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[4vw] cursor-pointer">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] cursor-pointer">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">11</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] cursor-pointer ">
                  <p className="text-center text-base  text-white">12</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  cursor-pointer ">
                  <p className="text-center text-base  text-white">13</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  cursor-pointer">
                  <p className="text-center text-base  text-white">14</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  cursor-pointer">
                  <p className="text-center text-base  text-white">15</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">J</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[4vw] cursor-pointer">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] cursor-pointer">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">11</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] cursor-pointer">
                  <p className="text-center text-base  text-white">12</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer ">
                  <p className="text-center text-base  text-white">13</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  cursor-pointer">
                  <p className="text-center text-base  text-white">14</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  cursor-pointer">
                  <p className="text-center text-base  text-white">15</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">I</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[4.3vw] cursor-pointer">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] cursor-pointer">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  cursor-pointer">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">11</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw]  cursor-pointer">
                  <p className="text-center text-base  text-white">12</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">13</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">14</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">15</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">H</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[3.8vw]">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw]">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">11</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] ">
                  <p className="text-center text-base  text-white">12</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">13</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">14</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">15</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">G</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[3.8vw]">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw]">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">11</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] ">
                  <p className="text-center text-base  text-white">12</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">13</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">14</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  ">
                  <p className="text-center text-base  text-white">15</p>
                </div>
              </div>
            </div>

            {/* Low tier seat prices */}
            <div className="main-content mx-[3vw] p-[1vw] ">
              <h3 className="text-[#949494] font-normal">Rs.300</h3>
              <hr className="my-2 text-[#D6D6D6]" />
              {/* Repetiton Seats */}
              <div className="flex items-center gap-4 justify-start my-[2vw]">
                <p className="text-[#949494] font-normal">L</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[4vw]">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw]">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">11</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">K</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[4vw] cursor-pointer">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] cursor-pointer">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">11</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">J</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[4vw] cursor-pointer">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] cursor-pointer">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">11</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">I</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[4.3vw] cursor-pointer">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw] cursor-pointer">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center  cursor-pointer">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center cursor-pointer">
                  <p className="text-center text-base  text-white">11</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">H</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[3.8vw]">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw]">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">11</p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start my-[1.3vw]">
                <p className="text-[#949494] font-normal">G</p>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[3.8vw]">
                  <p className="text-center text-base  text-white">1</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">2</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">3</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">4</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ml-[5vw]">
                  <p className="text-center text-base  text-white">5</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">6</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">7</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center ">
                  <p className="text-center text-base  text-white">8</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">9</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">10</p>
                </div>
                <div className="h-[2.4vw] w-[2.4vw] bg-[#E5E5E5] border-1 border-[#D6D6D6] rounded-sm flex items-center justify-center">
                  <p className="text-center text-base  text-white">11</p>
                </div>
              </div>
             
            </div>
            <div className="flex flex-col items-center justify-center">
                <img
                  src="../src/assets/rect2.png"
                  alt="Overlayed image"
                  className="w-[20%] h-[3vw] z-10 "
                />
                <img
                  src="../src/assets/rect1.jpg"
                  alt="Overlayed image"
                  className="w-[22%] h-[2vw] mt-[-2vw]"
                />
                <p className="text-center text-md text-zinc-300">Screen</p>
              </div>
          </div>
          <div className="flex items-center justify-around p-[1vw] w-[100%] bg-[#F0F0F0] relative mb-4" onClick={handlePopUP}>
            <p className="font-bold text-xl">1 seat selected</p>
             <button className="bg-[#FF5295]  text-md w-[12vw] h-[2vw]  rounded-lg text-white font-semibold text-center cursor-pointer mx-[1vw]" onClick={handleSubmit}>
               Submit
            </button>
          </div>

           
        </div>
      </div>
    </div>
  );
};

export default ShowBooking;
