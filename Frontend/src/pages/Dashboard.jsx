import React, { useState } from 'react'
import NavBar from '../component/NavBar'
import RegisterPopUp from '../component/RegisterPopUp';
import ImageContainer from '../component/ImageContainer';
import MovieCardSection from '../component/MovieCardSection';

const Dashboard = () => {

  const [flag,setFlag]=useState(true);

  
  return (
    <div>
      
        <div  >
          <NavBar/>
          {flag?<RegisterPopUp val={flag} func={setFlag} />:null} 
          <section>
            <ImageContainer/> 
          </section>
          <section>
             <MovieCardSection/>
          </section>
          

        </div>
    </div>
  )
}

export default Dashboard