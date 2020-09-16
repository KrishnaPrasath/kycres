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
        <Route exact path="/" component={() => (<Redirect to='/MovieCart' />)} />
        <Route component={SpacingGrid} path="/MovieCart"/>
      </MovieProvider>
    </>
    </Router>
  );
}

export default App;
