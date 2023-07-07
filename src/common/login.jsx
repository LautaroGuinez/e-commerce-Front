import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../state/user";
import TextField from "@mui/material/TextField";
import { withStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        {
          email: loginEmail,
          password: loginPassword,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          credentials: "include",
        }
      );
      alert("Login successful");
      dispatch(setUser(response.data.payload));
      navigate("/");
      // Realiza las acciones necesarias después del inicio de sesión exitoso
    } catch (error) {
      alert("Could not login");
      // Maneja el error de inicio de sesión
    }
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
          <h1 style={{ textAlign: "center", color: "#2be01f" }}>Login</h1>
          <CardContent>
            <Box onSubmit={handleLoginSubmit} component="form">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="Correo electronico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setLoginEmail(e.target.value)}
                    value={loginEmail}
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
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    value={loginPassword}
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
                    Login
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

export default Login;
