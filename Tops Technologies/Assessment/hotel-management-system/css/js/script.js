document.getElementById("guestForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let aadhar = document.getElementById("aadhar").value.trim();
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let purpose = document.getElementById("purpose").value.trim();

    document.querySelectorAll(".error").forEach(e => e.innerText = "");
    document.getElementById("successMsg").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Full name is required";
        valid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits";
        valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        valid = false;
    }

    if (!/^\d{12}$/.test(aadhar)) {
        document.getElementById("aadharError").innerText = "Aadhar must be 12 digits";
        valid = false;
    }

    if (checkin === "" || checkout === "" || purpose === "") {
        alert("All fields are required");
        valid = false;
    }

    if (!valid) return;

    let guestData = JSON.parse(localStorage.getItem("guests")) || [];

    guestData.push({
        name,
        phone,
        email,
        aadhar,
        checkin,
        checkout,
        purpose
    });

    localStorage.setItem("guests", JSON.stringify(guestData));

    document.getElementById("successMsg").innerText =
        "Guest data saved successfully!";

    document.getElementById("guestForm").reset();
});
