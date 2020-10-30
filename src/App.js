import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Blog from './Components/Pages/Blog/Blog';
import Project from './Components/Pages/Project/Project';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import Intro from './Components/Pages/Intro/Intro';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/project">
          <Project></Project>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/intro">
          <Intro></Intro>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
