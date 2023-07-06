import React from "react";
import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: "grey",
  color: "white",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    outline: "3px solid #2be01f ", // Cambia el valor para ajustar el grosor del borde
  },
}));

const AllproductsCard = (prop) => {
  return (
    <StyledCard>
      <div className="posterContainer">
        <img src={prop.imgUrl} alt="Product Image" className="poster" />
      </div>
      <CardContent>
        <p className="title">{prop.name}</p>
      </CardContent>
    </StyledCard>
  );
};

export default AllproductsCard;




