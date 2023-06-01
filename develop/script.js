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
// function to get the desired character type from the user by prompting them to a series of questions
function getCharacters() {
  var possibleCharacters ={
    uppers: "ABCDEFGHIGKLMNOPQRSTUVWXYZ",
    lowers:"abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols:"~!@#$%^&*()_+=-`"
  }
  var promptCharacters="";
  // if statements for desired character type
  var wantsUppers = window.confirm(" would you like upper case cgaracters?")
  if (wantsUppers) {
    promptCharacters+= possibleCharacters.uppers;
  }
  var wantsLowers = window.confirm("would you like lower case characters?")
  if (wantsLowers) {
    promptCharacters+=possibleCharacters.lowers;
  }
  var 
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