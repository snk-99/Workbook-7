(function () {
    const $q = (selector) => document.querySelector(selector)
    const completedCheckbox = $q("#completed-checkbox");
    const titleInput = $q("#title-input");
    const form = $q("form");
    const messageToUser = $q("#message-to-user");

    function saveTodo(event) {
        event.preventDefault();
        console.log("saved")

        let bodyData = {
            userId: 1,
            title: titleInput.value,
            completed: completedCheckbox.checked
        }

        fetch("http://localhost:8888/todos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
            .then(response => response.json())
            .then(todo => {
                console.log(todo);
                messageToUser.innerText = "Successfully Saved"
            })
            .catch(err => {
                messageToUser.innerText = "An error occured"
            })
    }

    window.onload = () => {
        form.onsubmit = saveTodo;
    }
})()