import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import Wrapper from './components/Wrapper';
import AuotGrid from './components/Grid';
import SpacingGrid from './components/sGrid';
import { MovieProvider } from './contexts/MovieContext';
import { Grade } from '@material-ui/icons';

function App() {
  return (
    <>
      <MovieProvider>
        <SearchAppBar/>
        {/* <Wrapper/> */}
        <SpacingGrid/>
      </MovieProvider>
    </>
  );
}

export default App;
