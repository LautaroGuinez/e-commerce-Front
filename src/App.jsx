import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUser } from "./state/user";

import Home from "./components/home";
import ProductsCards from "./common/productsCards";
import Register from "./common/register";
import Login from "./common/login";
import Cars from "./common/cars";
import Navbar from "./components/Navbar";

import SearchBar from "./common/searchBar";
import { useDispatch } from "react-redux";
import { setUser } from "./state/user";
import axios from "axios";

import SearchBar from "./common/searchBar";

import Puchease from "./common/puchase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users/me", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        credentials: "include",
      })
      .then((user) => {
        dispatch(setUser(user.data));
      })
      .catch((err) => console.error(err));
  }, []);
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
        <Route path="/puchease" element={<Puchease />} />
      </Routes>
    </>
  );
}

export default App;
