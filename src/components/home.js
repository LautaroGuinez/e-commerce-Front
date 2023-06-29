import React from "react";
import Sidebar from "../common/sidebar";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import Contend from "./Contend";

const Home = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sidebar />
      </Box>
      <Contend />
    </>
  );
};

export default Home;
