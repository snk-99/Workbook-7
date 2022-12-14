(() => {
    const $q = (s) => document.querySelector(s);
    const courseTableBody = $q('#course-table tbody');
    const successAlert = $q("#success-alert")

    function loadCourses() {
        return fetch('http://localhost:8888/courses')
            .then(response => response.json())
    }

    function createDetailsLink(course) {
        const anchor = document.createElement('a');
        anchor.innerText = course.courseName;
        anchor.href = `./details.html?courseid=${course.id}`;
        return anchor;
    }

    function createEditBtn(course) {
        const anchor = document.createElement('a');
        anchor.innerText = "Edit";
        anchor.href = `./edit-course.html?courseid=${course.id}`;
        return anchor;
    }

    function createDeleteBtn(course) {
        const anchor = document.createElement('a');
        anchor.innerText = "Delete";
        anchor.href = `./delete-course.html?courseid=${course.id}`;
        return anchor;
    }

    function loadcourseTableBody(courses) {
        courses.forEach((course) => {
            let row = courseTableBody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);

            cell1.innerText = course.courseNum;

            const anchor = createDetailsLink(course);
            cell2.appendChild(anchor);

            cell3.innerText = course.dept;

            const editAnchor = createEditBtn(course);
            cell4.appendChild(editAnchor);
            cell4.appendChild(document.createTextNode(' | '))
            const deleteAnchor = createDeleteBtn(course);
            cell4.appendChild(deleteAnchor);
        })
    }
    function displayAlert() {
        if (sessionStorage.message) {
            console.log(sessionStorage.message);
            successAlert.innerText = sessionStorage.message;
            successAlert.style = "display-block";
        }
    }

    function removeAlert() {
        if (sessionStorage.message) {
            // console.log(sessionStorage.message);
            // const successAlert = $q("#success-alert")
            successAlert.innerText = "";
            sessionStorage.removeItem("message");
            successAlert.style.display = "none";

        }
    }

    window.onload = () => {
        loadCourses().then(data => loadcourseTableBody(data))
        displayAlert()
        setTimeout(removeAlert, 4000)
    }
})()