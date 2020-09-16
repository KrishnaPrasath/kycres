import React, { useContext, useEffect, useState, createContext } from 'react';

const MovieContext = createContext();
const MovieFilterContext = createContext();
const MovieHoverContext = createContext();
const PopContext = createContext();
const DetailContext = createContext();

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

export function useDetail(){
    return useContext(DetailContext);
}

export function MovieProvider({children}){

    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [pop, setPop] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState([]);

    const filterMovies = (search_str) => {
        let filtMovies = movies.filter( movie => movie.title.toLowerCase().includes(search_str) );
        return search_str.length > 0 ? setFilteredMovies([...filtMovies]) : setFilteredMovies([...movies]);
    }

    
    const handleHoverIn = (key) => { 
        setPop( pop => !pop );
     }

     const handleClickOpen = (id) => {
        setActive(()=> movies.filter(movie => movie.id === id));
        setOpen(true);
    };

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
                        <DetailContext.Provider value={ [open, handleClickOpen, active] }>
                            {children}
                        </DetailContext.Provider>
                    </PopContext.Provider>
                </MovieHoverContext.Provider>
            </MovieFilterContext.Provider>
        </MovieContext.Provider>
    )
}

