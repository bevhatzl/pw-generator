// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== "") {   // No pw will be displayed if blank string was returned due to incorrect length input by user
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Steps to generate and return the pw as a string
function generatePassword() {
  let pw;
  // get pw length and convert to integer
  let numChars = parseInt(prompt("How many characters should the password have? Minimum is 8, maximum is 128:"));  

  if (numChars >= 8 && numChars <= 128) {
    // call function to return an array of strings
    let userArray = getUserInputArray(); 
    // checks if returned empty array 
    if (userArray.length === 0) {
      alert("You must select at least one choice.")
      return "";
    }
    // Function to take in the array of strings and pw length and generate random pw returned as a string.
    pw = calculatePassword(userArray, numChars);
    return pw;

  } else {
    alert("That is not the correct length.")
    return "";
  }

}


function getUserInputArray() {
  let lowerCase = confirm("Should the password contain lower case letters?");
  let upperCase = confirm("Should the password contain upper case letters?");
  let numeric = confirm("Should the password contain numbers?");
  let specChars = confirm("Should the password contain special characters?");
  let allCharsArray = [];

  
  // create a new array from the selections
  //using the spread operator to push array onto the end of allCharsArray
  if (lowerCase) { 
     allCharsArray.push(...lowerCasedCharacters);
  }
  if (upperCase) {
     allCharsArray.push(...upperCasedCharacters);
  }
  if (numeric) {
     allCharsArray.push(...numericCharacters);
  }
  if (specChars) {
     allCharsArray.push(...specialCharacters);
  }

  return allCharsArray;  //if no selection, returns a blank array
  
}


// Takes in an array of string and outputs a string of the randonly generated pw
function calculatePassword(charArray, length) {
  let password = [];
  for (let i = 1; i <= length; i++) {
    // math.random returns random num from 0 up to but not including 1. 
    let randomIndex = Math.floor(Math.random() * (charArray.length)); 
    password.push(charArray[randomIndex]);
  }
  // convert array to string with no separator
  let pwString = password.join('').trim(); 
  return pwString;
}