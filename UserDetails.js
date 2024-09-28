document.getElementById("userDetailsForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const address = document.getElementById("address").value;
    const skills = document.getElementById("skills").value;
    const education = document.getElementById("education").value;
    const reference = document.getElementById("reference").value;
    const profilePicture = document.getElementById("profilePicture").files[0];

    // Store data (localStorage used as an example)
    const userData = {
        name: name,
        contact: contact,
        address: address,
        skills: skills,
        education: education,
        reference: reference,
        profilePicture: URL.createObjectURL(profilePicture), // Handle image
    };

    localStorage.setItem("userDetails", JSON.stringify(userData));

    // You can redirect to another HTML file or handle data further here
    // Example: window.location.href = 'profile.html';
    alert("Details saved successfully!");
});
