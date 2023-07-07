import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Avatar, Typography, Grid, Paper } from "@mui/material";
import EditProfileForm from "./formEditProfile";
import DeleteProfile from "./formDeleteProfile";
import { useSelector } from "react-redux";
import TableCardProfile from "./tableCardProfile";
import Button from "@mui/material/Button";

const MyAccount = () => {
  const [edit, setEdit] = useState(<TableCardProfile />);
  const user = useSelector((state) => state.user);
  const handleEditProfile = () => {
    setEdit(<EditProfileForm />);
  };

  const handleDeleteProfile = () => {
    setEdit(<DeleteProfile />);
  };

  const handleMyCarts = () => {
    setEdit(<TableCardProfile />);
  };
  return (
    <>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUXPUoTSTt7sgAd5gUmiJmkGK0GfSKOxO7Bg&usqp=CAU"
              }
              alt={"bzrp"}
            />
          </Grid>
          <Grid item>
            <Typography variant="h4">{user.name}</Typography>
            <Typography variant="h4">{user.lastname}</Typography>
            <Typography variant="subtitle1">{user.email}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Button
        onClick={handleMyCarts}
        variant="contained"
        color="success"
        style={{
          backgroundColor: "limegreen",
        }}
      >
        Shopping cart
      </Button>
      <Button color="secondary" onClick={handleEditProfile}>
        Edit Profile
      </Button>
      <Button variant="outlined" color="error" onClick={handleDeleteProfile}>
        Delete Profile
      </Button>

      {edit}
    </>
  );
};

export default MyAccount;
