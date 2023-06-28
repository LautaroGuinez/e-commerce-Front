import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import "../../src/styles/productsCar.css";

const ProductCards = (props) => {
  const data = {
    id: 1,
    description:
      "This is a description of the Tablet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla nulla et mi dignissim dignissim. Nulla consequat turpis id purus lobortis dapibus. Morbi luctus risus ut turpis pharetra, ac venenatis ipsum volutpat. Proin id volutpat elit, eu aliquet lacus. Vestibulum luctus leo et diam dapibus aliquet. Quisque lacinia cursus justo, eu eleifend ex aliquet non. Donec in efficitur elit, in euismod mi. Sed dapibus purus id lobortis pulvinar. Aenean ut varius mauris. Nullam quis varius leo, nec luctus lectus. Nunc fringilla justo sed arcu faucibus, sed lobortis orci volutpat. Cras vitae lectus quis tellus mattis feugiat. Vivamus convallis mauris non sapien laoreet, sed convallis est fringilla. Sed nec turpis ac elit euismod rhoncus a et dui.",
    imgUrl:
      "https://www.perozzi.com.ar/20842-thickbox_default/aoc-tv-led-43-le43s5295-77g-smart-tv-full-hd-sintonizador-tda-013074162.jpg",
    name: "Tablet",
    price: "200.12",
  };

  return (
    <div>
      <div className="conteinerProducts">
        <Card className="card">
          <CardActionArea component={Link} to={`/product/${data.id}`}>
            <CardContent className="cardContend">
              <div>
                <h2>{data.name}</h2>
                <img src={data.imgUrl} alt={data.name} />
              </div>
              <div>
                <p className="description">{data.description} </p>
                <p className="price">PRICE</p>
                <p className="dataPrice">{data.price}</p>
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
