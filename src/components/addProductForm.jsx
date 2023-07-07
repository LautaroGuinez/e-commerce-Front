import React, { useEffect, useState } from "react";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import axios from "axios";

const AddProductFrom = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = await axios.post(
        "http://localhost:3001/api/products/submit",
        {
          name,
          price: Number(price),
          category,
          description,
          imgUrl,
        }
      );
      console.log(product);
      alert(product.name);
    } catch (error) {
      alert("Error al crear el producto");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            type="number"
            id="outlined-required"
            label="Price"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            id="outlined-required"
            label="Category"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            id="outlined-required"
            label="Description"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            id="outlined-required"
            label="imgURL"
            defaultValue=""
          />
        </div>
        <div>
          <Button
            type="submit"
            style={{ marginLeft: "90px", marginTop: "15px" }}
            variant="contained"
          >
            Create Product
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default AddProductFrom;
