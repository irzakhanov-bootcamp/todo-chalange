const input = document.querySelector("#text");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

const removeTodo = (e) => {
  e.target.parentElement.remove();
};

const addTodo = () => {
  if (input.value === "" || input.value === " ") {
    return;
  }
  const li = document.createElement("li");
  const p = document.createElement("p");
  const removeBtn = document.createElement("button");

  p.textContent = input.value;
  removeBtn.textContent = "X";
  li.classList.add("todo-list__item");
  li.append(p);
  li.append(removeBtn);

  removeBtn.addEventListener("click", removeTodo);

  input.value = "";

  todoList.prepend(li);
};

addBtn.addEventListener("click", addTodo);
