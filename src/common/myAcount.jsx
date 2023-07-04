import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";

const myAcount = ({ user }) => {
  const handleOpenNavMenu = () => {
    console.log("click");
  };
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar src={""} alt={"user.name"} />
        </Grid>
        <Grid item>
          <Typography variant="h4">user.name</Typography>
          <Typography variant="subtitle1">Last Name: user.lastName</Typography>
          <Typography variant="subtitle1">Email: user.email</Typography>
          <Typography variant="subtitle1">
            Type User: superUser: administrador : cliente
          </Typography>
        </Grid>
      </Grid>
      <IconButton onClick={handleOpenNavMenu}>Edit Profile</IconButton>
    </>
  );
};
export default myAcount;
