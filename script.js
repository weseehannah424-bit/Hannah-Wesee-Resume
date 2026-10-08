function showMessage() {

    const message =
        document.getElementById("profile-message");

    message.textContent =
        "Thank you for visiting Hannah Wesee's professional portfolio!";

}


document
    .getElementById("show-message")
    .addEventListener("click", showMessage);


document
    .getElementById("contact-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        document.getElementById("profile-message").textContent =
            "Thank you! Your message has been received.";

        this.reset();

    });