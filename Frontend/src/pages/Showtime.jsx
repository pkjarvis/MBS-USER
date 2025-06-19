import React, { useState } from "react";
import NavBar from "../component/NavBar";
import { Dropdown } from "primereact/dropdown";

const Showtime = () => {
  const [language, setLanguage] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const [preferredrole, setPreferredRole] = useState(null);
  const city = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div>
      <div className="showtime-container">
        <NavBar />
        <div className="flex items-center justify-start gap-2 h-[35vw] p-2">
          <div className="h-[33vw] w-[28%]">
            <img
              src="../src/assets/Azaad.png"
              alt="Azaad"
              className="w-[86%] h-[90%]"
            />
          </div>
          <div className="h-[100%] flex flex-col items-start justify-start mt-[6vw] p-[2vw] max-w-[40%]">
            <h1 className="text-4xl font-bold">Azaad</h1>
            <p className="text-[#6F6F6F] mt-[1vw]">
              <span className="text-black ">2h 49m</span>{" "}
              Drama,Action|UA13+|English, Hindi
            </p>
            <div className="date-container w-[auto] h-[auto]  rounded-xl border-1 border-[#EBEBEB] flex items-center justify-start mt-[1.6vw]">
              <div className="flex items-center justify-between gap-3 p-3 w-[auto] p-[1vw]">
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] p-2 items-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-125 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] p-2 items-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-125 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] p-2 items-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-125 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] p-2 items-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-125 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] p-2 items-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-125 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] p-2 items-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-125 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
                <span className="bg-[#F5F5F5] flex flex-col w-[17%] p-2 items-center rounded-2xl hover:border-1 hover:border-[#FF5295] hover:scale-125 ease-in-out duration-150">
                  <p className="text-xl font-light text-black">MAY</p>
                  <p className="text-2xl font-semibold text-black">23</p>
                  <p className="text-md font-light text-black">Fri</p>
                </span>
              </div>
            </div>

            <div className="flex items-center mt-[2vw] gap-[2vw]">
              <div className="card flex justify-content-center">
                <Dropdown
                  value={setLanguage}
                  onChange={(e) => setLanguage(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full md:w-14rem"
                />
              </div>
              <div className="card flex justify-content-center">
                <Dropdown
                  value={preferredrole}
                  onChange={(e) => setPreferredRole(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full md:w-14rem"
                />
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showtime;
