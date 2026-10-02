document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm && formMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.checkValidity()) {
                contactForm.classList.add("was-validated");
                formMessage.className = "alert alert-danger";
                formMessage.textContent = "Please fill all the fields correctly.";
            } else {
                formMessage.className = "alert alert-success";
                formMessage.textContent = "Thank you! Your message has been submitted.";
                contactForm.reset();
                contactForm.classList.remove("was-validated");
            }
        });
    }

    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});
