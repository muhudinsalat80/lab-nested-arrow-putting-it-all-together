// Simple Login System using Nested Functions
function createLoginTracker(user) {
  let attempts = 0;
  const maxAttempts = 3;
  let locked = false;

  return (password) => {
    if (locked) {
      return "Account locked due to too many failed login attempts";
    }

    if (password === user.password) {
      return "Login successful";
    } else {
      attempts++;
      // Lock after the last allowed attempt
      if (attempts >= maxAttempts) {
        locked = true;
      }
      return `Attempt ${attempts}: Login failed`;
    }
  };
}

// Example usage
const mockUser = { username: "user1", password: "password123" };
const userLogin = createLoginTracker(mockUser);

console.log(userLogin("wrong")); // Attempt 1: Login failed
console.log(userLogin("1234"));  // Attempt 2: Login failed
console.log(userLogin("0000"));  // Attempt 3: Login failed
console.log(userLogin("password123")); // Account locked due to too many failed login attempts






module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};



