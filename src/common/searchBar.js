import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MyIcon from "../styles/iconoLupa";
const SearchBar = () => {
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
    </div>
  );
};

export default SearchBar;
