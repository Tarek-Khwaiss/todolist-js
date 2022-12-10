const formAdd = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const deleteTodo = document.querySelector('.delete');
const formSearch = document.querySelector('.search');

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
        // li.textContent = newtodo;
        // todoList.append(li);
        // li.classList = "list-group-item d-flex justify-content-between align-items-center";
        // li.innerHTML += '<i class="fa-solid fa-trash delete"></i>';
        generateTodo(newtodo);
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

// filtering todos, search mechanisim
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
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
    // if (todoList.childNodes.forEach((element) => {
    //     if (!element.contains(currentString))
    //         element.classList += 'd-none';
    // }));
});