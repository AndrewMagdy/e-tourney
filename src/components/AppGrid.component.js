import React from "react";
import Grid from "@material-ui/core/Grid";
import Backdrop from "@material-ui/core/Backdrop";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  appChildren: {
    margin: theme.spacing(3, 1, 1)
  }
}));

const AppGrid = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6">E Tourney</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.appChildren}>{children}</div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Backdrop open={true} />
      </Grid>
    </div>
  );
};

export default AppGrid;
