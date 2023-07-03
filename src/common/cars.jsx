import * as React from "react";
import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";
import "../styles/cars.css";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";

const Cars = () => {

  //hacer la funcionalidad de sumar cantidad
  const handleSumarCantidad = (productId) => {};
  //hacer la funcionalidad de restar cantidad

  const handleRestarCantidad = (productId) => {};
  //hacer la funcionalidad de eliminar cantidad

  const handleEliminarProducto = (productId) => {};
  //funcionalidad de sumar el total

  const calcularPrecioTotal = () => {
    let total = 0;


    cars.cars.forEach((product) => {

      total += product.price * product.quantity;
    });

    return total.toFixed(2);
  };

  const cars = useSelector((state) => state.cars);
console.log(cars)
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
                    {product.quantity > 0 ? product.quantity : 1}
                  </TableCell>
                  <TableCell>
                    {(product.price * product.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={2}>
                      <Button
                        onClick={() => handleSumarCantidad(product.id)}
                        variant="contained"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => handleRestarCantidad(product.id)}
                        variant="contained"
                      >
                        -
                      </Button>
                      <Button
                        onClick={() => handleEliminarProducto(product.id)}
                        variant="contained"
                      >
                        Delete
                      </Button>{" "}
                    </Stack>
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
          <p>Empty cart</p>
        )}

      </div>
    </>
  );
};
export default Cars;
