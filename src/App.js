import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/employees' component={Employees} />
        <Route path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
