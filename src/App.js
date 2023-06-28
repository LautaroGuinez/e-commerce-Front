import React from "react";
import { Button } from "@mui/material";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import fakeData from "./utils/fakeData";
import Register from "./common/register";
import Login from "./common/login";
import Navbar from "./components/Navbar";

function App() {
  console.log(fakeData());
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
