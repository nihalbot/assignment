var stuId = document.querySelector("#studentid");
var showError = document.querySelector(".showidError");
var shownameError = document.querySelector(".shownameError");
var fullName = document.querySelector("#flname");
var email = document.querySelector("#email");
var emailError = document.querySelector(".emailError");
var password = document.querySelector("#password");
var passwordError = document.querySelector(".passwordError");
var mobile = document.querySelector("#mobile");
var mobileError = document.querySelector(".mobileError");
var dept = document.querySelector("#dept");
var deptError = document.querySelector(".deptError");
var submit_error = document.querySelector(".submitError"); 
var submitBtn = document.getElementById("submit");
var okBtn = document.querySelector('#ok');
var popup = document.querySelector(".popup");
var form = document.querySelector("#form");





submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (checkValidation()) {
     popup.classList.add("popup_show");
      form.remove();
    
  }
});
okBtn.addEventListener("click", function () {
  popup.classList.remove("popup_show");
  
});
function checkValidation() {
  let valid = true; 


  if (!checkId()) valid = false;
  if (!deptCheck()) valid = false;
  if (!checkMobile()) valid = false;
  if (!checkPassword()) valid = false;
  if (!checkEmail()) valid = false;
  if (!checkName()) valid = false;


  if (!valid) {
    submit_error.style.display = "block";
    submit_error.innerHTML = "Please fix the errors to submit.";
    setTimeout(function () {
      submit_error.style.display = "none";
    }, 3000);
  }

  return valid; 
}


function deptCheck() {
  if (dept.value === "notselect") {
    deptError.innerHTML = "Choose a department";
    deptError.style.display = "block";
    dept.classList.add("error-custom-input");
    return false; 
  } else {
    deptError.innerHTML = "";
    deptError.style.display = "none";
    dept.classList.remove("error-custom-input");
    return true; 
  }
}

// Mobile validation function
function checkMobile() {
  if (mobile.value.length === 0) {
    mobileError.innerHTML = "Mobile is required";
    mobile.classList.add("error-custom-input");
    return false;
  }
  if (mobile.value.length != 11) {
    mobileError.innerHTML = "Number should be 11 digits";
    mobile.classList.add("error-custom-input");
    return false;
  }
  if (!mobile.value.match(/^[0-9]*$/)) {
    mobileError.innerHTML = "Only digits allowed";
    mobile.classList.add("error-custom-input");
    return false;
  }

  mobile.classList.remove("error-custom-input");
  mobile.classList.add("success-custom-input");
  mobileError.innerHTML = " ";
  return true;
}


function checkPassword() {
  if (password.value.length === 0) {
    passwordError.innerHTML = "Password is required";
    password.classList.add("error-custom-input");
    return false;
  }
  passwordError.innerHTML = " ";
  password.classList.remove("error-custom-input");
  password.classList.add("success-custom-input");
  return true; // Return true if validation passes
}

// Email validation function
function checkEmail() {
  if (email.value.length === 0) {
    emailError.innerHTML = "Email is required";
    email.classList.add("error-custom-input");
    return false;
  }
  if (
    !email.value.match(/^[A-Za-z][A-Za-z0-9._-]*@[A-Za-z0-9.-]+\.[a-z]{2,4}$/)
  ) {
    emailError.innerHTML = "Enter a valid email";
    email.classList.add("error-custom-input");
    return false;
  }
  emailError.innerHTML = " ";
  email.classList.remove("error-custom-input");
  email.classList.add("success-custom-input");
  return true; // Return true if validation passes
}

// Name validation function
function checkName() {
  if (fullName.value.length === 0) {
    shownameError.innerHTML = "Required field";
    fullName.classList.add("error-custom-input");
    return false;
  }
  if (fullName.value.match(/^[0-9]*$/)) {
    shownameError.innerHTML = "Digits are not allowed";
    fullName.classList.add("error-custom-input");
    return false;
  }
  if (!fullName.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    shownameError.innerHTML = "Write full name";
    fullName.classList.add("error-custom-input");
    return false;
  }
  shownameError.innerHTML = " ";
  fullName.classList.remove("error-custom-input");
  fullName.classList.add("success-custom-input");
  return true; 
}

// Student ID validation function
function checkId() {
  if (stuId.value.length === 0) {
    showError.innerHTML = "Required field";
    stuId.classList.add("error-custom-input");
    return false;
  }
  if (!stuId.value.match(/^[0-9]+$/)) {
    showError.innerHTML = "Only digits are allowed";
    stuId.classList.add("error-custom-input");
    return false;
  }
  showError.innerHTML = " ";
  stuId.classList.remove("error-custom-input");
  stuId.classList.add("success-custom-input");
  return true; 
}


