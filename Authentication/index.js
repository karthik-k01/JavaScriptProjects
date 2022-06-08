let passwordStoredInDb = "";

let signUpInputPassword = document.getElementById("sign-up-password");
let signUpValid = document.getElementById("sign-up-valid");
let loginInputPassword = document.getElementById("login-password");
let logInValid = document.getElementById("login-valid");
let logInInvalid = document.getElementById("login-invalid");
let passwordStrength = document.getElementById("password-strength");

const signUp = () => {
  let inputPassword = signUpInputPassword.value;
  passwordStoredInDb = encode(inputPassword);
  console.log(passwordStoredInDb);
  signUpValid.style.display = "block";
};

const logIn = () => {
  let inputPassword = loginInputPassword.value;
  if (inputPassword === decode(passwordStoredInDb)) {
    logInValid.style.display = "block";
    logInInvalid.style.display = "none";
  } else {
    logInInvalid.style.display = "block";
    logInValid.style.display = "none";
  }
};
const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  a: "n",
  b: "o",
  c: "p",
  d: "q",
  e: "r",
  f: "s",
  g: "t",
  h: "u",
  i: "v",
  j: "w",
  k: "x",
  l: "y",
  m: "z",
  n: "a",
  o: "b",
  p: "c",
  q: "d",
  r: "e",
  s: "f",
  t: "g",
  u: "h",
  v: "i",
  w: "j",
  x: "k",
  y: "l",
  z: "m",
  0: "5",
  1: "6",
  2: "7",
  3: "8",
  4: "9",
  5: "0",
  6: "1",
  7: "2",
  8: "3",
  9: "4",
  "!": "#",
  $: "%",
  "&": "+",
  "-": "@",
  _: "~",
  "#": "!",
  "%": "$",
  "+": "&",
  "@": "-",
  "~": "_",
};

const encode = (inputString) => {
  const lookupKeys = Object.keys(lookup);
  const lookupValues = Object.values(lookup);
  const codeArr = inputString.split("");
  let encodedArr = codeArr.map((codeArrChar) => {
    let index = lookupValues.findIndex((element) => element === codeArrChar);
    return lookupKeys[index];
  });
  return encodedArr.join("");
};

const decode = (encodeStr) => {
  const codeArr = encodeStr.split("");
  let decodedArr = codeArr.map((codeArrChar) => lookup[codeArrChar]);
  return decodedArr.join("");
};


const checkPasswordStrength = () => {

  if (signUpInputPassword.value.length < 5) {
    passwordStrength.style.display = "block";
    passwordStrength.innerText = "Weak";
    passwordStrength.style.color = "red";
  } else if (signUpInputPassword.value.length < 8) {
    passwordStrength.style.display = "block";
    passwordStrength.innerText = "moderate";
    passwordStrength.style.color = "orange";
  } else {
    passwordStrength.style.display = "block";
    passwordStrength.innerText = "Strong";
    passwordStrength.style.color = "green";
    }
};



