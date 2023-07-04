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

const DeleteProfile = ({ onDelete }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    //onDelete();
    //pedido al back para eliminar user
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