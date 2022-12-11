const formAdd = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const deleteTodo = document.querySelector('.delete');
const formSearch = document.querySelector('.search');

const generateTodo = (todo) => {

    const html =
        ` <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fa-solid fa-trash delete"></i>
        </li>`
    todoList.innerHTML += html;
}

formAdd.addEventListener('submit', (e) => {

    // 1 remove the default action of the browser
    e.preventDefault();

    // attach whats inside the form to the new li
    const newtodo = formAdd.newtodo.value.trim();
    if (newtodo.length) {
        generateTodo(newtodo);
        formAdd.reset();
    }
});

// delete todos (event delegation through bubbling)
todoList.addEventListener('click', (e) => {
    const element = e.target;
    console.log(e);
    if (element.classList.contains("delete")) {
        element.parentElement.remove();
    }
});

// search todos
formSearch.addEventListener('keyup', () => {
    // get the current text input
    const currentString = formSearch.search.value;

    // get the list of li's to loop on them
    let li = todoList.querySelectorAll('li');

    let length = todoList.children.length;
    //console.log(li);

    // loop on the list of li's
    for (let i = 0; i < length; i++) {
        let element = li[i].getElementsByTagName('span')[0];
        //console.log(li[i]);
        if (element.textContent.indexOf(currentString) > -1) {
            li[i].classList.remove('d-none');
        } else {
            li[i].classList.add('d-none');
        }
    }
});