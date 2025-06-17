import { useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />}/>
          <Route path="/" element={<Dashboard/>} />

          
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
