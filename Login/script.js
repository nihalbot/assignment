var userId = document.querySelector('#userid');
var nameError = document.querySelector('.iderror');
var checkIcon = document.querySelector('#check');
var checkpassword = document.querySelector('#password');
var passwordError = document.querySelector(".passwordError");
var eyeIcon = document.querySelector('#icon');
var toastBox = document.querySelector(".toastBox");
var successMsg = '<i class="fa-solid fa-circle-check"></i> Login Successfuly';
var errorMsg =
  '<i class="fa-solid fa-circle-xmark"></i>User ID or Password is wrong';
var btn = document.querySelector('#submit');

function showToast(message){
   var toast = document.createElement('div');
   toast.innerHTML = message;
   toast.classList.add('toast');
   toastBox.appendChild(toast);
   
   if(message.match('ID')){
     toast.classList.add("error");
   }
   
   setTimeout(()=>{
    toast.remove();
   }, 6000);
}

function showPass() {
    if(checkpassword.type === 'password'){
        checkpassword.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add("fa-eye");
    }
    else{
        checkpassword.type = "password";
         eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
       
    }
}
function checkName(){
     if (userId.value.length === 0) {
       nameError.innerHTML = "user id is requried";
       checkIcon.style.visibility = "hidden";
       return false;
     }
    if (!userId.value.match(/^[0-9]+$/)) {
      nameError.innerHTML = "Only digit is allowed";
      checkIcon.style.visibility = "hidden";
      return false;
    }
    nameError.innerHTML = " ";
    checkIcon.style.visibility = 'visible';
    return true;
    
}
function checkPassword(){
    if(checkpassword.value.length === 0){
        passwordError.innerHTML = 'input password';
        return false;
    }
   passwordError.innerHTML = ' '; 
   return true;
}


btn.addEventListener('click', ()=>{
    if(userId.value === '123' && checkpassword.value === '123'){
        showToast(successMsg);
    }
    else{
        showToast(errorMsg);
    }
});