import React from "react";
import { Link } from "react-router-dom";
import AllproductsCard from "../common/allProductsCard";

import "../styles/contend.css";

const Contend = ({ product }) => {
  return (
    <div className="products">
      {product.map((product, index) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <AllproductsCard {...product} />
        </Link>
      ))}
    </div>
  );
};

export default Contend;
