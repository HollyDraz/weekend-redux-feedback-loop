import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router> 
        <Route exact path="/">
          <Feeling/>
        </Route>
        <Route exact path='/Understanding'>
          <Understanding/>
        </Route>
        <Route exact path="/Support">
          <Support/>
        </Route>
        <Route exact path="/Comments">
          <Comments/>
        </Route>
        <Route exact path='/review'>
          <Review/>
        </Route>
        <Route exact path='/thanks'>
          <Thanks/>

        </Route>

      </Router>
    </div>
  );
}

export default App;
