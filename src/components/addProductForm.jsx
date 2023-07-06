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
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState({});
  const [allcategorys, setAllcategorys] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = await axios.post(
        "http://localhost:3001/api/products/submit",
        {
          name,
          price,
          description,
          imgUrl,
        }
      );
      const productId = product.data.id;
      await axios.post(
        `  http://localhost:3001/api/productCategories/assignCategory/${productId}/${category.id}  `
      );

      prompt("Product Creacted");
      navigate(`http://localhost:3001/api/products/${productId}`);
    } catch (error) {
      console.error("Error creating product and assigning category:", error);
    }
  };

  useEffect(() => {
    const fetchCategorys = async () => {
      try {
        const categorys = await axios.get("http://localhost:3001/api/category");
        return setAllcategorys(categorys.data);
      } catch (error) {
        return alert("Error fetching data:", error);
      }
    };
    fetchCategorys();
  }, []);

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
            id="outlined-required"
            label="Last Name"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />
        </div>
        <MenuList dense>
          {allcategorys.map((category) => {
            <MenuItem>
              <ListItemText inset onClick={() => setCategory(category)}>
                {category.name}
              </ListItemText>
            </MenuItem>;
          })}
        </MenuList>

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
