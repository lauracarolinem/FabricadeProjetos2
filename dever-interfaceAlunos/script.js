// Suponha que você tenha uma lista de estudantes em JavaScript
const students = ["Laura", "Thiago", "João", "Kelvin", "Dudu", "Melzinho"];

// Função para adicionar os estudantes à lista HTML
function renderStudentList() {
    const studentList = document.getElementById("student-list");

    // Limpe a lista existente, se houver
    studentList.innerHTML = "";

    // Itere sobre a lista de estudantes e crie elementos <li> para cada um
    for (const student of students) {
        const listItem = document.createElement("li");
        listItem.textContent = student;
        studentList.appendChild(listItem);
    }
}

// Chame a função para renderizar a lista quando a página carregar
window.onload = renderStudentList;