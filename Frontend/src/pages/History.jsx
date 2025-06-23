import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import BookingCard from "../component/BookingCard";
import Footer from "../component/Footer";

const History = () => {
  const username = localStorage.getItem("userName");
  useEffect(() => {
    console.log(username);
  }, [username]);

  const [visible,setVisible]=useState(false); 


  const handlePopup=()=>{
    setVisible(!visible);
  }
  

  return (
    <div>
      <div className="profile-container">
        <NavBar title={username} />
        <div className="bg-[#E2E0E0] p-2">
          <div className="flex items-center gap-[3vw] mx-[2.4vw]">
            <a href="http://localhost:3000/profile">Profile</a>
            <a href="http://localhost:3000/history">History</a>
          </div>
        </div>
        <div className="mx-[3vw] h-[6vw] w-[94%] mt-[1vw]">
          <h1 className="font-semibold text-xl my-1">Upcoming movies</h1>

          <BookingCard onClick={()=>handlePopup} val={visible} func={setVisible} />
          <h1 className="font-semibold text-xl my-3">Past Movies</h1>

          {/* <BookingCard onClick={()=>handlePopup} val={visible} func={setVisible} />
          <BookingCard onClick={()=>handlePopup} val={visible} func={setVisible} />
          <BookingCard onClick={()=>handlePopup} val={visible} func={setVisible} />
          <BookingCard onClick={()=>handlePopup} val={visible} func={setVisible} /> */}
        </div>

      </div>
        {/* <Footer/> */}
    </div>
  );
};

export default History;
