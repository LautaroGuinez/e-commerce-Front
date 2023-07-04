import React, { useState } from "react";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUser } from "../state/user";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
      <form onSubmit={handleLoginSubmit}>
        <Stack spacing={2} direction="row">
          <Box>
            <div>
              <TextField
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                id="outlined-required"
                label="Email"
                defaultValue=""
              />
            </div>
            <br />
            <div>
              <TextField
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                id="outlined-required"
                label="Password"
                defaultValue=""
                type="password"
              />
            </div>
          </Box>
          <Button type="submit" variant="contained">
            LOGIN
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Login;
