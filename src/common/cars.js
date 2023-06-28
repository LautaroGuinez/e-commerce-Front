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
      <div
        style={{
          display: "flex",

          height: "80vh",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Table
          style={{
            width: "80%",
            border: "3px solid #00a9e0",
            backgroundColor: "#DEFFFF",
          }}
        >
          <TableHead style={{ border: "3px solid #00a9e0" }}>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>Precio Unitario</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Precio Final</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carrito.map((product) => (
              <TableRow
                key={product.id}
                style={{ border: "3px solid #00a9e0" }}
              >
                <TableCell>
                  <img src={product.image} height={"25px"} width={"25px"}></img>
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
                  <Button onClick={() => handleSumarCantidad(product.id)}>
                    +
                  </Button>
                  <Button onClick={() => handleRestarCantidad(product.id)}>
                    -
                  </Button>
                  <Button onClick={() => handleEliminarProducto(product.id)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}{" "}
            <TableRow>
              <TableCell colSpan={3} align="right">
                Precio Total:
              </TableCell>
              <TableCell>{calcularPrecioTotal()}</TableCell>
              <TableCell>
                <Button>Comprar</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
export default Cars;


