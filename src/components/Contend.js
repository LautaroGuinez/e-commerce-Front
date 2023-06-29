import React from "react";
import fakedata from "../utils/fakeData";
import AllproductsCard from "../common/allProductsCard";

import "../styles/contend.css";

const Contend = ({ product }) => {
  return (
    <div className="products">
      {product.map((product, index) => (
        <AllproductsCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Contend;
