// Appointment Form Validation
document.addEventListener("DOMContentLoaded", function () {

    const appointmentForm = document.querySelector("form");

    appointmentForm.addEventListener("submit", function (event) {

        const name = document.getElementById("appointment-name").value;
        const phone = document.getElementById("appointment-phone").value;
        const email = document.getElementById("appointment-email").value;
        const date = document.getElementById("appointment-date").value;

        if (name === "" || phone === "" || email === "" || date === "") {
            alert("Please fill in all appointment fields.");
            event.preventDefault(); // Stops form from submitting
        } else {
            alert("Appointment booked successfully!");
        }

    });

});

// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {

        const name = document.getElementById("contact-name").value.trim();
        const email = document.getElementById("contact-email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all contact fields.");
            event.preventDefault(); // Stops form from submitting
        } else {
            alert("Message sent successfully! Thank you for contacting us.");

            // Optional: store contact data in localStorage
            const contactData = {
                name: name,
                email: email,
                message: message,
                date: new Date().toLocaleString()
            };

            let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
            contacts.push(contactData);
            localStorage.setItem("contacts", JSON.stringify(contacts));

            // Clear form
            contactForm.reset();

            event.preventDefault(); // prevent page redirect for demonstration
        }

    });

});
