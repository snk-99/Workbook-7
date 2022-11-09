let todoBtn = document.getElementById('todo-btn');
let todoInput = document.getElementById('todo-input');
let messageDiv = document.getElementById('message-div');
// let status = document.getElementById('status');

function todoBtnClicked() {

    const userId = todoInput.value;
    fetch("https://jsonplaceholder.typicode.com/todos/" + userId)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            messageDiv.innerText = `ID ${data.id}: ${data.title}`;
        })
}

window.onload = () => {
    todoBtn.onclick = todoBtnClicked;
}