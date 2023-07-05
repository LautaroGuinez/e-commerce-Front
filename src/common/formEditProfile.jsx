import React, { useState } from "react";

import { TextField, Button, Grid, Paper } from "@mui/material";

const user = {
  name: "fer",
  lastName: "gutierrez",
  email: "fer@gmail.com",
};
const onSave = () => {};

const EditProfileForm = () => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [lastName, setLastName] = useState(user.lastName);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedUser = {
      name: name,
      lastName: lastName,
      email: email,
    };

    onSave(updatedUser);
  };

  return (
    <Paper elevation={3} style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={handleNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={handleLastNameChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default EditProfileForm;
