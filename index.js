window.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".cards");
  const students = JSON.parse(localStorage.getItem("students")) || [];

  if (students.length === 0) {
    cardsContainer.innerHTML = "<p>No students added yet.</p>";
    return;
  }

  // Create cards for all students
  cardsContainer.innerHTML = students.map((student, index) => `
    <div class="card" onclick="openProfile(${index})">
      <img src="${student.userImage || student.pic || ''}" alt="Student Picture">

      <h3>${student.userName || "No Name"}</h3>
      <p><strong>Age:</strong> ${student.userAge || "N/A"}</p>
      <p><strong>Address:</strong> ${student.userAddress || "N/A"}</p>
      <p><strong>DOB:</strong> ${student.userDob || "N/A"}</p>
    </div>
  `).join("");
});

//  Function to open the profile page
function openProfile(index) {
  localStorage.setItem("selectedStudentIndex", index);
  window.location.href = "details.html";
}


//Add student form

 function formpage(){

    app.innerHTML=""
    const title=document.createElement("h2")
    title.textContent="Add student details"

    const formcard=document.createElement("div")
    formcard.className="form_card"

    const form=document.getElementById("form")

    const name = createInput("text", "Full Name");
    const age = createInput("number", "Age");
    const address = createTextarea("Address");

    const marksTitle = document.createElement("h3");
    marksTitle.textContent = "Enter Subject Marks";

    const maths = createInput("number", "Math Marks");
    const science = createInput("number", "Science Marks");
    const english = createInput("number", "English Marks");


    const profileLabel = document.createElement("label");
    profileLabel.textContent = "Upload Profile Picture:";
    const profileInput = document.createElement("input");
    profileInput.type = "file";
    profileInput.accept = "image/*";
    const preview = document.createElement("img");
    preview.id = "preview";

    
 }