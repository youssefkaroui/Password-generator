// Assignment code here

// a function to get the lenght of the password as an input from the user in the for of an interger
function getLength ()  {
  var promptLength= window.prompt("What would you like the length of the password to be?")
  promptLength = parseInt (promptLength)
  if (isNaN(promptLength)){
    window.alert("please enter a numeric value")
    return getLength();

  }

  if (promptLength < 8 || promptLength > 128) {
    window.alert("please enter a number between 8 and 128")
    return getLength()
    

  }
  return promptLength;

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);