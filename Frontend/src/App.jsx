import { useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import Dashboard from "./pages/Dashboard";
import AllMovies from "./pages/AllMovies";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      <BrowserRouter>
        <PrimeReactProvider >
          <Routes>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/movies" element={<AllMovies/>} />
            <Route path="/movie" element={<Movie/>}/>
          
             {/* <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} /> */}
            </Routes>
        </PrimeReactProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
