let TodoList = [];

displayItems();

function addToDo() {
  let inputElement = document.querySelector('#input-element');
  let dateElement = document.querySelector('#due-date'); 
  let toDoItem = inputElement.value;
  let todoDate = dateElement.value;
  TodoList.push({item: toDoItem, dueDate: todoDate});

  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.container-element');

  let newHtml = '';
  for (let i=0; i<TodoList.length; i++) {
    let {item, dueDate} = TodoList[i];
    newHtml +=`
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onclick="
    TodoList.splice(${i}, 1);
    displayItems(); 

    ">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}

// function resetToDo() {
//   localStorage.clear();
//   containerElement.innerHTML ='';
// }