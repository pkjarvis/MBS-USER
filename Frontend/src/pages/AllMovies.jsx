import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import ImageContainer from "../component/ImageContainer";

import MovieCard from "../component/MovieCard";
import { Dropdown } from "primereact/dropdown";
import Footer from "../component/Footer";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const AllMovies = () => {
  const [genre, setGenre] = useState(null);
  const genres = [
    { name: "Horror", code: "HRR" },
    { name: "Comedy", code: "CMD" },
    { name: "Action", code: "ACT" },
    { name: "Adventure", code: "ADV" },
    { name: "Drama", code: "DRA" },
    { name: "Romance", code: "RMC" },
    { name: "Thriller", code: "THR" },
  ];

  const [language, setLanguage] = useState(null);
  const languages = [
    { name: "Hindi", code: "HN" },
    { name: "English", code: "ENG" },
    { name: "Marathi", code: "MTH" },
    { name: "Telugu", code: "TLG" },
    { name: "Malyalam", code: "MLY" },
  ];

  const handleClick=()=>{
    const navigate=useNavigate("");
    navigate("/movie");
  }

  const username=localStorage.getItem("userName");
    useEffect(()=>{
      console.log(username);
    },[username])


  // fetch get api's for movies
   const [movies, setMovies] = useState([]);
    // const [loading, setLoading] = useState(true);

   useEffect(() => {

    // polling user side to get latest movie added by admin every 10 seconds
    // const interval=setInterval(()=>{
      axiosInstance
      .get("/get-movies", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) =>
        console.log("Error fetching movies", err.response?.data || err.message)
      )
    // },2000);

    // return ()=>clearInterval(interval);
 
      
  },[]);

  

  return (
    <div>
      <div className="all-movies">
        <div className="theatre-container font-[Inter]">
            <NavBar title={username} />
            <span className="flex items-center justify-start mx-[3vw] gap-1 mt-2">
                <a href="http://localhost:3000/dashboard" className='cursor-pointer font-light text-zinc-500 '>Home / </a>
                <a href="http://localhost:3000/movie" className='cursor-pointer font-light'>Movie</a>
            </span> 

        </div>
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
            {movies.length>0?
            (
              movies.map((m)=>(
                <MovieCard
                  key={m.id}
                  movie={m}


                />
              ))
            ):(<p className="text-md ">No movies added</p>)
            
          }
            
            {/* <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/>
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
            <MovieCard imgURL={"../src/assets/aliceWonderland.png"}/> */}
            
            
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
