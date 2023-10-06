// Retrieve data from local storage if it exists
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Get form elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const logoutButton = document.getElementById("logout-button");
const welcomeMessage = document.getElementById("welcome-message");

// Handle login form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get user input
  const username = event.target.username.value;
  const password = event.target.password.value;

  // Check if user exists
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // Set current user in local storage and display welcome message
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    welcomeMessage.innerText = `Hello ${currentUser.username}!`;
    welcomeMessage.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
  } else {
    alert("Incorrect username or password.");
  }
  
  // Reset form
  loginForm.reset();
});// Retrieve data from local storage if it exists
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Get form elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const logoutButton = document.getElementById("logout-button");
const welcomeMessage = document.getElementById("welcome-message");

// Handle login form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get user input
  const username = event.target.username.value;
  const password = event.target.password.value;

  // Check if user exists
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    // Set current user in local storage and display welcome message
    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    welcomeMessage.innerText = `Hello ${currentUser.username}!`;
    welcomeMessage.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
  } else {
    alert("Incorrect username or password.");
  }
  
  // Reset form
  loginForm.reset();
});

// Handle register form submission
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get user input
  const username = event.target.username.value;
  const password = event.target.password.value;

  // Check if username is available
  const usernameAvailable = !users.some(user => user.username === username);
  if (usernameAvailable) {
    // Add new user to list and set in local storage
    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Set current user and display welcome message
    currentUser = newUser;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    welcomeMessage.innerText = `Hello ${currentUser.username}!`;
    welcomeMessage.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
  } else {
    alert("Username already taken. Please choose a different username.");
  }
  
  // Reset form
  registerForm.reset();
});

// Handle logout button click
logoutButton.addEventListener("click", () => {
  // Clear current user from local storage and hide welcome message and logout button
  currentUser = null;
  localStorage.removeItem("currentUser");
  welcomeMessage.classList.add("hidden");
  logoutButton.classList.add("hidden");
});


// Handle register form submission
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get user input
  const username = event.target.username.value;
  const password = event.target.password.value;

  // Check if username is available
  const usernameAvailable = !users.some(user => user.username === username);
  if (usernameAvailable) {
    // Add new user to list and set in local storage
    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    
    // Set current user and display welcome message
    currentUser = newUser;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    welcomeMessage.innerText = `Hello ${currentUser.username}!`;
    welcomeMessage.classList.remove("hidden");
    logoutButton.classList.remove("hidden");
  } else {
    alert("Username already taken. Please choose a different username.");
  }
  
  // Reset form
  registerForm.reset();
});

// Handle logout button click
logoutButton.addEventListener("click", () => {
  // Clear current user from local storage and hide welcome message and logout button
  currentUser = null;
  localStorage.removeItem("currentUser");
  welcomeMessage.classList.add("hidden");
  logoutButton.classList.add("hidden");
});
