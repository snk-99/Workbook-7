(() => {
    const $q = (s) => document.querySelector(s);

    function loadCourse() {
        const courseTitle = $q("#course-title");
        const courseDept = $q("#course-dep");
        const courseNum = $q("#course-num");
        const courseInstructor = $q("#instructor");
        const startDate = $q("#start-date");
        const duration = $q("#num-days");

        const id = getCourseId();

        fetch("http://localhost:8888/courses/" + id)
            .then(response => response.json())
            .then(course => {
                courseTitle.innerText = course.courseName;
                courseDept.innerText = course.dept;
                courseNum.innerText = course.courseNum;
                courseInstructor.innerText = course.instructor;
                startDate.innerText = course.startDate;
                duration.innerText = course.numDays;
            })
    }

    function getCourseId() {
        const params = new URLSearchParams(location.search);
        return params.get("courseid");
    }
    window.onload = () => {
        loadCourse(getCourseId())
    }
})()