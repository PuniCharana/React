import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Todos from './pages/Todos';
import Home from './pages/Home';
import Nav from './components/Nav';

const App = () => (
      <BrowserRouter>
            <div className="foo">
                  <Nav/>
                  <Route exact path="/" component={Home}/>
                  <Route  path="/todos" component={Todos}/>
            </div>
      </BrowserRouter>
)

export default App;
