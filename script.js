document.addEventListener("DOMContentLoaded", function () {

    const appointmentForm = document.getElementById("appointment-form");
    const contactForm = document.getElementById("contact-form");
    const serviceSelect = document.getElementById("services");
    const specialtyContainer = document.getElementById("specialty-container");
    const specialtySelect = document.getElementById("appointment-specialty");

    // ================================
    // Show / Hide Specialty Dropdown
    // ================================
    if (serviceSelect && specialtyContainer) {
        serviceSelect.addEventListener("change", function () {
            if (serviceSelect.value === "Specialty Services") {
                specialtyContainer.style.display = "block";
            } else {
                specialtyContainer.style.display = "none";
                if (specialtySelect) specialtySelect.value = "";
            }
        });
    }

    // ================================
    // Appointment Form + localStorage
    // ================================
    if (appointmentForm) {
        appointmentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const email = document.getElementById("email").value.trim();
            const date = document.getElementById("date").value;
            const service = serviceSelect.value;
            const specialty = specialtySelect ? specialtySelect.value : "";

            if (!name || !phone || !email || !date || !service) {
                alert("Please fill in all fields.");
                return;
            }

            if (service === "Specialty Services" && !specialty) {
                alert("Please select a specialty service.");
                return;
            }

            const booking = {
                name,
                phone,
                email,
                date,
                service,
                specialty,
                createdAt: new Date().toLocaleString()
            };

            let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
            bookings.push(booking);
            localStorage.setItem("bookings", JSON.stringify(bookings));

            alert("Appointment booked successfully!");
            appointmentForm.reset();
            specialtyContainer.style.display = "none";
        });
    }

    // ================================
    // Contact Form + localStorage
    // ================================
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("contact-name").value.trim();
            const email = document.getElementById("contact-email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all contact fields.");
                return;
            }

            const contactData = {
                name,
                email,
                message,
                createdAt: new Date().toLocaleString()
            };

            let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
            contacts.push(contactData);
            localStorage.setItem("contacts", JSON.stringify(contacts));

            alert("Message sent successfully!");
            contactForm.reset();
        });
    }

});
function selectSpecialty() {
    const specialty = document.getElementById("specialty-services").value;

    if (!specialty) {
        alert("Please select a specialty service.");
        return;
    }

    document.getElementById("selected-specialty").textContent =
        "You selected: " + specialty;
}
