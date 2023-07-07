import React, { useEffect, useState } from "react";
import Sidebar from "../common/sidebar";
import { Box } from "@mui/material";
import Contend from "../components/Contend";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/products").then((res) => {
      localStorage.removeItem("reduxState");
      setProduct(res.data);
    });
  }, []);

  return (
    <>
      <Sidebar />
      <Contend product={product} />
    </>
  );
};

export default Home;
