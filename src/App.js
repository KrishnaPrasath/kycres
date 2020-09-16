import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import SpacingGrid from './components/sGrid';
import { MovieProvider } from './contexts/MovieContext';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <>
      <MovieProvider>
        <SearchAppBar/>
        <Route exact path="/" component={() => (<Redirect to='/moviecart' />)} />
        <Route component={SpacingGrid} path="/moviecart"/>
      </MovieProvider>
    </>
    </Router>
  );
}

export default App;
