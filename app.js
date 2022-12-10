const formAdd = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const deleteTodo = document.querySelector('.delete');

// 2 methods
const generateTodo = (todo) => {

    const html =
        ` <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa-solid fa-trash delete"></i>
        </li>`
    todoList.innerHTML += html;
}

formAdd.addEventListener('submit', (e) => {
    // we need to use event bubling
    // 1 remove the default action of the browser
    e.preventDefault();
    // create a new li
    const li = document.createElement('li');
    // attach whats inside the form to the new li
    const newtodo = formAdd.newtodo.value.trim();
    if (newtodo.length) {
        li.textContent = newtodo;
        // generateTodo(newtodo);
        // formadd.reset();
        todoList.append(li);
        li.classList = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML += '<i class="fa-solid fa-trash delete"></i>';
        formAdd.reset();
    }
});
// using delegation through event bubbling
todoList.addEventListener('click', (e) => {
    const element = e.target;
    console.log(e);
    if (element.classList.contains("delete")) {
        element.parentElement.remove();
    }
});
