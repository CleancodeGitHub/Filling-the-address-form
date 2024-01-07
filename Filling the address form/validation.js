function validateForm() {
      // Add your form validation logic here
      var username = document.getElementById("form-username").value;
      var password = document.getElementById("form-password").value;
      var confirmPassword = document.getElementById("form-password-check").value;

      var firstName = document.getElementById("form-first-name").value;
      var lastName = document.getElementById("form-last-name").value;
      var email = document.getElementById("form-email").value;
      var phone = document.getElementById("form-phone").value;

      var address = document.getElementById("form-address").value;
      var city = document.getElementById("form-city").value;
      var state = document.getElementById("form-state").value;
      var postalCode = document.getElementById("form-postal-code").value;
      var country = document.getElementById("form-country").value;

      var contactEmail = document.getElementById("form-contact-email").value;
      var subject = document.getElementById("form-contact-subject").value;
      var message = document.getElementById("form-contact-message").value;

      var fullName = document.getElementById("form-full-name").value;

      // Basic validation: Check if required fields are not empty
      if (username === "" || password === "" || confirmPassword === "" ||
        firstName === "" || lastName === "" || email === "" || phone === "" ||
        address === "" || city === "" || state === "" || postalCode === "" || country === "" ||
        contactEmail === "" || subject === "" || message === "" || fullName === "") {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
      }

      // Additional validation logic can be added here

      return true; // Allow form submission
    }