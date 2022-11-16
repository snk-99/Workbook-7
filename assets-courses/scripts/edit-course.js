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

    function saveNewCourse(event) {
        event.preventDefault();
        const id = getCourseId();

        let bodyData = {
            dept: departmentName.value,
            courseNum: courseNumber.value,
            courseName: courseNameInput.value,
            instructor: instructorInput.value,
            startDate: startDate.value,
            numDays: courseDuration.value
        }

        fetch("http://localhost:8888/courses/" + id, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
            .then(response => response.json())
            .then(course => {
                console.log(course);
                window.location = "./courses.html"
                messageToUser.innerText = "Successfully Saved"

            })
            .catch(err => {
                messageToUser.innerText = "An error occured"
            })

    }
    function loadCourse(courseId) {
        fetch(`http://localhost:8888/courses/${courseId}`)
            .then(response => response.json())
            .then(course => {
                departmentName.value = course.dept;
                courseNumber.value = course.courseNum;
                courseNameInput.value = course.courseName;
                instructorInput.value = course.instructor;
                startDate.value = course.startDate;
                courseDuration.value = course.numDays;
            })
    }

    function getCourseId() {
        const params = new URLSearchParams(location.search);
        return params.get("courseid");
    }

    window.onload = () => {
        loadCourse(getCourseId())
        form.onsubmit = saveNewCourse;
    }
})()