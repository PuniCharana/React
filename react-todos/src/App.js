import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Todos from './pages/Todos';
import Home from './pages/Home';

const App = () => (
      <BrowserRouter>
            <div className="foo">
                  <Route exact path="/" component={Home}/>
                  <Route  path="/todos" component={Todos}/>
            </div>
      </BrowserRouter>
)

export default App;
