const table = document.getElementById('userTable');
const userDropDown = document.getElementById('userDropDown');

function loadDropDown(users) {
    userDropDown.innerHTML = "";
    let option = new Option("Users.....", "");
    userDropDown.appendChild(option);

    users.forEach((user) => {
        let option = new Option(user.name, user.name);
        userDropDown.appendChild(option);
    });
}

function buildTable(users) {
    users.forEach((user) => {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        cell1.innerHTML = user.id;
        cell2.innerHTML = user.name;
        cell3.innerHTML = user.email;
        cell4.innerHTML = user.username;
    });
}

function loadUsers() {
    fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(usersInfo => {
            console.log(usersInfo);
            buildTable(usersInfo);
            loadDropDown(usersInfo)
        })
}

window.onload = () => {
    loadUsers()
    loadDropDown()
}