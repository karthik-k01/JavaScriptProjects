function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;
  let tncCheckBox = document.getElementById("tncCheck").checked;                  //For checking the value of uncheck and check




  let firstNameInvalid = document.getElementById("firstNameInvalid")
  let firstNameValid = document.getElementById("firstNameValid")
  let lastNameInvalid = document.getElementById("lastNameInvalid")
  let lastNameValid = document.getElementById("lastNameValid")
  let emailValid = document.getElementById("emailValid")
  let emailInvalid = document.getElementById("emailInvalid")
  let phoneNumberValid = document.getElementById("phoneNumberValid")
  let phoneNumberInvalid = document.getElementById("phoneNumberInvalid")
  let zipCodeValid = document.getElementById("zipCodeValid")
  let zipCodeInvalid = document.getElementById("zipCodeInvalid")
  let tncInvalid = document.getElementById("tncInvalid")
  let stateValid = document.getElementById("stateValid")
  let stateInvalid = document.getElementById("stateInvalid")


  console.log(firstName, lastName, email, phoneNumber, state, zipCode);

  if (firstName === '') {
    firstNameInvalid.style.display = "block"
    firstNameValid.style.display ="none"
  } else {
    firstNameValid.style.display = "block"
    firstNameInvalid.style.display ="none"
  }

  if (lastName === '') {
    lastNameInvalid.style.display = "block"
    lastNameValid.style.display ="none"
  } else {
    lastNameValid.style.display = "block"
    lastNameInvalid.style.display ="none"
  }

  if (email === '' || !email.includes("@") || email.startsWith("@") || !email.includes(".") || email.slice(email.lastIndexOf(".")+1).length < 2) {
    emailInvalid.style.display = "block"
    emailValid.style.display = "none"
  } else {
    emailValid.style.display = "block"
    emailInvalid.style.display = "none"
  }

  if (phoneNumber === '' || phoneNumber.length != 10 || Number(phoneNumber[0]) < 6) {
    phoneNumberInvalid.style.display = "block"
    phoneNumberValid.style.display ="none"
  } else {
    phoneNumberValid.style.display = "block"
    phoneNumberInvalid.style.display ="none"
  }

  if (zipCode === '' || zipCode.length != 6) {
    zipCodeInvalid.style.display = "block"
    zipCodeValid.style.display ="none"
  } else {
    zipCodeValid.style.display = "block"
    zipCodeInvalid.style.display ="none"
  }

  if (!tncCheckBox) {
    tncInvalid.style.display = "block"
  } else {
    tncInvalid.style.display = "none"
  }

  if (state === "") {
    stateInvalid.style.display = "block"
    stateValid.style.display = "none"
  } else {
    stateValid.style.display = "block"
    stateInvalid.style.display = "none"
  }
}
