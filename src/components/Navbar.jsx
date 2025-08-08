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
  ListItemIcon,
  ListItemText,
  Divider,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// --- Icons for the Research Dropdown ---
import DnsIcon from "@mui/icons-material/Dns"; // Systems and Sensing
import ShareIcon from "@mui/icons-material/Share"; // Network Science and ML
import TranslateIcon from "@mui/icons-material/Translate"; // Natural Language Processing
import LanguageIcon from "@mui/icons-material/Language"; // Web and Social

// --- Navigation Structure ---
const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Research",
    path: "/research", // Base path for highlighting
    subItems: [
      {
        label: "Systems and Sensing",
        path: "/research/systems-sensing",
        icon: <DnsIcon />,
      },
      {
        label: "Network Science and ML",
        path: "/research/network-ml",
        icon: <ShareIcon />,
      },
      {
        label: "Natural Language Processing",
        path: "/research/nlp",
        icon: <TranslateIcon />,
      },
      {
        label: "Web and Social",
        path: "/research/web-social",
        icon: <LanguageIcon />,
      },
    ],
  },
  { label: "News and Updates", path: "/news" },
  { label: "Datasets", path: "/datasets" },
  { label: "Reading Group", path: "/reading-group" },
  { label: "People", path: "/people" },
  { label: "Social", path: "/social" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // For desktop dropdown
  const [researchSubMenuOpen, setResearchSubMenuOpen] = useState(false); // For mobile dropdown
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileSubMenuToggle = () => {
    setResearchSubMenuOpen(!researchSubMenuOpen);
  };

  // Function to close drawer AND mobile submenu
  const closeDrawerAndSubMenu = () => {
    setMobileOpen(false);
    setResearchSubMenuOpen(false); // Close submenu on drawer close
  };

  const open = Boolean(anchorEl);

  // --- Mobile Drawer ---
  const drawer = (
    // **** FIX: Removed onClick={handleDrawerToggle} from this Box ****
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        6Sigma
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => {
          if (!item.subItems) {
            return (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.path}
                  sx={{ textAlign: "left" }}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            );
          } else {
            // Render dropdown item for mobile
            return (
              <React.Fragment key={item.label}>
                <ListItemButton onClick={handleMobileSubMenuToggle}>
                  <ListItemText primary={item.label} />
                  {researchSubMenuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={researchSubMenuOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItemButton
                        key={subItem.label}
                        component={RouterLink}
                        to={subItem.path}
                        sx={{ pl: 4 }}
                        onClick={handleDrawerToggle}
                      >
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText primary={subItem.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <AppBar component="nav" elevation={0} sx={{ backgroundColor: "#f0f8ff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#333" }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", color: "#333" }}
            >
              6Sigma
            </Typography>
          </Box>

          {/* --- Desktop Navbar --- */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => {
              const isActive =
                location.pathname.startsWith(item.path) && item.path !== "/";
              const isHomeActive = location.pathname === "/";

              if (!item.subItems) {
                return (
                  <Button
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color:
                        (item.path === "/" && isHomeActive) ||
                        (item.path !== "/" && isActive)
                          ? "primary.main"
                          : "#333",
                      fontWeight:
                        (item.path === "/" && isHomeActive) ||
                        (item.path !== "/" && isActive)
                          ? "bold"
                          : "normal",
                      mx: 1,
                    }}
                  >
                    {item.label}
                  </Button>
                );
              } else {
                return (
                  <React.Fragment key={item.label}>
                    <Button
                      aria-controls={open ? "research-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleMenuOpen}
                      sx={{
                        color: isActive ? "primary.main" : "#333",
                        fontWeight: isActive ? "bold" : "normal",
                        mx: 1,
                      }}
                    >
                      {item.label}
                    </Button>
                    <Menu
                      id="research-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleMenuClose}
                      MenuListProps={{ "aria-labelledby": "research-button" }}
                    >
                      {item.subItems.map((subItem) => (
                        <MenuItem
                          key={subItem.label}
                          onClick={handleMenuClose}
                          component={RouterLink}
                          to={subItem.path}
                        >
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          {subItem.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                );
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>

      {/* --- Mobile Drawer Component --- */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          // The onClose prop handles closing the drawer when clicking the backdrop
          onClose={closeDrawerAndSubMenu}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 280 },
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
