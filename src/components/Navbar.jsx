import React, { useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Faculty", path: "/faculty" },
  { label: "Research", path: "/research" },
  { label: "Admissions", path: "/admissions" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        Techno India
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                sx={{
                  textAlign: "center",
                  backgroundColor: isActive ? "primary.main" : "transparent",
                  color: isActive ? "white" : "inherit",
                  "&:hover": {
                    backgroundColor: isActive ? "primary.dark" : "action.hover",
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
          color: "#212529",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <SchoolIcon sx={{ mr: 1, color: "primary.main" }} />
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Techno India University
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: isActive ? "primary.main" : "inherit",
                    fontWeight: isActive ? "bold" : "normal",
                    position: "relative",
                    transition: "color 0.2s ease-in-out",
                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      transform: "scaleX(0)",
                      height: "2px",
                      bottom: 0,
                      left: 0,
                      backgroundColor: "primary.main",
                      transformOrigin: "bottom right",
                      transition: "transform 0.25s ease-out",
                    },
                    ...(isActive && {
                      "&::after": {
                        transform: "scaleX(1)",
                        transformOrigin: "bottom left",
                      },
                    }),
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Toolbar />
    </Box>
  );
}

export default Navbar;
