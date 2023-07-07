import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

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
      {filteredProducts.map((product) => (
        <Card key={product.id} component={Link} to={`/product/${product.id}`}>
          <CardContent>
            <div>
              <img
                src={product.imgUrl}
                alt="Product Image"
                className="poster"
              />
            </div>
            <Typography variant="h5" component="div">
              {product.name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CategoryView;
