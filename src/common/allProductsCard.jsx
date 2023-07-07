import React from "react";
import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import imageNotFound from "../assest/image_not_found.jpg";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: "#181a1b",
  color: "white",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    outline: "5px solid #2be01f ", // Cambia el valor para ajustar el grosor del borde
  },
}));

const AllproductsCard = (prop) => {
  return (
    <StyledCard>
      <div className="posterContainer">
        <img
          src={prop.imgUrl || imageNotFound}
          alt="Product Image"
          className="poster"
        />
      </div>
      <CardContent>
        <p className="title">{prop.name}</p>
      </CardContent>
    </StyledCard>
  );
};

export default AllproductsCard;
