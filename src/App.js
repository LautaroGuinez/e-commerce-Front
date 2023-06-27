import React from "react";
import { Button } from "@mui/material";
import { Route, Routes } from "react-router";

import Register from "./common/register";

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hola, Material-UI
      </Button>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
