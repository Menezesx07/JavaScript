//seleção de elementos
const todoForm = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


let oldInputValue;

//Funções
const saveTodo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)


    //botões
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-clipboard-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo);
    todoinput.value = "";
    todoinput.focus(); //voltar o foco da pagina ao input
    
}

const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    })

}

//Eventos

//adicionando item novo
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = todoinput.value
    if(inputValue) {
        saveTodo(inputValue)
    }
})


document.addEventListener("click", (e) => {
    
    //função de checkar
    const targetEl = e.target
    const parentEl = targetEl.closest("div")
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
    }

    if(targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
    }

    //remover item
    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }

    //editar itens
    if(targetEl.classList.contains("edit-todo")) {
        toggleForms()

         editInput.value = todoTitle
         oldInputValue = todoTitle
        
    }
});

//botão cancelar
cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
  });

//botão editar
editForm.addEventListener("submit", (e) => {

    e.preventDefault()

    const editInputValue = editInput.value

    if(editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()
})
