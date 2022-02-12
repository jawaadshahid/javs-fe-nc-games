import {
  AppBar,
  Box,
  Container,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

function SiteNav({ menuOpen, setMenuOpen, isMobile }) {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Reviews", link: "/reviews" },
  ];
  const closeMenu = () => {
    setMenuOpen(false);
  };
  if (isMobile) {
    return (
      <Drawer anchor="top" open={menuOpen} onClose={closeMenu}>
        <Box>
          <List>
            {menuItems.map(({ label, link }) => {
              return (
                <ListItem
                  key={label}
                  button
                  component={Link}
                  onClick={closeMenu}
                  href={link}
                >
                  <ListItemText primary={label} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    );
  } else {
    return (
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters sx={{ mx: -2 }}>
            {menuItems.map(({ label, link }) => {
              return (
                <MenuItem key={label} component={Link} href={link}>
                  <Typography>{label}</Typography>
                </MenuItem>
              );
            })}
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default SiteNav;
