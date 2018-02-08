import React from 'react';
import * as TodosAction from '../actions/TodoActions'


const Todo = (props) => {

    function deleteTodo(e) {
        TodosAction.deleteTodo(props.id)
    }

    return <li>{props.task}&nbsp;<button onClick={deleteTodo}>X</button></li>
}

export default Todo;
