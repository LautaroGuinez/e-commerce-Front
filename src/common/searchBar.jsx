import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

import axios from "axios";
import { Box } from "@mui/material";
import Contend from "../components/Contend";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);

  const handleSearch = async (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (search.trim() !== "") {
        fetchData();
      } else {
        setProduct([]);
      }
    }, 100);

    return () => clearTimeout(delaySearch);
  }, [search]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/products/search/${search}`
      );
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
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
      <div>
        <Box
          component="form"
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
            onChange={handleSearch}
            id="standard-basic"
            label="Search Item"
            variant="standard"
            sx={{ width: "300px" }}
          />
        </Box>
        <Contend product={product} />
      </div>
    </div>
  );
};

export default SearchBar;
