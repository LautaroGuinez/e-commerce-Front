import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@mui/material";

const CustomTextField = withStyles((theme) => ({
  root: {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2be01f",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
  },
}))(TextField);

const Purchase = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3001/api/users/${user.email}`);
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Grid container>
        <Card
          style={{
            maxWidth: 450,
            padding: "20px 5px",
            margin: "0 auto",
            backgroundColor: "#141519", // Cambia el color de fondo a gris
          }}
        >
          <h1 style={{ textAlign: "center", color: "#2be01f" }}>Checkout</h1>
          <CardContent>
            <Box onSubmit={handleSubmit} component="form">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="Number"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>
                {/*    <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="Holder name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid> */}
                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="Expiration date"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="CVV"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    multiline
                    maxRows={4}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{
                      background: "#2be01f",
                      "&:hover": {
                        background: "#7200ff",
                      },
                    }}
                    type="submit"
                    variant="contained"
                    fullWidth
                  >
                    Confirm buy
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Purchase;
