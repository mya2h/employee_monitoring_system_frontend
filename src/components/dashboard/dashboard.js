import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Label from "./topLables";
import BarGraph from "./barGraph";
import Paper from "@material-ui/core/Paper";
import BarGraphFiles from './barGraphFiles'
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  all: {
    marginTop: theme.spacing(4),
  },
  title: {
    fontSize: "1.5rem",
    marginLeft: theme.spacing(3),
    lineHeight: "1.1",
    display: "flex",
    flexWrap: "wrap",
    color: "#1A2038",
  },
  graph: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
    padding: theme.spacing(4),
    width: "95%",
  },
}));
const GraphInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.all}>
      <h3 className={classes.title}>Dashboard</h3>
      <Label />
      <Paper className={classes.graph}>
      <Grid container >
        <Grid xs= {6}>
        <BarGraph />
        </Grid>
        <Grid xs={6}>
        <BarGraphFiles/>
        </Grid>
      </Grid>
      </Paper>
      {/* <LowerLabel /> */}
    </div>
  );
};
export default GraphInfo;
