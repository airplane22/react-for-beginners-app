import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import React from "react";


// HashRouter -> url : /#/movies
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



// render router 
// router = component looking url

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/movie'>
          <Detail/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
} // Switch - render one router

export default App;


