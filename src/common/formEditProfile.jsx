import React, { useState } from "react";

import { TextField, Button, Grid, Paper } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../state/user";
import { useNavigate } from "react-router";

const EditProfileForm = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updatedUser = {
      name: name,
      lastName: lastName,
      email: email,
    };
    await onSave(updatedUser);
    dispatch(setUser(updatedUser));
    navigate("/myAcount");
  };

  const onSave = async (userEdit) => {
    const dataUser = await axios.get(
      `http://localhost:3001/api/users/${user.email}`
    );
    const id = String(dataUser.data.id);
    const response = await axios.put(
      `http://localhost:3001/api/users/edit/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        data: userEdit,
      }
    );
    return response;
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
