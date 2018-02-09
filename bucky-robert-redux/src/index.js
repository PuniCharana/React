import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'; 
import allReducer from './reducers/';
import { Provider } from 'react-redux'
import Todos from './components/Todos'

const store = createStore(allReducer);

ReactDOM.render(
    <Provider store={store}>
        <Todos/>
    </Provider>,
document.getElementById('root'));