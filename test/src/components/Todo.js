import React  from 'react';
 
const Todo = ({id, todo}) => (
	<div className="Todo">
		<h2><span>{id}</span>{todo}</h2>
	</div>
)
export default Todo;
