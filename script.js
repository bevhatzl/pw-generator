// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // No pw will be displayed if blank string was returned due to incorrect length input by user
  if (password !== "") {   
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Steps to generate and return the pw as a string
function generatePassword() {
  let pw;
  let isLowerCaseChecked = document.getElementById("lowerCase").checked;
  let isUpperCaseChecked = document.getElementById("upperCase").checked;
  let isNumericChecked = document.getElementById("numeric").checked;
  let isSpecCharsChecked = document.getElementById("specChars").checked;
  // First check if at least one option is selected
  if (isLowerCaseChecked || isUpperCaseChecked || isNumericChecked || isSpecCharsChecked) {
    // get pw length and convert to integer
    let numChars = parseInt(prompt("How many characters should the password have? Minimum is 8, maximum is 128:"));  
    // Check the user input is in the desired range
    if (numChars >= 8 && numChars <= 128) {
      // call function to return an array of strings
      let userArray = getUserInputArray(isLowerCaseChecked, isUpperCaseChecked, isNumericChecked, isSpecCharsChecked);     
      // Call a function to take in the array of strings and pw length and generate random pw returned as a string.
      pw = calculatePassword(userArray, numChars);
      return pw;
    } else {
      alert("That is not the correct length.")
      return "";
    }
  } else {
    alert("You must select at least one choice.");
    return "";
  }
}

function getUserInputArray(isLowerCaseChecked, isUpperCaseChecked, isNumericChecked, isSpecCharsChecked) {
  let allCharsArray = [];
  /* create a new array from the selections
     using the spread operator to push array onto the end of allCharsArray */
  if (isLowerCaseChecked) { 
     allCharsArray.push(...lowerCasedCharacters);
  }
  if (isUpperCaseChecked) {
     allCharsArray.push(...upperCasedCharacters);
  }
  if (isNumericChecked) {
     allCharsArray.push(...numericCharacters);
  }
  if (isSpecCharsChecked) {
     allCharsArray.push(...specialCharacters);
  }
  return allCharsArray;    
}

// Takes in an array of strings and password length integer and outputs a string of the randomly generated pw
function calculatePassword(charArray, length) {
  let password = [];
  for (let i = 1; i <= length; i++) {
    // Randomising the array index
    let randomIndex = Math.floor(Math.random() * (charArray.length)); 
    password.push(charArray[randomIndex]);
  }
  // convert array to string with no separator
  let pwString = password.join('').trim(); 
  return pwString;
}