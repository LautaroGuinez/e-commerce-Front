import React from "react";
import { Button } from "@mui/material";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import fakeData from "./utils/fakeData";
import Register from "./common/register";
import SearchBar from "./common/searchBar";

function App() {
  console.log(fakeData());
  return (
    <div>
      <Link to="/register">
        <Button variant="contained" color="primary">
          Hola, Material-UI
        </Button>
      </Link>
      <Routes>
        <Route path="/register" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
