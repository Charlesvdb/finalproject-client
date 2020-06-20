import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Allchallenges from "./pages/Allchallenges"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Friends from './pages/Friends';
import Startchallenge from './pages/Startchallenge';
import Challengedetail from './pages/Challengedetail';
import About from './pages/About';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="App">

    <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/allchallenges" component={Allchallenges} />
          <Route path="/friends" component={Friends} />
          <Route path="/startchallenge" component={Startchallenge} />
          <Route path="/challengedetail/:id" component={Challengedetail}/>
          <Route path="/about" component={About} />
          <Route path="/todo" component={Todo} />
    </Switch>

    </div>
  );
}

export default App;
