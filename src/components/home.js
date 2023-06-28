import React from "react";
import Sidebar from "../common/sidebar";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sidebar />
      </Box>
    </>
  );
};

export default Home;
