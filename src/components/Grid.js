import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useMovies } from '../contexts/MovieContext';

const useStyles = makeStyles((theme) => ({
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
  const movies = useMovies();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {
            movies.map( movie => 
                <Grid item xs={2}>
                    <Paper className={classes.paper}>xs</Paper>
                </Grid>
            )
        }
      </Grid>
    </div>
  );
}


