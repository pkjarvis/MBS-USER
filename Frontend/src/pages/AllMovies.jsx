import React, { useState } from "react";
import NavBar from "../component/NavBar";
import ImageContainer from "../component/ImageContainer";

import MovieCard from "../component/MovieCard";
import { Dropdown } from "primereact/dropdown";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";

const AllMovies = () => {
  const [genre, setGenre] = useState(null);
  const genres = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [language, setLanguage] = useState(null);
  const languages = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const handleClick=()=>{
    const navigate=useNavigate("");
    navigate("/movie");
  }

  return (
    <div>
      <div className="all-movies">
        <NavBar />
        <ImageContainer />

        <div className="card-container mx-[3vw] bg-white h-[auto]">
          <span className="flex items-center gap-4 mt-[4vw] ">
            <p className="text-3xl font-bold">Movies</p>
            <div className="card flex justify-content-center ">
              <Dropdown
                value={genre}
                onChange={(e) => setGenre(e.value)}
                options={genres}
                optionLabel="name"
                placeholder="Genre"
               
              />
            </div>
            <div className="card flex justify-content-center ">
              <Dropdown
                value={language}
                onChange={(e) => setLanguage(e.value)}
                options={languages}
                optionLabel="name"
                placeholder="Language"
                
              />
            </div>
          </span>

          <div className="grid grid-cols-4  gap-[2vw]">
            
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
            
            
          </div>
          <div className='  h-[14vw]  my-[4vw]'>
            <img src="../src/assets/footerImage.png" alt="FooterImg" className='w-[100%] h-[100%] object-fit' />
          </div>

          
          
        

        </div>
           

           
        
        
        
        
        
            <Footer/>
      </div>
      
    
      
    </div>
  );
};

export default AllMovies;
