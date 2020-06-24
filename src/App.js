import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';
import Employee from './components/Employee';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/employees' component={Employees} />
        <Route exact path='/employees/:id' component={Employee} />
        <Route exact path='/' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
