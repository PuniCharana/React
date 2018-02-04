import React  from 'react';
import Todo from './components/Todo'
const getSomething = (param) => param*5

const Todos = ({todos}) => (
	<div className="Todos">
		<h1>{getSomething(9)}</h1>
		{todos.map((todo, i) => <Todo {...todo} key={i}/>)}
	</div>
)
export default Todos;
