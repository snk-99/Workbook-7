(() => {
    const $q = (s) => document.querySelector(s);
    const courseTableBody = $q('#course-table tbody');

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

    function loadcourseTableBody(courses) {
        courses.forEach((course) => {
            let row = courseTableBody.insertRow(-1);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);

            cell1.innerText = course.courseNum;

            const anchor = createDetailsLink(course);
            cell2.appendChild(anchor);

            cell3.innerText = course.dept;
        })
    }

    window.onload = () => {
        loadCourses().then(data => loadcourseTableBody(data))
    }
})()