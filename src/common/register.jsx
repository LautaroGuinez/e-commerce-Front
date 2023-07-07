import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomTextField = styled((theme) => ({
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

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(
        "http://localhost:3001/api/users/register",
        {
          name: name,
          lastname: lastname,
          email: email,
          password: password,
        }
      );
      alert(`User ${user.data.name} ${user.data.lastname} create.`);
      navigate("/login");
    } catch (error) {
      alert("User allready exist");
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
          <h1 style={{ textAlign: "center", color: "#2be01f" }}>Register</h1>
          <CardContent>
            <Box onSubmit={handleSubmit} component="form">
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <CustomTextField
                    margin="normal"
                    required
                    fullWidth
                    label="Nombre"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                    value={name}
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
                    label="Apellido"
                    name="lastname"
                    autoComplete="lastname"
                    autoFocus
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
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
                    label="Correo electronico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
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
                    Register
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

export default Register;
