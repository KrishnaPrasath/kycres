import { Popover } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';

const MovieContext = React.createContext();
const MovieFilterContext = React.createContext();
const MovieHoverContext = React.createContext();
const PopContext = React.createContext();

export function useMovies(){
    return useContext(MovieContext);
}

export function useFilterMovies(){
    return useContext(MovieFilterContext);
}

export function useHover(){
    return useContext(MovieHoverContext);
}

export function useUpdateHoverState(){
    return useContext(PopContext);
}

export function MovieProvider({children}){

    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [pop, setPop] = useState(false);

    const filterMovies = (search_str) => {
        // console.log(search_str, movies);
        let filtMovies = movies.filter( movie => movie.title.toLowerCase().includes(search_str) );
        console.log(filtMovies)
        return search_str.length > 0 ? setFilteredMovies([...filtMovies]) : setFilteredMovies([...movies]);
    }

    
    const handleHoverIn = (key) => { 
        setPop( pop => !pop );
        console.log("pop");
        // return movies.filter( movie => movie.id === key  )
     }
    const handleHoverOut = () => {  }

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=3d485e84c7ae1856fb134fefd31ed2df&language=en-US&sort_by=popularity.desc&include_video=false&page=1")
        .then(response=>{
            if(response.ok){
                return response.json()
            }
        }).then(data=>{
            setMovies(movies => [...movies, ...data.results]);
            setFilteredMovies(movies => [...movies, ...data.results]);
        }).catch(err=>{
            console.log(err);
        })
    }, [])


    return(
        <MovieContext.Provider value={filteredMovies}>
            <MovieFilterContext.Provider value={filterMovies}>
                <MovieHoverContext.Provider value={handleHoverIn}>
                    <PopContext.Provider value={pop}>
                        {children}
                    </PopContext.Provider>
                </MovieHoverContext.Provider>
            </MovieFilterContext.Provider>
        </MovieContext.Provider>
    )
}

