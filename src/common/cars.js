import * as React from "react";
import { Link } from "react-router-dom";

import fakeData from "../utils/fakeData";
import "../styles/cars.css";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Cars = () => {
  // prueba con fake date
  const [carts, setCarts] = React.useState(fakeData());

  //hacer la funcionalidad de sumar cantidad
  const handleSumAmount = (productId) => {};
  //hacer la funcionalidad de restar cantidad

  const handleRestAmount = (productId) => {};
  //hacer la funcionalidad de eliminar cantidad

  const handleDeleteProduct = (productId) => {};
  //funcionalidad de sumar el total

  const calculateTotalPrice = () => {
    let total = 0;

    carts.forEach((product) => {
      total += product.price * product.quantity;
    });

    return total.toFixed(2);
  };

  return (
    <>
      <div className="conteiner">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Units</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((product) => (
              <TableRow key={product.id} className="border">
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  {product.quantity > 0 ? product.quantity : 1}
                </TableCell>
                <TableCell>
                  {(product.price * product.quantity).toFixed(2)}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Button
                      onClick={() => handleSumAmount(product.id)}
                      variant="contained"
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => handleRestAmount(product.id)}
                      variant="contained"
                    >
                      -
                    </Button>
                    <Button
                      onClick={() => handleDeleteProduct(product.id)}
                      variant="contained"
                    >
                      Delete
                    </Button>{" "}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}{" "}
            <TableRow>
              <TableCell colSpan={3} align="right">
                Total price:
              </TableCell>
              <TableCell>{calculateTotalPrice()}</TableCell>
              <TableCell>
                <Link to="/puchease">
                  <Button variant="contained">To pay</Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
export default Cars;
