const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-23'},{name: 'wash dishes',
  dueDate: '2022-11-23'} ];

renderTodoList();

function renderTodoList(){

  let todoListHTML = '';

  todoList.forEach(function(todoObject,index){
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      ">Delete</button> 
    `;
    todoListHTML += html;
  })

  /*for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button> 
    `;
    todoListHTML += html;
  }
  */

  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;


  todoList.push({
    //name: name,
    //dueDate: dueDate;
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}
