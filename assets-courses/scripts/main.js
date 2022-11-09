
const courseTableBody = document.querySelector('#course-table tbody');


function loadcourseTableBody() {
    fetch('http://localhost:8081/api/courses')
        .then(response => response.json())
        .then(courses => {
            console.log(courses);
            courses.forEach(course => {
                let row = courseTableBody.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                // let cell4 = row.insertCell(3);
                cell1.innerText = course.id;
                cell2.innerText = course.dept;
                cell3.innerText = course.courseName;
                // cell4.innerText = course.username;
            })
        })
}


window.onload = () => {
    loadcourseTableBody()
}