// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericalChar = "0123456789";
var specialChar = "!#$%&'()*+-./:;<=>?@[^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Added a variable for the randomly generated password.
var genPassword = "";

//This function will set up all of my alerts and tell the user what kin of characters will be in the password.
function generatePassword() {

  var charList = "";

  var passwordLength = prompt(
    "How many characters would you like in your password? Choose between 8-128."
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("invalid");
    return;
  }
  var isLowercase = confirm(
    "CLick 'OK' if password requires lowercase letters."
  );

  if (isLowercase) {
    charList += lowercaseChar;
  }

  var isUppercase = confirm(
    "CLick 'OK' if password requires lowercase letters."
  );

  if (isUppercase) {
    charList += uppercaseChar;
  }

  var isNumerical = confirm("Click 'OK' if password requires numbers.");

  if (isNumerical) {
    charList += numericalChar;
  }

  var isSpecial = confirm(
    "Click 'OK' if password requires special characters."
  );

  if (isSpecial) {
    charList += specialChar;
  }
  // return charList;

  // Randomly generates password for user determined length
  for (i = 0; i < passwordLength; i++) {
  genPassword += charList.charAt(Math.floor(Math.random() * charList.length));
  }
if (genPassword==""){
  var error = "Try again!";
  return error
}
  return genPassword;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
