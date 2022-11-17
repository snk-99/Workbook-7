(() => {
    const $q = (s) => document.querySelector(s);

    function loadCourse() {
        // const courseTitle = $q("#course-title");
        // const courseDept = $q("#course-dep");
        // const courseNum = $q("#course-num");
        // const courseInstructor = $q("#instructor");
        // const startDate = $q("#start-date");
        // const duration = $q("#num-days");

        const id = getCourseId();

        return fetch("http://localhost:8888/courses/" + id)
            .then(response => response.json())
    }

    function loadcourseTableBody(course) {
        const courseTitle = $q('#course-title');
        courseTitle.innerText = course.courseName
        const courseTableBody = $q('#course-table tbody');
        // courses.forEach((course) => {
        let row = courseTableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerText = course.courseNum;
        cell2.innerText = course.instructor;
        cell3.innerText = course.startDate;
        cell4.innerText = `${course.numDays} Days`;


    }

    function getCourseId() {
        const params = new URLSearchParams(location.search);
        return params.get("courseid");
    }

    window.onload = () => {
        loadCourse(getCourseId()).then(courses => loadcourseTableBody(courses))
    }
})()