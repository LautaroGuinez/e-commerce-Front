import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Avatar, Typography, Grid, Paper } from "@mui/material";
import EditProfileForm from "./formEditProfile";
import DeleteProfile from "./formDeleteProfile";
const myAcount = ({ user }) => {
  const [edit, setEdit] = useState(<></>);
  const handleEditProfile = () => {
    return setEdit(<EditProfileForm />);
  };
  const handleDeleteProfile = () => {
    return setEdit(<DeleteProfile />);
  };
  return (
    <>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar src={"user.avatar"} alt={"user.name"} />
          </Grid>
          <Grid item>
            <Typography variant="h4">fg0016444@gmail.com</Typography>
            <Typography variant="subtitle1">Fernando</Typography>
            <Typography variant="body1">Gutierrez</Typography>
          </Grid>
        </Grid>
      </Paper>
      <IconButton onClick={handleEditProfile}>Edit Profile</IconButton>
      <IconButton onClick={handleDeleteProfile}>Delete Profile</IconButton>
      <>{edit}</>
    </>
  );
};
export default myAcount;
