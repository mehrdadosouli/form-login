const username = document.querySelector("#username");
const userpass = document.querySelector("#password");


const Submit = document.querySelector(".form");
let typeValide = null;
// -----------event listener submit

const getuser= JSON.parse(localStorage.getItem("userInfo"));


Submit.addEventListener("submit", (event) => {
  event.preventDefault();
  if ((getuser.username == username.value.trim() || getuser.useremail == username.value.trim()) && getuser.userpass == userpass.value.trim()) {
    validation("لاگین شدید", true);
    window.location.href = "index.html";
  } else {
    validation("نام کاربری یا پسورد را درست وارد کنید", false);
    username.value = "";
    userpass.value = "";
  }

});
// -----------event listener username input
username.addEventListener("blur", () => {

  if (getuser.username == username.value.trim()) {
    typeValide = true;
    const validTitleError = "ok";
    validation(validTitleError, typeValide);
  } else {
    const validTitleError = " نام کاربری اشتباه است";
    typeValide = false;
    validation(validTitleError, typeValide);
  }

});
// -----------event listener password input
userpass.addEventListener("blur", () => {

  if (getuser.userpass !== userpass.value) {
    const validTitleError = " پسورد اشتباه است";
    typeValide = false;
    validation(validTitleError, typeValide);
  } else {
    typeValide = true;
    const validTitleError = " ok";
    validation(validTitleError, typeValide);
  }
});

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
