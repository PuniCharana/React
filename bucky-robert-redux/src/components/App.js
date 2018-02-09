import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Users from './Users';

const App = () => (
    <BrowserRouter>
        <div className="App">
            <Nav/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/users" component={Users}/>
        </div>
    </BrowserRouter>
)

export default App;