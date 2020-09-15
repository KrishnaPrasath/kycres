import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Grid, Card, CardActionArea, CardMedia, Popover, Typography, Tooltip} from '@material-ui/core/';
import { useMovies, useHover, useUpdateHoverState } from '../contexts/MovieContext';
import AlertDialogSlide from './MovieDialog';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 200,
    width: 160,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const movies = useMovies();

  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState([]);

  const handleClickOpen = (id) => {
    setActive(()=> movies.filter(movie => movie.id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2} center alignItems="center" justify="center">
      <Grid item xs={8}>
        <Grid container justify="center" spacing={spacing}>
          {movies.map((movie) => (
            <Tooltip title={<>
            <h1>{movie.title}</h1>
            <p>Rating: { movie.vote_average }</p>
            </>}>
            <Grid key={movie.id} item>
              <Card className={classes.paper} onClick={()=>handleClickOpen(movie.id)} >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Movie Poster"
                    height="200"
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    title={movie.title}
                  />
                </CardActionArea>
              </Card>
              <AlertDialogSlide open={open} handleClose={handleClose} active={active}/>
            </Grid>
            </Tooltip>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

