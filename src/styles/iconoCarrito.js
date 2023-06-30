import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import React from "react";
import { Link } from "react-router-dom";

const iconoCarrito = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to={"/Cars"}>
        <ShoppingCartSharpIcon style={{ fontSize: 30, color: "black" }} />
      </Link>
    </div>
  );
};

export default iconoCarrito;
