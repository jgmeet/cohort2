/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(todoList, n) {
    this.todoList = []
    this.n = 0
  }

  add(todo) {
    this.todoList.push(todo)
    this.n++
  }

  remove(index) {
    if(index < this.n) {
      for(let i=index; i<this.n-1; i++) {
      this.todoList[i] = this.todoList[i+1]
      }
      this.todoList.pop()
    }
    this.n--
  }

  update(index, updatedTodo) {
    if(index < this.n) {
      this.todoList[index] = updatedTodo
    }
  }

  getAll() {
    return this.todoList
  }

  get(indexOfTodo) {
    if(indexOfTodo < this.n) {
        return this.todoList[indexOfTodo]
    } else {
      return null
    }
  }

  clear() {
    for(let i=0; i<this.n; i++) {
        this.todoList.pop()
    }
    this.n = 0;
  }
}

module.exports = Todo;
