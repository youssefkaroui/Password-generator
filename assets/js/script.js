// Assignment code here

// a function to get the lenght of the password as an input from the user in the for of an interger
function getLength ()  {
  var promptLength= window.prompt("What would you like the length of the password to be?")
  promptLength = parseInt (promptLength)
  if (isNaN(promptLength)){
    window.alert("Pgit lease enter a numeric value");
    return getLength();

  }

  if (promptLength < 8 || promptLength > 128) {
    window.alert("Please enter a number between 8 and 128");
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
  var wantsUppers = window.confirm("Would you like upper case characters?");
  if (wantsUppers) {
    promptCharacters+= possibleCharacters.uppers;
  }
  var wantsLowers = window.confirm("Would you like lower case characters?");
  if (wantsLowers) {
    promptCharacters+=possibleCharacters.lowers;
  }
  var wantsNumbers= window.confirm ("Would you like numeric characters?");
  if (wantsNumbers) {
    promptCharacters+=possibleCharacters.numbers;
  }
  var wantsSymbols= window.confirm("Would you like symbol characters?")
  if (wantsSymbols) {
    promptCharacters+= possibleCharacters.symbols;
  }
  if (!wantsLowers & !wantsUppers & !wantsNumbers & !wantsSymbols ) {
    window.alert("Please select at least one character type");
    return getCharacters();
    

  }
  return (promptCharacters);
}
// generate a password using the user input: getLength and getCharacters
function generatePassword () {
  var length = getLength();
  var characters= getCharacters();

  var password="";
  for ( i=0; i< length; i++) {
    var random=Math.floor(Math.random()* characters.length)
    password=password +characters[random];

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