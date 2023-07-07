import React, { useEffect, useState } from "react";
import axios from "axios";
import { setUser } from "../state/user";
import { withStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router";

const CustomTextField = withStyles((theme) => ({
  root: {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2be01f",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  },
}))(TextField);

const EditProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const editedProduct = await axios.put(
        `http://localhost:3001/api/products/${id}/edit`,
        {
          name,
          price: Number(price),
          category,
          description,
          imgUrl,
        }
      );
      alert(`Edit done ${product.name}`);
      navigate(`/product/${id}`);
    } catch {}
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Grid container>
        <Card
          style={{
            maxWidth: 450,
            padding: "20px 5px",
            margin: "0 auto",
            backgroundColor: "#141519", // Cambia el color de fondo a gris
          }}
        >
          <h1 style={{ textAlign: "center", color: "#2be01f" }}>
            Edit product
          </h1>
          <CardContent>
            <Box onSubmit={handleSubmit} component="form">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => setName(e.target.value.toLowerCase())}
                    value={name}
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    type="number" // Cambio de tipo a "number"
                    label="Price"
                    name="price"
                    autoComplete="price"
                    autoFocus
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="Category"
                    name="category"
                    autoComplete="category"
                    autoFocus
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="Description"
                    name="description"
                    autoComplete="description"
                    autoFocus
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="ImgUrl"
                    name="imgUrl"
                    autoComplete="imgUrl"
                    autoFocus
                    onChange={(e) => setImgUrl(e.target.value)}
                    value={imgUrl}
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    sx={{
                      background: "#2be01f",
                      "&:hover": {
                        background: "#7200ff",
                      },
                    }}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default EditProductForm;
