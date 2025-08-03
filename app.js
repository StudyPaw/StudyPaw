document.getElementById('app').innerHTML = `
  <h2>To-Do List</h2>
  <input id="todo-input" placeholder="Add a task" />
  <button onclick="addTodo()">Add</button>
  <ul id="todo-list"></ul>
`;

function addTodo() {
  const input = document.getElementById('todo-input');
  const value = input.value.trim();
  if (value) {
    const list = document.getElementById('todo-list');
    const item = document.createElement('li');
    item.textContent = value;
    list.appendChild(item);
    input.value = '';
  }
}