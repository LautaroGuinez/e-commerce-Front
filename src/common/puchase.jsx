import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const purchase = function () {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "75px",
        }}
      >
        <img
          src="https://www.shutterstock.com/image-vector/thank-you-your-order-neon-600w-1601202340.jpg"
          alt="Imagen de compra"
          style={{
            width: "400px",
            height: "800px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/">
          <Button variant="contained">Home</Button>
        </Link>
        <Link to="/search">
          <Button variant="contained">Continue shopping</Button>
        </Link>
      </div>
    </>
  );
};

export default purchase;
