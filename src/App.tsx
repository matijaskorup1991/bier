import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AllBeers from './pages/AllBeers';
import Footer from './components/Footer';
import Beer from './pages/Beer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/allbeers' component={AllBeers} />
        <Route exact path='/allbeers/:id' component={Beer} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
