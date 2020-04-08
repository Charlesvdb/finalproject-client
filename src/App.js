import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Allchallenges from "./pages/Allchallenges"
import Signup   from "./pages/Signup"

function App() {
  return (
    <div className="App">

    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allchallenges" component={Allchallenges} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={Signup} />
    </Switch>

    </div>
  );
}

export default App;
