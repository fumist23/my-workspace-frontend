import { makeStyles, Theme, ThemeProvider, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

const useStyles = makeStyles(() => ({
  appBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "64px",
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6">{"satofumi ワークスペース"}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
