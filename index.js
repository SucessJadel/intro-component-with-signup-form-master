const form = document.getElementById("form");
const username = document.getElementById("username");
const lastname = document.getElementById("lastname");
const password = document.getElementById("password");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const usernameValue = username.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    //show error
    //add error class
    setErrorFor(username, "Firstname cannot be empty");
  } else {
    //add success class
    setSuccessFor(username);
  }

  if (lastnameValue === "") {
    //show error
    //add error class
    setErrorFor(lastname, "Lastname cannot be empty");
  } else {
    //add success class
    setSuccessFor(lastname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }

  //show a success message
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //.form-control
  const small = formControl.querySelector("small");

  //add error message inside snall
  small.innerText = message;

  //add error class
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^[^]+@[^]+\.[A-Z]{2,3}$/.test(email);
}
// function isEmail(email) {
//   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//     return true;
//   }
//   alert("You have entered an invalid email address!");
//   return false;
// }

// const form = document.querySelectorAll("input");

// // if (input === null) {
// //   return "[Field Name] cannot be empty";
// // }

// // $("input[type='text'").keypress(function(event){
// //     if(event.which === 13){
// //         var todoText = $(this).val();
// //         $(this).val("");
// //         $("ul").append("<li><span>X</span> " + todoText + "</li>")
// //     }
// // });

// for (var i = 0; i < form.length; i++) {
//   form.addEventListener("click", function () {
//     console.log(form);
//   });
// }
// // console.log(form);

// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
