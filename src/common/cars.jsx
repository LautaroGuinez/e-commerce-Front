import * as React from "react";
import Stack from "@mui/material/Stack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import cart from "../assest/cart.png";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { removeToCars, addQuantity, subtractQuantity } from "../state/cars";

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);

  const handleSumarCantidad = (product) => {
    dispatch(addQuantity(product));
  };

  const handleRestarCantidad = (product) => {
    dispatch(subtractQuantity(product));
  };

  const handleEliminarProducto = (product) => {
    dispatch(removeToCars(product));
  };

  const calcularPrecioTotal = () => {
    let total = 0;

    cars.cars.forEach((product) => {
      total += product.price * product.quantity;
    });

    return total.toFixed(2);
  };
  const local = localStorage.getItem("reduxState");
  return (
    <Box textAlign="center" p={3}>
      {cars.cars && cars.cars.length > 0 && local ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Units</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cars.cars.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  {(product.price * product.quantity).toFixed(2)}
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Button
                      onClick={() => handleSumarCantidad(product)}
                      variant="contained"
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => handleRestarCantidad(product)}
                      variant="contained"
                    >
                      -
                    </Button>
                    <Button
                      onClick={() => handleEliminarProducto(product)}
                      variant="contained"
                    >
                      Delete
                    </Button>
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
                <Button
                  component={Link}
                  to="/checkout"
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                >
                  To pay
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      ) : (
        <Box>
          <img src={cart} alt="fd" />
          <Typography variant="subtitle1">Start a shopping cart!</Typography>
          <Button component={Link} to="/" variant="contained">
            Home
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Cars;
