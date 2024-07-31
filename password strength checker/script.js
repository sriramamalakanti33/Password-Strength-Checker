function checkPasswordStrength(password) {
  // Check password length
  if (password.length < 8) {
      return "Weak: Password should be at least 8 characters long.";
  }

  // Check complexity using regular expressions
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]/.test(password);

  const complexityScore = hasUppercase + hasLowercase + hasNumber + hasSymbol;

  // Check uniqueness (You should maintain a list of common passwords and compare here)
  const commonPasswords = ["password", "123456", "qwerty", "admin", "letmein"];
  if (commonPasswords.includes(password.toLowerCase())) {
      return "Weak: Commonly used password.";
  }

  // Determine password strength based on complexity score
  if (complexityScore < 3) {
      return "Moderate: Password could be stronger.";
  } else {
      return "Strong: Password is secure.";
  }
}

// Add event listener to the "Check" button
document.getElementById("checkButton").addEventListener("click", function() {
  const password = document.getElementById("password").value;
  const result = checkPasswordStrength(password);
  document.getElementById("result").textContent = result;
});
