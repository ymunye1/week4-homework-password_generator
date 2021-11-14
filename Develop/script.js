//Assignment Code


//created a global variable named messagePrompt
var messagePrompt;
//created a global variable named lowerCaseConfirm
var lowerCaseConfirm;
//created a global variable named upperCaseConfirm
var upperCaseConfirm;
//created a global variable named numbersConfirm
var numbersConfirm;
//created a global variable named specialCharConfirm
var specialCharConfirm;
//created a global variable named randomLowerCaseAns
var randomLowerCaseAns;
//created a global variable named randomUpperCaseAns
var randomUpperCaseAns;
//created a global variable named randomNumbersAns
var randomNumbersAns;
//created a global variable named randomSpecialCharAns
var randomSpecialCharAns;


//pull the button from html id and store it to a varible generateButton
var generateButton = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //placeholder for generated password. pulled from id password on html page and stored in variable passwordText
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}


// array for lower case letters
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//array for uppercase letters, calling lowercase letters then mapping to make upper case letters
var upperCaseLetters= (lowerCaseLetters.map(lowerCaseLetters => lowerCaseLetters .toUpperCase()));
// array for numbers
var numbers = [0,1,2,3,4,5,6,7,8,9];
//arrays for special characters
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "[", "}", "]", "|", ";", ":", "'", '"',  ',',  "<", ">", '.', '?', '/'];

var array1=[randomLowerCaseAns, randomUpperCaseAns, randomNumbersAns,randomSpecialCharAns]



//create a function named questionOne 
function questionOne() {
  //create a prompt asking for number of characters between 8-128 named messagePrompt
  messagePrompt = prompt('How many characters would you like your password to contain. Enter a number bewteen 8 and 128.');
  
  
  // if message prompt is less than 129 and greater than 7
  if (messagePrompt <129 && messagePrompt >7){
  

  // invoke the function questionTwo and store the result in lowerCaseConfirm
  lowerCaseConfirm = questionTwo()
  // invoke the function questionThree and store the result in upperCaseConfirm
  upperCaseConfirm = questionThree()
  // invoke the function questionFour and store the result in numbersConfirm
  numbersConfirm = questionFour()
  // invoke the function questionFive and store the result in specialCharConfirm
  specialCharConfirm = questionFive()
    
    //if Confirm or Cancel button is clicked go to next function which is questionThree()
    if (lowerCaseConfirm) {
    //if Confirm or Cancel button is clicked go to next function which is questionFour()
    }if(upperCaseConfirm){
    //if Confirm or Cancel button is clicked go to next function which is questionFive()
    }if (numbersConfirm){
    //if Confirm or Cancel button is clicked go to next function which is questionFour()
    }if (specialCharConfirm){
    // if every button below was click as Canceled 
    }else if(lowerCaseConfirm == false && upperCaseConfirm == false && numbersConfirm == false && specialCharConfirm == false ){
      //create an alert that say (At least one lowercase letters, Uppercase letters, number or Special Character needs to be selected to generate password.)
      alert('At least one lowercase letters, Uppercase letters, number or Special Character needs to be selected to generate password.');
    }

 // else if its not both less than 129 and greater than 7     
}else{
    //Password length must at least be between 8-128 characters
    alert('Password length must at least be between 8-128 characters');
    }
  }
  
  
  // create a function named randomLowerCase and select a random lowercase letter in the array and generate it
    function randomLowerCase (lowerCaseLetters) {
    return lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
  }
  // take the generated character and store it in an variable named randomLowerCaseAns
    randomLowerCaseAns= randomLowerCase(lowerCaseLetters)


  // create a function named randomUpperCase and select a random UpperCase letter in the array and generate it
    function randomUpperCase (upperCaseLetters) {
    return upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
  }
  // take the generated character and store it in an variable named randomUpperCaseAns 
    randomUpperCaseAns = randomUpperCase(upperCaseLetters)

  
    // create a function named randomNumbers and select a random number in the array and generate it
  function randomNumbers (numbers) {
    return numbers[Math.floor(Math.random()*numbers.length)];
  }
  // take the generated character and store it in an variable named randomNumbersAns
    randomNumbersAns = randomNumbers(numbers)

  
    // create a function named randomSpecialChar and select a random specialCharacters in the array and generate it
  function randomSpecialChar (specialCharacters) {
    return specialCharacters[Math.floor(Math.random()*specialCharacters.length)];
  }
  // take the generated character and store it in an variable named randomSpecialCharAns
    randomSpecialCharAns = randomSpecialChar(specialCharacters)
  
  
  


  
  //create a function named questionTwo and passes message lowercase as true or false.
  function questionTwo(messageLowerCase){
  //Create a confirm prompt asking do they want lowercase letters to be used in the password with a variable named messageLowerCase
   var messageLowerCase = confirm('Do you want to include lowercase letters in the password?');
   //return wheather user accepts the confirm prompt or cancels the confirm prompt
   return messageLowerCase;
   }

  //create a function named questionThree and passes messageUpperCase as true or false
  function questionThree(messageUpperCase){
  //Create a confirm prompt asking do they want Uppercase letters to be used in the password with a variable named messageUpperCase
    var messageUpperCase = confirm('Do you want to include Uppercase letters in the password?');
    //return wheather user accepts the confirm prompt or cancels the confirm prompt
    return messageUpperCase;
    }
  
  //create a function named questionFour and passes messageNumbers as true or false
  function questionFour(messageNumbers){
  //Create a confirm prompt asking do they want Numbers to be used in the password with a variable named messageNumbers
    var messageNumbers = confirm('Do you want to include Numbers in the password?');
    //return wheather user accepts the confirm prompt or cancels the confirm prompt
    return messageNumbers;
    }
  
  //create a function named questionFive and passes messageSpecialChar as true or false
  function questionFive(messageSpecialChar){
  //Create a confirm prompt asking do they want Special Characters to be used in the password with a variable named messageSpecialChar
    var messageSpecialChar = confirm('Do you want to include Special Characters in the password?');
    //return wheather user accepts the confirm prompt or cancels the confirm prompt
    return messageSpecialChar;
    }
          

// Add an event listener to the variable genarateButton listening for when the icon genarateButton is clicked on and start the function questionOne
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
//arrays for random genarated charcters
var convertedStringToNumber = Number(messagePrompt)


var generatedArray = new Array();
 if (messagePrompt <129 && messagePrompt >7)

 var count = 0;
for(var k=0; k <messagePrompt; k++){
    console.log("WE AHVE AN ANSWER")
}

//}
if(lowerCaseConfirm){
  generatedArray[count] = randomLowerCaseAns;
  count++;
}

if(upperCaseConfirm){
  generatedArray[count] = randomUpperCaseAns;
  count++;
}
if(numbersConfirm){
  generatedArray[count] = randomNumbersAns;
  count++;
}
if(specialCharConfirm) {
  generatedArray[count] =randomSpecialCharAns;
  count++;
}



// console.log(generatedArray);
