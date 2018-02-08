import React, { Component } from 'react';
import Todo from '../components/Todo'
import TodoStore from '../stores/TodoStore';

class Todos extends Component {
      constructor() {
            super();

            this.state = {
                  todos: TodoStore.getAllTodos()
            }
      }
      render() {
            const { todos } = this.state

            const TodosComponents = todos.map((todo, index) => <Todo key={index} {...todo}/>);

            return(
                  <ul className="todos">
                        <h1>Todos</h1>
                        {TodosComponents}
                  </ul>
            )
      }
}

export default Todos;
