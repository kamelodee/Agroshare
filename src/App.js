import React from 'react';
import './App.css';
import Home from './pages/Home'
import Register from './pages/Register'

import Error from './pages/Error'
import {Route,Switch} from 'react-router-dom'
import Navbar from './component/Navbar'
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/register/" component={Register}/>
     
     <Route component={Error}/>
     </Switch>
    </>
  );
}

export default App;
