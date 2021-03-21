import { makeStyles, Theme, ThemeProvider } from "@material-ui/core";
import * as React from "react";
import Home from "../src/components/Home";

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    marginTop: theme.spacing(12),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return <Home className={classes.body} />;
};

export default HomePage;
