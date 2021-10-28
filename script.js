const input = document.querySelector("#text");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

const removeTodo = (e) => {
  e.target.parentElement.remove();
};

const completedTodo = (e) => {
  if (e.target.checked) {
    e.target.parentElement.classList.add("completed");
  } else {
    e.target.parentElement.classList.remove("completed");
  }
};

const addTodo = () => {
  if (input.value === "" || input.value === " ") {
    return;
  }
  const li = document.createElement("li");
  const p = document.createElement("p");
  const removeBtn = document.createElement("button");
  const checkBox = document.createElement("input");

  checkBox.type = "checkbox";

  p.textContent = input.value;
  removeBtn.textContent = "X";
  li.classList.add("todo-list__item");

  li.append(p);
  li.append(checkBox);
  li.append(removeBtn);

  removeBtn.addEventListener("click", removeTodo);
  checkBox.onchange = completedTodo;

  input.value = "";

  todoList.prepend(li);
};

addBtn.addEventListener("click", addTodo);
