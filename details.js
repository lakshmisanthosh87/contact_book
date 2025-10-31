window.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const students = JSON.parse(localStorage.getItem("students")) || [];
  const student = students[id];

  if (!student) {
    document.body.innerHTML = "<p>Student not found!</p>";
    return;
  }

  // Set profile image
  document.getElementById("profile-pic").src = student.userImage || student.pic || "";

  const detailsContainer = document.getElementById("profile-details");

  // Student details
  detailsContainer.innerHTML = `
    <h2>${student.userName || "No Name"}</h2>
    <p><strong>Email:</strong> ${student.userEmail || "N/A"}</p>
    <p><strong>Password:</strong> ${student.userPassword || "N/A"}</p>
    <p><strong>Age:</strong> ${student.userAge || "N/A"}</p>
    <p><strong>Phone:</strong> ${student.userPhone || "N/A"}</p>
    <p><strong>Address:</strong> ${student.userAddress || "N/A"}</p>
    <p><strong>City:</strong> ${student.userCity || "N/A"}</p>
    <p><strong>Pincode:</strong> ${student.userPincode || "N/A"}</p>
    <p><strong>DOB:</strong> ${student.userDob || "N/A"}</p>
    <div class="btn-group">
      <button id="edit-btn"> Edit</button>
      <button id="delete-btn"> Delete</button>
      <button id="back-btn">⬅ Back</button>
    </div>
  `;

  // Back button
  document.getElementById("back-btn").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.getElementById("edit-btn").addEventListener("click", () => {
    window.location.href = `edit.html?id=${id}`;
  });


  document.getElementById("delete-btn").addEventListener("click", () => {
    const confirmDelete = confirm(`Are you sure you want to delete ${student.userName || "this student"}?`);
    if (confirmDelete) {
      students.splice(id, 1); 
      localStorage.setItem("students", JSON.stringify(students)); 
      // alert("Student deleted successfully!");
      window.location.href = "index.html"; 
    }
  });
});
