// Validation function
function validateUser(username, email, password) {
    // Implement your validation logic here
    // Return an object indicating if the validation succeeded and an error message if it failed
  
    // Example validation checks
    if (!username || !email || !password) {
      return {
        valid: false,
        error: 'Please provide all required fields.'
      };
    }
  
    if (password.length < 6) {
      return {
        valid: false,
        error: 'Password must be at least 6 characters long.'
      };
    }
  
    return {
      valid: true
    };
  }