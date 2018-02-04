import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Nav from './Nav'
import {BrowserRouter, Route } from 'react-router-dom'


const About = (props) => {
	return <h1>About</h1>
}

const NoParam = (props) => {
	console.log(props)
	return <h1>NoParam</h1>
}

const Param = (props) => {
	console.log(props)
	return <h1>Param</h1>
}

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Nav/>
			<Route exact path="/" component={App}/>
			<Route path="/about" component={About}/>
			<Route path="/render" render={()=><h1>Render</h1>}/>
			<Route path="/noparam" render={NoParam}/>
			<Route path="/param/:id" render={Param}/>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);
