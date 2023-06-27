import React from "react";
import { Button } from "@mui/material";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";

import Register from "./common/register";

function App() {
  return (
    <div>
      <Link to="/register">
        <Button variant="contained" color="primary">
          Hola, Material-UI
        </Button>
      </Link>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
