import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todos from './Todos';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todos todos={[
		{
			id: 1,
			todo: "Wash"
		},
		{
			id: 2,
			todo: "Eat Lunch"
		},
		{
			id: 3,
			todo: "Sleep"
		}
	]}/>, document.getElementById('root'));
registerServiceWorker();
