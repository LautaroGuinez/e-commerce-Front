import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import Home from "./views/home";
import ProductsCards from "./views/productsCards";
import Register from "./views/register";
import Login from "./views/login";
import Cars from "./views/cars";
import Navbar from "./components/Navbar";
import { setUser } from "./state/user";
import SearchBar from "./views/searchBar";
import Puchease from "./views/puchase";
import MyAcount from "./views/myAcount";
import AllUsersView from "./views/allUsersView";
import AddProductFrom from "./views/addProductForm";
import EditProductForm from "./views/editProductForm";
import CategoryView from "./views/categoryView";

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
  }, [dispatch]);
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
        <Route path="/myAcount" element={<MyAcount />} />
        <Route path="/users" element={<AllUsersView />} />
        <Route path="/addProduct" element={<AddProductFrom />} />
        <Route path="/checkout" element={<Puchease />} />
        <Route path="/:id/edit-product" element={<EditProductForm />} />
        <Route path="/category/:name" element={<CategoryView />} />
      </Routes>
    </>
  );
}

export default App;
