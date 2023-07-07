import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import "../../src/styles/productsCar.css";
import imageNotFound from "../assest/image_not_found.jpg";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: "#181a1b",
  color: "white",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    outline: "5px solid #2be01f ", // Cambia el valor para ajustar el grosor del borde
  },
}));
const CategoryView = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products");
        setProducts(response.data);
      } catch (error) {
        alert("Error fetching data:", error);
      }
    };
    fetchProducts();
  }, [name]);

  const filteredProducts = products.filter(
    (product) => product.category === name
  );

  return (
    <>
      <Box sx={{}}>
        <StyledCard
          className="card"
          style={{
            borderRadius: "10px",
            backgroundColor: "transparent",
          }}
        >
          {filteredProducts.map((product) => (
            <CardActionArea
              key={product.id}
              component={Link}
              to={`/product/${product.id}`}
            >
              <div className="posterContainer">
                <img
                  src={product.imgUrl || imageNotFound}
                  alt="Product Image"
                  className="poster"
                />
              </div>
              <CardContent>
                <p className="title">{product.name}</p>
              </CardContent>
            </CardActionArea>
          ))}
        </StyledCard>
      </Box>
    </>
  );
};

export default CategoryView;
