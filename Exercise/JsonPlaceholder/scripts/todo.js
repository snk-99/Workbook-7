(() => {
    const $q = (s) => document.querySelector(s);

    const tbody = $q("#todos-table tbody");

    function loadData() {
        return fetch("http://localhost:8888/todos/").then(response => response.json());
    }

    function createEditLink(todo) {
        const a = document.createElement("a");
        a.href = "./edit-todo.html?id=" + todo.id;
        a.innerText = "Edit"
        return a;
    }

    function createDeleteBtn(todo) {
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "submit"
        deleteBtn.innerText = "X"
        return deleteBtn;
    }

    function fillTable(todos) {
        for (const todo of todos) {
            const row = tbody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);

            cell1.innerText = todo.title;
            cell2.innerHTML = todo.completed ? "&#10003;" : null;
            const a = createEditLink(todo);
            cell3.appendChild(a);

            const deleteBtn = createDeleteBtn(todo)
            cell4.appendChild(deleteBtn)

        }
    }

    window.onload = () => {
        loadData().then(data => fillTable(data))
    }


})()