import { Movie } from '@material-ui/icons';
import React from 'react';
import MovieCard from './MovieCard';
import { useMovies } from '../contexts/MovieContext';

export default function Wrapper(){
    const movies = useMovies();
    return(
        <>  
            {
                movies.map(movie=>{
                    return(
                        <MovieCard />
                    )
                })
            }
            
        </>
    );
};

