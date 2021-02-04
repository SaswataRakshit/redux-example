import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SongList from './Component/Song/SongList'
import SongSelect from './Component/Song/SongSelect'
import Calculator from './Component/Calculation/Calculator'
import Result from './Component/Calculation/Result'
import Posts from './Component/Posts/Posts'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div style={{ display: 'flex' }}>
            <SongList />
            <SongSelect />
          </div>
        </Route>
        <Route exact path="/calculator">
          <Result />
          <Calculator />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
