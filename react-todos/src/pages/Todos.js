import React, { Component } from 'react';
import Todo from '../components/Todo'
class Todos extends Component {
      constructor() {
            super();

            this.state = {
                  todos: [
                        {
                              id: "id1",
                              task: "Wash up",
                              completed: false
                        },
                        {
                              id: "id2",
                              task: "Start working",
                              completed: false
                        }
                  ]
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
