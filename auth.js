// Demo-only authentication using browser localStorage. Do not use for real accounts.
const message = document.getElementById("authMessage");
const getUsers = () => JSON.parse(localStorage.getItem("elevateDemoUsers") || "[]");

document.getElementById("signupForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("signupEmail").value.trim().toLowerCase();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("confirmPassword").value;
  if (password !== confirm) { message.textContent = "Passwords do not match."; return; }
  const users = getUsers();
  if (users.some(user => user.email === email)) { message.textContent = "This email is already registered. Please login."; return; }
  users.push({name, email, phone, password});
  localStorage.setItem("elevateDemoUsers", JSON.stringify(users));
  message.textContent = "Account created for this browser demo. You can now login.";
  e.target.reset();
});

document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const user = getUsers().find(u => u.email === email && u.password === password);
  if (!user) { message.textContent = "Invalid email or password, or no demo account exists."; return; }
  localStorage.setItem("elevateDemoLoggedIn", user.email);
  message.textContent = `Welcome, ${user.name}! Demo login successful.`;
});
