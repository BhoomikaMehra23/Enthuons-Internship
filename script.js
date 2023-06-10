function validateForm()
{
            // it is used for retrieving  the values entered bt he user
            var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;
        var salary = document.getElementById("salary").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;


        // they retrieve the elements where the error messages will be displayed
        var usernameError = document.getElementById("usernameError");
        var emailError = document.getElementById("emailError");
        var ageError = document.getElementById("ageError");
        var salaryError = document.getElementById("salaryError");
        var passwordError = document.getElementById("passwordError");
        var confirmPasswordError = document.getElementById("confirmPasswordError");

        // it will reset the content of the error messages to empty string
        usernameError.textContent = "";
        emailError.textContent = "";
        ageError.textContent = "";
        salaryError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        var isValid = true;
        if (username === "") {
        usernameError.textContent = "Please enter your username";
        isValid = false;
        }
        else if (username.length < 3) {
        usernameError.textContent = "Username should be at least 3 characters";
        isValid = false;
        } 
        else if (/\d/.test(username)) {
        usernameError.textContent = "Username should not contain numbers";



    var isValid = true;
        if (username === "") {
        usernameError.textContent = "Please enter your username";
        isValid = false;
        }
        else if (username.length < 3) {
        usernameError.textContent = "Username should be at least 3 characters";
        isValid = false;
        } 
        else if (!/^[a-zA-Z]+$/.test(username)) {
        usernameError.textContent = "Username should only contain alphabets";
        isValid = false;
        }



        

        if (email === "") {
            emailError.textContent = "Please enter your email";
            isValid = false;
        } else if (!isValidEmail(email)) {
            emailError.textContent = "Please enter a valid email address";
            isValid = false;
        }

        if (age === "") {
            ageError.textContent = "Please enter your age";
            isValid = false;
        } else if (isNaN(age) || age <= 0) {
            ageError.textContent = "Please enter a valid age";
            isValid = false;
        }

        if (salary === "") {
            salaryError.textContent = "Please enter your salary";
            isValid = false;
        } else if (isNaN(salary) || salary <= 0) {
            salaryError.textContent = "Please enter a valid salary";
            isValid = false;
        }

        if (password === "") {
                passwordError.textContent = "Please enter your password";
                isValid = false;
            } else if (password.length < 6) {
                passwordError.textContent = "Password should be at least 6 characters long";
                isValid = false;
            } else if (!isStrongPassword(password)) {
                passwordError.textContent = "Password should be strong";
                isValid = false;
            }


            if (confirmPassword === "") {
                confirmPasswordError.textContent = "Please confirm your password";
                isValid = false;
            } else if (confirmPassword !== password) {
                confirmPasswordError.textContent = "Passwords do not match";
                isValid = false;
            }

        if (isValid) {
            alert("Registration Successful!");
        } else {
            alert("Please fix the errors in the form");
        }

        return isValid;
    }

    function isValidEmail(email) {
        // Simple email validation regex
        var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    }
    function isStrongPassword(password) {
var minLength = 8;
var hasUpperCase = /[A-Z]/.test(password);
var hasLowerCase = /[a-z]/.test(password);
var hasNumber = /\d/.test(password);
// Remove the specific set of special characters condition
var hasSpecialChar = /[!@#$%^&*()_+\-=]/.test(password);

return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialChar
    );
}
}
