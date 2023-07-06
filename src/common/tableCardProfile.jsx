import * as React from "react";
import cart from "../assest/cart.png";
import { Link } from "react-router-dom";
import "../styles/cars.css";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

const TableCardProfile = () => {
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
        {cars.cars && cars.cars.length > 0 ? (
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
                <TableCell>
                  <Link to="/puchease">
                    <Button variant="contained">To pay</Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        ) : (
          <Box textAlign="center">
            <img src={cart} alt="fd" />
            <p>Start a shopping cart!</p>

            <Button component={Link} to="/">
              home
            </Button>
          </Box>
        )}
      </div>
    </>
  );
};
export default TableCardProfile;
