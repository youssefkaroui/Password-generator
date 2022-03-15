// Assignment code here
for (let i=0 ; i<5 ; i++) {
  console.log (Math.random() *5 );

}

function getLength() {
  // get length as an input from the user; if input is somehow inocrrect (not a number or not the write number), ask again
  var promptLength = window.prompt("What would you like the length of the password to be")
  promptLength = parseInt(promptLength)

  if (isNaN(promptLength)) {
    window.alert("please enter a numeric value")
    return getLength();
  } 

  if (promptLength < 8 || promptLength > 128) {
    window.alert("please enter at least 8 and no more than 128")
    return getLength()
  }

  return promptLength;
  
}

function getCharacters() {
  // get characters desired from user; if user selects no characters, tell them they must, ask again
  var possibleCharacters = {
    lowers: "abcdefghijklmnopqrstuvwxyz",
    uppers: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "~!@#$%^&*()_+=-`"
  }
  var promptCharacters = "";
  var wantsLowers = window.confirm("do you want lower case characters?")
  if (wantsLowers) {
    promptCharacters+=possibleCharacters.lowers;
  }
  var wantsUppers =window.confirm("do you want upper case characters?")
  if (wantsUppers) {
    promptCharacters+=possibleCharacters.uppers;
  }
  var wantsNumbers= window.confirm ("do you want numeric characters?")
  if (wantsNumbers) {
    promptCharacters+=possibleCharacters.numbers;
  }
  var wantsSymbols= window.confirm("do you want symbol characters?")
  if (wantsSymbols) {
    promptCharacters+= possibleCharacters.symbols;
  }
  return (promptCharacters);
  // return a string

}

function generatePassword() {
  var length = getLength() // get us the length of the password

  var characters = getCharacters(); 
  
  var password="";
  for (var  i=0; i< length; i++) {
   var random= Math.floor(Math.random()* characters.length )
 
   password= password + characters[random];

  }

  return password;
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
