const todos = [
   { title: "Задача 1", description: "Сделать что-то", completed: false }, // 0
   { title: "Задача 2", description: "Сделать что-то", completed: true }, // 1
   { title: "Задача 3", description: "Сделать что-то", completed: false } // 2
];

//Задача 1

function addTodo(title, description) {
   let newTodo = {
        title: title,
        description: description,
        completed: false
    }
    todos.push(newTodo)
    
}
addTodo('Задача 4','Сделать что-то')

//Задача 2

function toggleTodo(index) {
	let newTodo = todos [index]
	
	newTodo.completed = !newTodo.completed
}
toggleTodo(1)

//Задача 3

function deleteTodo(arr, index) {
	arr.splice(index, 1)
	
	return arr
}

console.log(todos)
deleteTodo(todos, todos.length-1)