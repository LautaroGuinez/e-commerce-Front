import React from "react";
import { Button } from "@mui/material";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import ProductsCards from "./common/productsCards";
import fakeData from "./utils/fakeData";
import Register from "./common/register";
import Login from "./common/login";

function App() {
  console.log(fakeData());
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
