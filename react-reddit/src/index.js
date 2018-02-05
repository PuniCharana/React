import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import Nav from './components/Nav'
import {BrowserRouter, Route } from 'react-router-dom'
import About from './components/About'
import Fetch from './components/Fetch'
import Subreddits from './components/Subreddits'
import Posts from './components/Posts'
import Charts from './components/Charts'


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
			<Route path="/fetch" component={Fetch}/>
			<Route path="/subreddits" component={Subreddits}/>
			<Route path="/posts/:post_url" component={Posts}/>
			<Route path="/charts/" component={Charts}/>
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);
