//Assignment Code
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var messaagePrompt;

  passwordText.value = password;

}

var numbers = [0,1,2,3,4,5,6,7,8,9]
var lowercaseLetters = [a,b,c,d,e,f,g,h,i,j,k.l,]

function question1() {
   messagePrompt = prompt('How many characters would you like your password to contain');
}

if(messagePrompt ==  ) {

}



// Add event listener to generate button
generateButton.addEventListener("click", question1)


// // GIVEN I need a new, secure password
// // WHEN I click the button to generate a password
// // THEN I am presented with a series of prompts for password criteria


// // WHEN prompted for password criteria
// // THEN I select which criteria to include in the password


// // WHEN prompted for the length of the password
// // THEN I choose a length of at least 8 characters and no more than 128 characters


// // WHEN asked for character types to include in the password
// // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// // WHEN I answer each prompt
// // THEN my input should be validated and at least one character type should be selected


// // WHEN all prompts are answered
// // THEN a password is generated that matches the selected criteria


// // WHEN the password is generated
// // THEN the password is either displayed in an alert or written to the page

