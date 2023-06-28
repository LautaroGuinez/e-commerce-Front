import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
