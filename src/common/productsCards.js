import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import "../../src/styles/productsCar.css";

const ProductCards = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);

  return (
    <div>
      <div className="conteinerProducts">
        <Card className="card">
          <CardActionArea component={Link} to={`/product/${product.id}`}>
            <CardContent className="cardContend">
              <div>
                <h2>{product.name}</h2>
                <img src={product.imgUrl} alt={product.name} />
              </div>
              <div>
                <p className="description">{product.description} </p>
                <p className="price">PRICE</p>
                <p className="productPrice">{product.price}</p>
                <Button variant="contained">Add To Car</Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default ProductCards;
