import React, { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post("http://localhost:3001/api/users/register", {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      });
      console.log("Usuario creado", user);
      navigate("/login");
    } catch (error) {
      console.log("No se pudo crear el usuario:", error);
    }
  };

  console.log(name, "name");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            id="outlined-required"
            label="Last Name"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div>
          <Button
            type="submit"
            style={{ marginLeft: "90px", marginTop: "15px" }}
            variant="contained"
          >
            Register
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Register;
