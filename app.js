// Globals
let todos = [];
let users = [];

// Attach logic - привязка события
document.addEventListener('DOMContentLoaded', initApp);

// Event logic - логига события подгрузки страницы
function initApp() {
	Promise.all([getAllTodos(), getAllUsers()]).then((values) => {
		[todos, users] = values;

		// Отправить в разметку тут
	});
}

//Async logic - функции ассанхронной логики
async function getAllTodos() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos');
	const data = await response.json();

	return data;
}
async function getAllUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();

	return data;
}
