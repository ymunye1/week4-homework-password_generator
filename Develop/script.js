//Assignment Code
//pull the button from html id and store it to a varible generateButton
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //placeholder for generated password. pulled from id password on html page and stored in variable passwordText
  var passwordText = document.querySelector("#password");
  var messagePrompt;

  passwordText.value = password;

}

// array for lower case letters
var numbers = [0,1,2,3,4,5,6,7,8,9]
// array for upper case letters
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//array for uppercase letters, calling lowercase letters then mapping to make upper case letters
var upperCaseLetters= (lowerCaseLetters.map(lowerCaseLetters => lowerCaseLetters .toUpperCase()));
//arrays for special characters
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "[", "}", "]", "|", ";", ":", "'", '"',  ',',  "<", ">", '.', '?', '/'];

//create a function named questionOne that holds the prompt results if it passes  or fails the criteria below
function questionOne() {
  //create a prompt asking for number of characters between 8-128 named variable messagePrompt
  messagePrompt = prompt('How many characters would you like your password to contain. Enter a number bewteen 8 and 128.');
  // if message prompt is both less than 129 and greater than 7
  if (messagePrompt <129 && messagePrompt >7){
   // use the function object element to create object element and store the result of messagePrompt in a variable named promptResultOne  
    var promptOneResult = document.createElement(messagePrompt)
  // else if its not both less than 129 and greater than 7 create an alert saying, Please try again. Write a number  between 8-128.
  }else{
      alert('Please try again. Write a number  between 8-128.');
}



//if(messagePrompt ==  ) {

}



// Add event listener to generate button
generateButton.addEventListener("click", questionOne)


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

