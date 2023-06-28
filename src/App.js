import React from "react";
import { Button } from "@mui/material";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import fakeData from "./utils/fakeData";
import Register from "./common/register";
import Login from "./common/login";
import Cars from "./common/cars"
import Navbar from "./components/Navbar";

function App() {
 
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
              }}
            >
              <Link to="/login">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button variant="contained" color="primary">
                  Registro
                </Button>
              </Link>
            </div>
          }
        ></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Cars" element={<Cars />}/>
      </Routes>
    </>
  );
}

export default App;
