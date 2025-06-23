import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import RegisterPopUp from "../component/RegisterPopUp";
import ImageContainer from "../component/ImageContainer";
import MovieCardSection from "../component/MovieCardSection";
import NowShowingTheatre from "../component/NowShowingTheatre";
import Bollywood from "../component/Bollywood";
import Footer from "../component/Footer";



const Dashboard = () => {

  
  const [flag, setFlag] = useState(true);


 
  const token=localStorage.getItem("userToken");
  const username=localStorage.getItem("userName");
  useEffect(()=>{
    if(token!=""){
      setFlag(false);
    }
  },[token,username])
  
  


  return (
    <div>
      <div>
        <NavBar title={username} />
        {flag && (
          <>
            {/* Backdrop overlay, inset0 make's top,bottom,left,right to 0 . Hence making it entirely cover parent div */}
            <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
            {/* Popup component */}
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <RegisterPopUp val={flag} func={setFlag} />
            </div>
          </>
        )}
        <section>
          <ImageContainer />
        </section>
        <section>
          <MovieCardSection
            title="Watch latest movie"
            imgTitle={"../src/assets/aliceWonderland.png"}
          />
        </section>
        <section>
          <NowShowingTheatre />
        </section>

        <section className="mx-[3vw] bg-white">
          <h1 className="font-bold text-4xl text-black text-center mt-[2.5vw]">
            Book Your Show in 4 Easy Steps
          </h1>
          <p className="text-md text-wrap text-center mb-[3vw] mt-[1vw] max-w-[86%] mx-[28vw] font-light">
            Booking your favorite show is simple and quick! Just follow these
            four steps to secure your seat and enjoy and unforgettable
            experience.
          </p>
          <span className="flex items-center justify-between mt-8 mx-[6vw]">
            <span className="flex flex-col items-center">
              <p className="bg-[#FFE9F3] h-[7vw] w-[7vw] rounded-full flex items-center justify-center">
                <img
                  src="../src/assets/take.png"
                  alt="Take"
                  className="h-[2.6vw] w-[2.8vw]"
                />
              </p>
              <p className="text-black font-medium text-wrap max-w-[7vw] text-center mt-3">
                Select Movie & Location
              </p>
            </span>

            <span className="flex flex-col items-center">
              <p className="bg-[#FFE9F3] h-[7vw] w-[7vw] rounded-full flex items-center justify-center">
                <img
                  src="../src/assets/clock.png"
                  alt="Take"
                  className="h-[2.6vw] w-[2.8vw]"
                />
              </p>
              <p className="text-black font-medium text-wrap max-w-[7vw] text-center mt-3">
                Pick Date & Show Timing
              </p>
            </span>

            <span className="flex flex-col items-center">
              <p className="bg-[#FFE9F3] h-[7vw] w-[7vw] rounded-full flex items-center justify-center">
                <img
                  src="../src/assets/passenger.png"
                  alt="Take"
                  className="h-[2.6vw] w-[2.8vw]"
                />
              </p>
              <p className="text-black font-medium text-wrap max-w-[7vw] text-center mt-3">
                Choose Seats & Tickets
              </p>
            </span>

            <span className="flex flex-col items-center">
              <p className="bg-[#FFE9F3] h-[7vw] w-[7vw] rounded-full flex items-center justify-center">
                <img
                  src="../src/assets/cash.png"
                  alt="Take"
                  className="h-[2.6vw] w-[2.8vw]"
                />
              </p>
              <p className="text-black font-medium text-wrap max-w-[7vw] text-center mt-3">
                Payment & Confirm Booking
              </p>
            </span>
          </span>
        </section>

        <section>
          <Bollywood />
        </section>

        <section className="mx-[3vw]  h-[14vw]  my-[4vw]">
          <img
            src="../src/assets/footerImage.png"
            alt="FooterImg"
            className="w-[100%] h-[100%] object-fit"
          />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
