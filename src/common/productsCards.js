import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import axios from "axios";
import "../../src/styles/productsCar.css";
import { addItem } from "../state/cars";

const ProductCards = (props) => {
  const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

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
                <Button
                  onClick={() => handleAddItem(...product)}
                  variant="contained"
                >
                  Add To Car
                </Button>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default ProductCards;
