const regForm = document.getElementById("reg-form");
const userName = document.getElementById("name");
const userEmail = document.getElementById("email");
const userPswrd = document.getElementById("pswd");

const formValidate = (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !userName.value.trim() ||
    !userEmail.value.trim() ||
    !userPswrd.value.trim()
  ) {
    alert("Fields cannot be empty");
    return;
  }

  if (!userName.value.trim()) {
    alert("Name cannot be empty");
    return;
  }

  if (!userEmail.value.trim()) {
    alert("Email cannot be empty");
    return;
  }

  if (!emailRegex.test(userEmail.value.trim())) {
    alert("Enter a valid email");
    return;
  }

  if (userPswrd.value.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  alert("Registration successful!");
  regForm.reset();
};
regForm.addEventListener("submit", formValidate);
