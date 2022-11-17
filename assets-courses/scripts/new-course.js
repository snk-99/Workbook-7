(function () {
    const $q = (selector) => document.querySelector(selector)
    const courseNumber = $q("#course-num");
    const departmentName = $q("#department-list, option");
    const courseNameInput = $q("#course-name");
    const instructorInput = $q("#instructor");
    const startDate = $q("#start-date");
    const courseDuration = $q("#num-days");
    const departmentList = $q("#department-list");
    const form = $q("form");
    const messageToUser = $q("#message-to-user");

    console.log(departmentName);
    function saveNewCourse(event) {
        event.preventDefault();
        console.log("saved")

        let bodyData = {
            dept: departmentName.value,
            courseNum: courseNumber.value,
            courseName: courseNameInput.value,
            instructor: instructorInput.value,
            startDate: startDate.value,
            numDays: courseDuration.value
        }

        fetch("http://localhost:8888/courses/", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
            .then(response => response.json())
            .then(course => {
                console.log(course);
                window.location = "./courses.html"
                sessionStorage.message = `New course has been added`
                // messageToUser.innerText = "Successfully Saved"

            })
            .catch(err => {
                messageToUser.innerText = "An error occured"
            })

    }

    window.onload = () => {
        form.onsubmit = saveNewCourse;
    }
})()