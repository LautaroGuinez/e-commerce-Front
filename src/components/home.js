import React, { useEffect, useState } from "react";
import Sidebar from "../common/sidebar";

import { Box } from "@mui/material";
import Contend from "./Contend";
import axios from "axios";
const Home = () => {
  const[product,setProduct]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/api/products")
    .then((res)=>setProduct(res.data))
  },[])
  

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sidebar />
      </Box>
      <Contend product={product}/>
    </>
  );
};

export default Home;
