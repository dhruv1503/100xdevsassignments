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
constructor(){
  this.list = [];
}
add(task) {
  this.list.push(task)
}
remove(index){
  const removedTaskArr = this.list.filter((_, i) => (i !== index));
  this.list = removedTaskArr
}
update(index, task){
  const updatedTaskArr = this.list.map((element, i) => (index === i ? task : element));
  this.list = updatedTaskArr
}
getAll(){
  return this.list
}
get(index){
  const requiredTask = this.list.find((_, i) => (index === i));
  return requiredTask ? requiredTask : null
}
clear(){
  this.list = []
}
}

const todoList = new Todo()

module.exports = Todo;
