import { useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import Dashboard from "./pages/Dashboard";
import AllMovies from "./pages/AllMovies";
import Movie from "./pages/Movie";
import Showtime from "./pages/Showtime";
import ShowBooking from "./pages/ShowBooking";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import History from "./pages/History";
import PaymentStatus from "./pages/PaymentStatus";
import LoggedDashboard from "./pages/LoggedDashboard"

function App() {
  return (
    <>
      <BrowserRouter>
        <PrimeReactProvider>
          <Routes>
            <Route path="*" element={<Navigate to="/dashboard" />} />
            <Route path="/root" element={<Dashboard />} />
            <Route path="/dashboard" element={<LoggedDashboard/>} />
            <Route path="/movies" element={<AllMovies />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/showtime" element={<Showtime />} />
            <Route path="/showbooking" element={<ShowBooking />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/history" element={<History />} />
            <Route path="/payment-status" element={<PaymentStatus />} />
          </Routes>
        </PrimeReactProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
