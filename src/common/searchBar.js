import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import MyIcon from "../styles/iconoLupa";
import axios from "axios";
import { Box } from "@mui/material";
import Contend from "../components/Contend";


const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);
  console.log(product);

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/api/products/search/${search}`)
      .then((response) => setProduct(response.data))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "0",
        marginTop: "0",
      }}
    >
      {MyIcon()}
      <TextField
        id="standard-basic"
        label="Search Item"
        variant="standard"
        sx={{ width: "300px" }}
      />
      <Button variant="outlined">Search</Button>
    <div>
      <Box
        component="form"
        onSubmit={handleSearch} // Cambio en el evento onSubmit
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "0",
          marginTop: "0",
        }}
      >
        <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="standard-basic"
          label="Search Item"
          variant="standard"
          sx={{ width: "300px" }}
        />
        <Button type="submit" variant="outlined">
          Search
        </Button>
      </Box>
      <Contend product={product} />
    </div>
  );
};

export default SearchBar;
