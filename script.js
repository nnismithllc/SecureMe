// Assignment Code
var generateBtn = document.querySelector("generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var punctuation = "~`!@#$%^&*()_+|}{:<>?.,;\][]=";

// Write password to the #password input
function writePassword() 
var lowercaseInput= document.getElementById("lowercase");
var uppercaseInput= document.getElementById("uppercase");
var numbersInput= document.getElementById("numbers");
var lowercaseInput= document.getElementById("lowercase");

{
  var password = generatePassword();
  var userpassword = "";
  var passwordCharSet = "";

  if (lowercaseInput.checked){
    passwordCharSet+= lowercase;
  }

 if (uppercaseInput.checked){
    passwordCharSet+= uppercase;
  }
  if (numbersInput.checked){
    passwordCharSet+= numbers;
  }
  if (punctuationInput.checked){
    passwordCharSet+= punctuation;
  }
  



  var passwordText = document.querySelector("password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
