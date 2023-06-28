import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
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
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Last Name"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <div>
          <Button
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
