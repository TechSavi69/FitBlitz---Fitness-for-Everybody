document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#myForm"); // Replace with your form's ID
    const emailInput = document.querySelector("#email"); // Replace with your email input's ID
    const errorMessage = document.querySelector("#error-message"); // Replace with your error message element's ID

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Email validation
        if (!emailInput.value.includes("@")) {
            isValid = false;
            errorMessage.textContent = "Please enter a valid email address.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
});
