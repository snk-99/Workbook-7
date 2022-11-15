// let todoBtn = document.getElementById('todo-btn');
// let todoInput = document.getElementById('todo-input');
// let messageDiv = document.getElementById('message-div');
// let status = document.getElementById('status');

//same as code above
//helper function
const $q = (selector) => document.querySelector(selector)

function todoBtnClicked() {
    const userId = $q("#todo-input").value;
    const completedSpan = $q("#todo-card span");
    const titleParagraph = $q("#todo-card p");

    fetch(`http://localhost:8888/todos/${userId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // const messageDiv = $q("#message-div")
            titleParagraph.innerText = `Task: ${data.title}`;
            completedSpan.innerText = data.completed;
        })
}

window.onload = () => {
    const todoBtn = $q("#todo-btn");
    todoBtn.onclick = todoBtnClicked;
}