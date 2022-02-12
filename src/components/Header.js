import React, { useContext } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { CurrentUserContext } from "../contexts/CurrentUser";

function Header({ toggleMenu, isMobile }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={isMobile ? "fixed" : "static"}>
        <Toolbar component={Container}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleMenu}
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              pr: 2,
              pl: { xs: 2, sm: 0 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Jav's NC Games
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="caption"
              sx={{
                mr: 2,
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
              }}
            >
              {currentUser.name}
            </Typography>
            <Avatar
              src={currentUser.avatar_url}
              alt={`${currentUser.name} avatar`}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
