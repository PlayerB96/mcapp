import React from 'react';
import Login from './components/login/login';
import Registro from './components/registro/registro';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route path="/login" component={Login}/>
        <Route path="/registro" component={Registro}/>
    </BrowserRouter>
  )
}

export default App;
