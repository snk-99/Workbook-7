(function () {
    //selector HTMLElements into variables
    const $q = (selector) => document.querySelector(selector);
    const completedCheckbox = $q("#completedCheckbox");
    const titleInput = $q("#titleInput");
    const form = $q("form");
    const messageParagraph = $q("#messageParagraph");

    function saveTodo(event) {
        event.preventDefault();
        const id = getTodoId();


        const bodyData = {
            userId: 1,
            title: titleInput.value,
            completed: completedCheckbox.checked,

        }

        fetch("http://localhost:8888/todos/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodyData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location = "./todos.html"
                // messageParagraph.innerText = "Successfully saved."
            })
            .catch(error => {
                console.log(error)
                messageParagraph.innerText = "An unexpected error occured."
            });


    }

    function loadTodo(todoId) {
        fetch(`http://localhost:8888/todos/${todoId}`)
            .then(response => response.json())
            .then(todo => {
            console.log(todo);
            completedCheckbox.checked = todo.completed;
            titleInput.value = todo.title;
        })
    }

    function getTodoId() {
        const params = new URLSearchParams(location.search);
        return params.get("id");
    }


    //associate functions with HTMLElement events
    window.onload = function () {
        loadTodo(getTodoId());
        form.onsubmit = saveTodo;
    }

})()