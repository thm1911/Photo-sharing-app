import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar() {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          Phan Thị Hồng Thắm
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
