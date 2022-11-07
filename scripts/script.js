// Exercise 4

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()
    console.log(text)
})

// Exercise 5

let todos = []

const createTodo = (text) => {
    todos.push({
        title: text,
        completed: false,
    })
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.elements.text.value.trim()

    if (text.length > 0) {
        createTodo(text)
        e.target.elements.text.value = ''
    }

    renderTodos(todos)
})

// // Exercise 6 & 10
// const generateTodoDOM = (todo) => {
//     const todoEl = document.createElement('label')
//     const containerEl = document.createElement('div')
//     const todoText = document.createElement('span')


//     // Setup the todo text
//     todoText.textContent = todo.title
//     containerEl.appendChild(todoText)

//     // Setup container
//     todoEl.classList.add('list-item')
//     containerEl.classList.add('list-item__container')
//     todoEl.appendChild(containerEl)

//     // Setup the remove button
//     const removeButton = document.createElement('button')
//     removeButton.textContent = 'remove'
//     removeButton.classList.add('button', 'button--text')
//     todoEl.appendChild(removeButton)
//     removeButton.addEventListener('click', () => {
//         removeTodo(todoText)
//         renderTodos(todos)
//     })

//     return todoEl
// }

// Exercise 7 & 8
const renderTodos = (todos) => {
    const todoList = document.querySelector('#todos')
    todoList.innerHTML = ''

    if (todos.length > 0) {
        todos.forEach((todo) => {
            todoList.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no todos to show'
        todoList.appendChild(messageEl)
    }
}

renderTodos(todos);

// Exercise 9
const removeTodo = (title) => {
    const todoIndex = todos.findIndex((todo) => {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//  Exercise 11
const newTodos = {}
const newCreateTodo = (text) => {
    newTodos.push({
        title: text,
        completed: false
    })
}

//Exercise 12
const generateTodoDOM = (todoObj) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoText = document.createElement('span')

    // Setup todo checkbox
    const checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todoObj.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todoObj.title)
        renderTodos(todos)
    })

    // Setup the todo text
    todoText.textContent = todoObj.title
    containerEl.appendChild(todoText)

    // Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    // Setup the remove button
    const removeButton = document.createElement('button')
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodo(todoObj.title)
        renderTodos(todos)
    })

    return todoEl
}

function toggleTodo(title){
   const todo = todos.find((element) => todo.title.toLowerCase() === title.toLowerCase())
   if(todo){
    todo.completed = !todo.completed
   }
}

// Exercise 14

const filters = {
    searchTitle: '',
    showFinished: false,
    showUnfinished: false
}

function filterArray(){
    
}

//Exercise 18
const saveTodosToLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Exercise 19
const fetchTodosFromLocalStorage = () => {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON) {
        todos = JSON.parse(todosJSON)
    } else {
        todos = []
    }
}
  




    
