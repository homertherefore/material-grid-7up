import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>1xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>2xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>3xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>4xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>5xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>6xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>7xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
