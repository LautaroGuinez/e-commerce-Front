import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../common/sidebar";
import Contend from "./Contend";

import { Box } from "@mui/material";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sidebar />
      </Box>
      <Contend product={product} />
    </>
  );
};

export default Home;
