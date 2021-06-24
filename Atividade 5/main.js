var inputElement = document.querySelector("#input");

function createToDoWithEnterKey(e) {
  var key = e.which || e.keyCode;

  if(key===13) {
    addTodo()

    inputElement.value=''
  }
}

inputElement.addEventListener('keyup', createToDoWithEnterKey);

function addTodo() {
  var todoBox = document.createElement('div');
  todoBox.setAttribute('class', 'atv1');
  todoBox.setAttribute('id', 'todoBox');
  
  
  var inputValue = inputElement.value;
  
  if(inputValue==='') 
    return alert('Escreva algo');

  var p = document.createElement('p');
  p.setAttribute('class', 'text');

  var text = document.createTextNode(inputValue);
  p.appendChild(text);
  
  var button = document.createElement('button');
  button.setAttribute('class', 'remover-bt');
  var buttonIcon = document.createTextNode('X');
  button.appendChild(buttonIcon);

  todoBox.appendChild(p);
  todoBox.appendChild(button);

  var container = document.getElementById('main');

  container.appendChild(todoBox);

  button.addEventListener('click', () => {
    removeTodo(container, todoBox)
  })
  
  todoBox.addEventListener('click', () => {
    finalizeToDo(todoBox);
  })

  inputElement.value='';
}

function finalizeToDo(node) {
  node.setAttribute('class', 'active')
}

function removeTodo(parent, child) {
  parent.removeChild(child);
}