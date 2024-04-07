import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import altImage from "../../../../public/altworldIcon.png"
import Image from 'next/image';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container sx={{backgroundColor:"#f8f9fa"}} maxWidth="xl">
        <Toolbar disableGutters>
        <Image src={altImage} width={20} alt="HelloImg" height={20} />

          <Typography
            // variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
            //   mr: 2,
              display: { xs: "none", md: "flex" },
            //   fontFamily: "monospace",
            //   letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              fontSize: "14px",
              marginLeft:"5px"
            }}
          >
            Hi, AltWorld
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
