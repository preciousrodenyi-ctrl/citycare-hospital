// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------
    // Appointment Form Validation
    // ----------------------------
    const appointmentForm = document.getElementById("appointment-form");
    const appointmentService = document.getElementById("appointment-service");

    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (event) {
            const name = document.getElementById("appointment-name").value.trim();
            const phone = document.getElementById("appointment-phone").value.trim();
            const email = document.getElementById("appointment-email").value.trim();
            const date = document.getElementById("appointment-date").value.trim();
            const service = appointmentService.value;

            if (!name || !phone || !email || !date || !service) {
                alert("Please fill in all appointment fields and select a service.");
                event.preventDefault();
            } else {
                alert(`Appointment booked successfully!\nService: ${service}`);
                // You can submit or save the data here
                // event.preventDefault(); // uncomment if you want to prevent actual submission for testing
            }
        });
    }

    // ----------------------------
    // Contact Form Validation
    // ----------------------------
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all contact fields.");
                event.preventDefault();
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

                contactForm.reset();
                event.preventDefault(); // prevent page redirect for demonstration
            }
        });
    }

});

// ----------------------------
// Toggle About Section
// ----------------------------
function toggleAbout() {
    const about = document.getElementById("about");
    if (about) {
        about.style.display = (about.style.display === "none" || about.style.display === "") ? "block" : "none";
    }
}

// ----------------------------
// Toggle Contact Section
// ----------------------------
function toggleContact() {
    const contact = document.getElementById("contact");
    if (contact) {
        contact.style.display = (contact.style.display === "none" || contact.style.display === "") ? "block" : "none";
    }
}
function selectSpecialty() {
    const specialtySelect = document.getElementById("specialty");
    const selectedValue = specialtySelect.value;

    const display = document.getElementById("selected-specialty");

    if (selectedValue === "") {
        alert("Please select a specialty service first!");
        display.textContent = "";
    } else {
        display.textContent = "You selected: " + selectedValue;
        alert("You selected: " + selectedValue);
    }
}
const specialtySelect = document.getElementById("specialty");
if (specialtySelect) {
    specialtySelect.addEventListener("change", selectSpecialty);
}
document.addEventListener("DOMContentLoaded", function () {

    const serviceSelect = document.getElementById("services");
    const specialtyContainer = document.getElementById("specialty-container");
    const appointmentForm = document.getElementById("appointment-form");

    // Show or hide specialty dropdown based on service selection
    serviceSelect.addEventListener("change", function () {
        if (serviceSelect.value === "Specialty Services") {
            specialtyContainer.style.display = "block";
        } else {
            specialtyContainer.style.display = "none";
            document.getElementById("appointment-specialty").value = ""; // reset
        }
    });

    // Form validation
    appointmentForm.addEventListener("submit", function (event) {
        const service = serviceSelect.value;
        const specialty = document.getElementById("appointment-specialty").value;

        if (!service) {
            alert("Please select a service.");
            event.preventDefault();
        } else if (service === "Specialty Services" && !specialty) {
            alert("Please select a specialty service.");
            event.preventDefault();
        } else {
            alert("Appointment booked successfully!\nService: " + service + (specialty ? " (" + specialty + ")" : ""));
        }
    });

});
