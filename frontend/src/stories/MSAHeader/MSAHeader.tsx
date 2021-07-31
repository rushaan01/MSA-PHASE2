import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, createStyles, IconButton, Toolbar,makeStyles } from "@material-ui/core";
import { Button, Typography } from "@material-ui/core";

const useStyles=makeStyles(createStyles({
    root:{

    },
    menuButton:{


    },
    title:{

    },
}));


export default function MSAHeader() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">News</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}