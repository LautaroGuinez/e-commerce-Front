import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import { setUser, userInitialState } from "../state/user";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const DeleteProfile = () => {
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const dataUser = await axios.get(
        `http://localhost:3001/api/users/${user.email}`
      );
      const id = String(dataUser.data.id);
      const response = await axios.delete(
        `http://localhost:3001/api/users/delete/${id}`
      );
      console.log(response);
    } catch (error) {}
    dispatch(setUser(userInitialState));
    navigate("/");
    handleClose();
  };

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "50vh" }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            This action is irreversible. Are you sure to delete your account?
          </Typography>

          <Button variant="contained" color="secondary" onClick={handleOpen}>
            Delete Profile
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your profile? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteProfile;
