export default class Model {
    constructor() {
      this.view = null;
      this.todos = JSON.parse(localStorage.getItem('todos'));
      if (!this.todos || this.todos.length < 1) {
        this.todos = [
          {
            id: 0,
            title: 'Learn JS',
            description: 'Watch JS Tutorials',
            completed: false,
          }
        ]
        this.currentId = 1;
      } else {
        this.currentId = this.todos[this.todos.length - 1].id + 1;
      }
    }
    
  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos.map((todo) => ({...todo}));
  }

  addTodo(title, description) {
    const todo = {
      id: this.currentId++,
      title,
      description,
      completed: false,
    }
  }
}