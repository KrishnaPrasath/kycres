import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Card, CardActionArea, CardMedia } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
 
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
  let active = props.active.length > 0 ? props.active[0] : props.active;
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{ active.title }</DialogTitle>
        <DialogContent>
        <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Movie Poster"
                    height="500"
                    image={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${active.poster_path}`}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
              </Card>
          <DialogContentText id="alert-dialog-slide-description">
            <h3>OverView</h3>
            <p>
              {active.overview}
            </p>
            <hr></hr>
            <h3>Rating : {active.vote_average}</h3> 
            <h3>Release Date : {active.release_date}</h3> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
