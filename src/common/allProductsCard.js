import React from "react";
import "../styles/allproductos.css";

const AllproductsCard = (prop) => {
  return (
    <div className="cardContainer">
      <div className="posterContainer">
        <img src={prop.image} alt="Product Image" className="poster" />
      </div>
      <div className="nameContainer">
        <p className="title">{prop.name}</p>
      </div>
    </div>
  );
};

export default AllproductsCard;
