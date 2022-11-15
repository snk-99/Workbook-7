const table = document.getElementById('userTable');
let todoBtn = document.getElementById('todo-btn');
let oneUserBtn = document.getElementById('one-user');
let todoInput = document.getElementById('todo-input');

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(usersInfo => {
            usersInfo.forEach((userInfo) => {
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                let cell7 = row.insertCell(6);
                cell1.innerText = userInfo.id;
                cell2.innerText = userInfo.company.name;
                cell3.innerText = userInfo.name;
                cell4.innerText = userInfo.email;
                cell5.innerText = userInfo.username;
                cell6.innerText = userInfo.phone;
                cell7.innerText = userInfo.website;
            });
        })
}

function loadUser() {
    const userId = todoInput.value;

    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
        .then(response => response.json())
        .then(usersInfo => {
            usersInfo.forEach((userInfo) => {
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                let cell7 = row.insertCell(6);
                cell1.innerText = userInfo.id;
                cell2.innerText = userInfo.company.name;
                cell3.innerText = userInfo.name;
                cell4.innerText = userInfo.email;
                cell5.innerText = userInfo.username;
                cell6.innerText = userInfo.phone;
                cell7.innerText = userInfo.website;
            });
        })
}

window.onload = () => {
    todoBtn.onclick = loadUsers;
    oneUserBtn.onclick = loadUser;
}