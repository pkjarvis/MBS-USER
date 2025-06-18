import React from "react";
import NavBar from "../component/NavBar";
import MainHeader from "../component/MainHeader";

const Movie = () => {
  return (
    <div>
      <div className="movie-container">
        <MainHeader headerlink="Movie" />
        <div className="bg-blue-400">
            <div>
                <img src="../src/assets/Azaad.png" alt="Azaad" className="w-[26%]"/>
            </div>
            <div>
                <h1 className="text-4xl font-bold">Azaad</h1>
                <span className='flex items-center justify-start gap-2 ml-3'>
                    <p className='text-gray-400'>4.2</p>
                    <img src="../src/assets/Star.png" alt="Star" className='w-[1vw] h-[1vw]' />
                    <img src="../src/assets/Star.png" alt="Star" className='w-[1vw] h-[1vw]' />
                    <img src="../src/assets/Star.png" alt="Star" className='w-[1vw] h-[1vw]' />
                    <img src="../src/assets/Star.png" alt="Star" className='w-[1vw] h-[1vw]' />
                    <img src="../src/assets/Star14.png" alt="Star14" className='w-[1.16vw] h-[1.18vw]' />
                </span>
                <p className="text-[#6F6F6F]"><span>2h 49m</span>{" "}Drama,Action|UA13+|English, Hindi</p>
                <p>About </p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
