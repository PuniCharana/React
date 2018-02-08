import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
    constructor() {
        super();

        this.todos = [
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
        ];
    }

    getAllTodos() {
        return this.todos;
    }
}

const todoStore = new TodoStore();
export default todoStore;