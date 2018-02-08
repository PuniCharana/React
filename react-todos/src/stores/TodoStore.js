import { EventEmitter } from 'events';
import dispatcher from '../dispatcher'

class TodoStore extends EventEmitter {
    constructor() {
        super();

        this.todos = [
            {
                  id: Date.now(),
                  task: "Wash up",
                  completed: false
            },
            {
                  id: Date.now(),
                  task: "Pay water bill",
                  completed: false
            }
        ];
    }

    createTodo(text) {
        this.todos.push({
            id: Date.now(),
            task: text,
            completed: false
        });
        
        this.emit("change")
    }

    deleteTodo(id) {
        var removeIndex = this.todos.map(function(item) { return item.id; }).indexOf(id);
        this.todos.splice(removeIndex, 1);

        this.emit("change")
    }

    getAllTodos() {
        return this.todos;
    }

    handleActions(action) {
        console.log("TodoStore receive an action: ", action);

        switch (action.type) {
            case "CREATE_TODO": {
                this.createTodo(action.task)
                return true;
            }
            case "DELETE_TODO": {
                this.deleteTodo(action.id)
                return true;
            }
        }
    }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));
export default todoStore;