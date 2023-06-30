import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import fakeData from "../utils/fakeData";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import "../styles/cars.css";
import { Link } from "react-router-dom";

const Cars = () => {
  // prueba con fake date
  const [carrito, setCarrito] = React.useState(fakeData());

  //hacer la funcionalidad de sumar cantidad
  const handleSumarCantidad = (productId) => {};
  //hacer la funcionalidad de restar cantidad

  const handleRestarCantidad = (productId) => {};
  //hacer la funcionalidad de eliminar cantidad

  const handleEliminarProducto = (productId) => {};
  //funcionalidad de sumar el total

  const calcularPrecioTotal = () => {
    let total = 0;

    carrito.forEach((product) => {
      total += product.price * product.quantity;
    });



    return total.toFixed(2);
  };

  return (
    <>
      <div className="conteiner"

      >
        <Table
         className="table"
        >
          <TableHead  >
            <TableRow >
              <TableCell >Product</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Units</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {carrito.map((product) => (
              <TableRow
                key={product.id}
                className="border"
              >
                <TableCell >
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
                <TableCell ><Stack direction="row" spacing={2}>
                  <Button onClick={() => handleSumarCantidad(product.id)} variant="contained">
                    +
                  </Button>
                  <Button onClick={() => handleRestarCantidad(product.id)} variant="contained">
                    -
                  </Button>
                  <Button onClick={() => handleEliminarProducto(product.id)} variant="contained">
                    Delete
                  </Button>  </Stack>
                </TableCell>
              </TableRow>
            ))}{" "}
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
      </div>
    </>
  );
};
export default Cars;


