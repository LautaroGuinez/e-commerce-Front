import React from "react";
import fakedata from "../utils/fakeData";
import AllproductsCard from "../common/allProductsCard";

import "../styles/contend.css";

const Contend = () => {
  const productos = fakedata();
  return (
    <div className="products">
      {productos.map((product, index) => (
        <AllproductsCard key={index} {...product} />
      ))}
    </div>
  );
};

export default Contend;
