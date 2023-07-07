import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { AppBar } from "@mui/material";
import Button from "@mui/material-next/Button";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setUser, userInitialState } from "../state/user";
import CategoryButton from "../common/category";
import GroupIcon from "@mui/icons-material/Group";
import ThemeProvider from "@mui/material";

/* 
Lo comentado va a servir para la funcionalidad despues
Verificar que esta en uso o no, y descartar o descomentar
*/

const pages = [];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleLogout = () => {
    axios
      .get("http://localhost:3001/api/users/logout", {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        credentials: "include",
      })
      .then((res) => res.data)
      .then(() => {
        dispatch(setUser(userInitialState));
        localStorage.removeItem("reduxState");
        handleMenuClose();
        navigate("/");
      });
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: " Lato, Helvetica Neue, helvetica, sans-serif",
              fontWeight: 700,
              letterSpacing: "0.1rem",
              color: "white",
              textDecoration: "none",
              "&:hover": {
                color: "white",
              },
            }}
          >
            VGAMER
          </Typography>
          <CategoryButton />
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          ></Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {pages.map((page, i) => (
              <Button
                key={page}
                color="inherit"
                component={Link}
                to={i === 0 ? "/movies" : "/tv"}
              >
                {page}
              </Button>
            ))}
          </Box>
          {user.admin == true ? (
            <IconButton
              sx={{
                "&:hover": {
                  background: "  #2be01f ",
                },
              }}
              size="large"
              aria-label="search"
              color="inherit"
              component={Link}
              to="/users"
            >
              <GroupIcon />
            </IconButton>
          ) : (
            <></>
          )}

          <IconButton
            sx={{
              "&:hover": {
                background: "  #2be01f ",
              },
            }}
            size="large"
            aria-label="search"
            color="inherit"
            component={Link}
            to="/search"
          >
            <SearchIcon />
          </IconButton>

          {user.email === null ? (
            <>
              <IconButton
                sx={{
                  "&:hover": {
                    background: "  #2be01f ",
                  },
                }}
                size="large"
                aria-label="account"
                color="inherit"
                onClick={handleMenuOpen}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={handleMenuClose}
                  to={"/register"}
                  component={Link}
                >
                  Crear cuenta
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  to={"/login"}
                  component={Link}
                >
                  Acceder
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <IconButton
                sx={{
                  "&:hover": {
                    background: "  #2be01f ",
                  },
                }}
                size="large"
                aria-label="search"
                color="inherit"
                component={Link}
                to="/cars"
              >
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    background: "  #2be01f ",
                  },
                }}
                size="large"
                aria-label="account"
                color="inherit"
                onClick={handleMenuOpen}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem to={"/myAcount"} component={Link}>
                  My Acount
                </MenuItem>
                <MenuItem onClick={handleLogout}>Sign off</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
