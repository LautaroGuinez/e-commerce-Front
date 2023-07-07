import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import Button from "@mui/material/Button";
import axios from "axios";
import "../../src/styles/productsCar.css";
import { addToCars } from "../state/cars";
import imageNotFound from "../assest/image_not_found.jpg";

const ProductCards = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const handleAddItem = (product) => {
    dispatch(addToCars(product));
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

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3001/api/products/delete/${id}`);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="conteinerProducts">
        <Card className="card">
          <CardActionArea component={Link} to={`/product/${product.id}`}>
            <CardContent className="cardContend">
              <div>
                <h2>{product.name}</h2>
                <img src={product.imgUrl || imageNotFound} alt={product.name} />
              </div>
              <div>
                <p className="description">{product.description} </p>
                <p className="price">PRICE</p>
                <p className="productPrice">{product.price}</p>

                <Button
                  onClick={() => handleAddItem({ ...product })}
                  variant="contained"
                >
                  Add To Car
                </Button>
                <Button
                  component={Link}
                  to={`/${id}/edit-product`}
                  variant="contained"
                >
                  Edit
                </Button>
                <Button
                  type="submit"
                  onClick={handleDelete}
                  variant="contained"
                >
                  Delete
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
