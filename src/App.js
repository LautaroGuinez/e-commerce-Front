import React from "react";
import { Button } from "@mui/material";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import ProductsCards from "./common/productsCards";
import fakeData from "./utils/fakeData";
import Register from "./common/register";
import Login from "./common/login";
import Cars from "./common/cars";
import Navbar from "./components/Navbar";
import Contend from "./components/Contend";
import Sidebar from "./common/sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Contend />
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
              <Link to="/product">
                <Button variant="contained" color="primary">
                  Registro
                </Button>
              </Link>
            </div>
          }
        ></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductsCards />} />
        <Route path="/Cars" element={<Cars />} />
      </Routes>
    </>
  );
}

export default App;
