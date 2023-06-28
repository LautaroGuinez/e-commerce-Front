import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Login = () => {
  console.log("hola soy login");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Stack spacing={2} direction="row">
          <Box>
            <div>
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue=""
              />
            </div>
            <br />
            <div>
              <TextField
                required
                id="outlined-required"
                label="Pasworld"
                defaultValue=""
                type="password"
              />
            </div>
          </Box>
          <Button variant="contained">LOGIN</Button>
        </Stack>
      </div>
    </>
  );
};
export default Login;
