
const students = ["Laura", "Thiago", "João", "Kelvin", "Dudu", "Melzinho"];


function renderStudentList() {
    const studentList = document.getElementById("student-list");
    
    studentList.innerHTML = "";

   
    for (const student of students) {
        const listItem = document.createElement("li");
        listItem.textContent = student;
        studentList.appendChild(listItem);
    }
}


window.onload = renderStudentList;