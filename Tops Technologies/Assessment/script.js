document.getElementById("guestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear all errors first
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
  document.getElementById("message").innerText = "";

  // Get input values
  const fullName = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const aadhar = document.getElementById("aadhar").value.trim();
  const checkIn = document.getElementById("checkIn").value;
  const checkOut = document.getElementById("checkOut").value;
  const purpose = document.getElementById("purpose").value.trim();

  let valid = true;

  // Validation
  if (!fullName) {
    document.getElementById("fullNameError").innerText = "Full name is required.";
    valid = false;
  }

  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").innerText = "Phone must be 10 digits.";
    valid = false;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    valid = false;
  }

  if (!/^\d{12}$/.test(aadhar)) {
    document.getElementById("aadharError").innerText = "Aadhar must be 12 digits.";
    valid = false;
  }

  if (!checkIn) {
    document.getElementById("checkInError").innerText = "Check-in date is required.";
    valid = false;
  }

  if (!checkOut) {
    document.getElementById("checkOutError").innerText = "Check-out date is required.";
    valid = false;
  }

  if (!purpose) {
    document.getElementById("purposeError").innerText = "Purpose of visit is required.";
    valid = false;
  }

  if (!valid) return;

  // Save to localStorage
  const submission = {
    fullName, phone, email, aadhar, checkIn, checkOut, purpose
  };

  let data = JSON.parse(localStorage.getItem("guests")) || [];
  data.push(submission);
  localStorage.setItem("guests", JSON.stringify(data));

  document.getElementById("guestForm").reset();
  document.getElementById("message").innerText = "Data submitted successfully!";
});
