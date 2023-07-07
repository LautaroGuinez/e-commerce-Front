import * as React from "react";
import { useSelector } from "react-redux";

import "../styles/cars.css";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const CardProfileAdmin = () => {};

const CardProfileUser = () => {
  const cars = useSelector((state) => state.cars);
  console.log(cars.id);

  const calcularPrecioTotal = () => {
    let total = 0;

    cars.cars.forEach((product) => {
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
            {cars.cars.map((product) => (
              <TableRow key={product.id} className="border">
                <TableCell>
                  {/* <img src={product.image} height={"25px"} width={"25px"}></img> */}
                  {product.name}
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  {product.quantity > 0 ? product.quantity : 0}
                </TableCell>
                <TableCell>
                  {(product.price * product.quantity).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3} align="right">
                Total price:
              </TableCell>
              <TableCell>{calcularPrecioTotal()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

const TableCardProfile = () => {
  const user = useSelector((state) => state.user);
  return user.admin ? <CardProfileAdmin /> : <CardProfileUser />;
};
export default TableCardProfile;
