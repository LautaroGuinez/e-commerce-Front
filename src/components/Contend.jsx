import React from "react";

import AllproductsCard from "../common/allProductsCard";
import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

import AllproductsCard from "../common/allProductsCard";

import "../styles/contend.css";

const Contend = ({ product }) => {
  return (
    <div className="products">
      {product.map((product, index) => (
        <Link to={`/product/${product.id}`}>
          <AllproductsCard key={index} {...product} />

          <AllproductsCard key={index} {...product} />
        </Link>
      ))}
    </div>
  );
};

export default Contend;
