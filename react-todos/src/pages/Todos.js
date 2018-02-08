import React, { Component } from 'react';
import Todo from '../components/Todo'
import TodoStore from '../stores/TodoStore';
import * as TodosAction from '../actions/TodoActions'

class Todos extends Component {
      constructor() {
            super();

            this.getTodos = this.getTodos.bind(this)
            this.state = {
                  todos: TodoStore.getAllTodos()
            }
      }

      componentWillMount() {
            TodoStore.on('change', this.getTodos)
      }

      getTodos() {
            this.setState({
                  todos: TodoStore.getAllTodos()
            });
      }

      componentWillUnmount() {
            TodoStore.removeListener('change', this.getTodos)
      }

      _handleKeyPress = (e) => {
            if (e.key === 'Enter') {
                  if(e.target.value) {
                        console.log(e.target.value);
                        TodosAction.createTodo(e.target.value)
                        e.target.value = ""
                  } else {
                        alert("Cannot add empty todo");
                  }
                  
            }
      }

      render() {
            const { todos } = this.state

            const TodosComponents = todos.map((todo, index) => <Todo key={index} {...todo}/>);

            return(
                  <ul className="todos">
                        <h1>Todos</h1>
                        <input type="text" onKeyPress={this._handleKeyPress} />
                        {TodosComponents}
                  </ul>
            )
      }
}

export default Todos;
