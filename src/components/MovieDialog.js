import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Card, CardActionArea, CardMedia } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Movie } from '@material-ui/icons/';
import { useDetail } from '../contexts/MovieContext'
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function AlertDialogSlide(props) {
  const classes = useStyles();
  const [open, handleClickOpen, active] = useDetail();
  let current = active.length > 0 ? active[0] : active;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        
        <DialogTitle id="alert-dialog-slide-title"><Movie/>  { current.title }</DialogTitle>
        <DialogContent>
        <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Movie Poster"
                    height="500"
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${current.poster_path}`}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
          <DialogContentText id="alert-dialog-slide-description">
            <h3>OverView</h3>
            <p>
              {current.overview}
            </p>
            <hr></hr>
            <h3>Rating : {current.vote_average}</h3> 
            <h3>Release Date : {current.release_date}</h3> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/">
            <Button color="primary">
              Close
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}
