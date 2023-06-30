import React from "react";
import { Route, Routes } from "react-router";
import Home from "./components/home";
import ProductsCards from "./common/productsCards";
import Register from "./common/register";
import Login from "./common/login";
import Cars from "./common/cars";
import Navbar from "./components/Navbar";
import Contend from "./components/Contend";
import Sidebar from "./common/sidebar";
import SearchBar from "./common/searchBar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductsCards />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </>
  );
}

export default App;
