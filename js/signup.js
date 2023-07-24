const form = document.querySelector(".form");
const username = document.querySelector("#username");
const useremail = document.querySelector("#useremail");
const password = document.querySelector("#password");
const repeatpassword = document.querySelector("#repeatpassword");
const checkbox = document.querySelector("#form-footer__rememberMe-text");
let flag=true;
window.addEventListener('load',()=>{
  validations();
})
const array = [] ;

 form.addEventListener("submit", (event) => {
  event.preventDefault();
  
    if (username.value.trim() !== "" && useremail.value.trim() !== "" && password.value.trim() !== "" && repeatpassword.value.trim() !== "" && flag) {
      const obj = {
        username: username.value.trim(),
        userpass: password.value.trim(),
        useremail:useremail.value.trim()
      };
      if (checkbox.checked) {
        array.push(obj)
          localStorage.setItem("userInfo", JSON.stringify(obj))
          location.href="index.html"
      }
    }else{
      const validTitleError = "اینپوت ها را بررسی کنید";
      typeValide = false;
      validation(validTitleError, typeValide);
    }
    
    username.value = "";
    useremail.value = "";
    password.value = "";
    repeatpassword.value = "";
  

  })
// ------------------validations------------------------
const validations = () => {
  password.addEventListener("blur", () => {
    if (password.value.trim() == "" || password.value.trim().length < 6) {
      const validTitleError = "   تعداد ان کمتر از 6 کاراکتر است";
      typeValide = false;
      validation(validTitleError, typeValide);
    } else {
      typeValide = true;
      const validTitleError = " ok";
      validation(validTitleError, typeValide);
    }
  });
  repeatpassword.addEventListener("blur", () => {
    if (password.value.trim() !== repeatpassword.value.trim() || repeatpassword.value.trim().length < 6 || password.value.trim() == "") {
      const validTitleError = " پسورد را بررسی کنید";
      typeValide = false;
      validation(validTitleError, typeValide);
    } else {
      typeValide = true;
      const validTitleError = "ok";
      validation(validTitleError, typeValide);
    }
  });
  username.addEventListener("blur", () => {
    if (username.value.length < 7 || username.value.trim() == "") {
      const validTitleError = " نام و نام خانوادگی را بررسی کنید";
      typeValide = false;
      validation(validTitleError, typeValide);
    } else {
      typeValide = true;
      const validTitleError = "ok";
      validation(validTitleError, typeValide);
    }
  });
  useremail.addEventListener("blur", () => {
    if (useremail.value.length < 7 || getingEmail() ) {
      const validTitleError = "تعداد کاراکتر ایمیل کمتر از 7 کاراکتر می باشد";
      typeValide = false;
      validation(validTitleError, typeValide);
    }
  });
};

const getingEmail=()=>{
  const getlocal=JSON.parse(localStorage.getItem('userInfo'))
  getlocal.forEach(user => {
    if(useremail.value.trim()==user.useremail  ){
      const validTitleError = "ایمیل قبلا ثبت نام شده است";
      typeValide = false;
      validation(validTitleError, typeValide);
    
    
    flag=false;
    }else{
      typeValide = true;
      const validTitleError = " ok";
      validation(validTitleError, typeValide);
      flag=true
    }
  });
  
}

// -----------function validation inputs
const validation = (titlename, typeValide) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: typeValide ? "success" : "error",
    title: titlename,
  });
};
