// Button Generate and Copy Queries
let generateButton = document.querySelector("#generate");
let copyButton = document.querySelector("#copy");

// Constant Like Variable Statements
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Function of  a New Generated Password
function generatePassword() {

    let newPassword = "";
    let passwordCharset = "";

// Prompt Length Question for Entry After Button Initated
    let passwordLengthInput = prompt("How many characters would you like your password to be?");

// If and Return Conditionals for Choice Length of Input
    if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
    alert("Please enter a number between 8 and 128!");
    return;
    } 
    let lowercaseCharactersInput = confirm("Would you like lowercase letters to be included in your password?");

// If and Then Conditionals for Lowercase Constant
    if (lowercaseCharactersInput) {
    passwordCharset += lowercaseCharacters;
    }
    let uppercaseCharactersInput = confirm("Would you like uppercase letters to be included in your password?");

// If and Then Conditionals for Uppercase Constant
    if (uppercaseCharactersInput) {
    passwordCharset += uppercaseCharacters;
    }
    let numericalCharactersInput = confirm("Would you like numbers to be included in your password?");

// If and Then Conditionals for Number Constant
    if (numericalCharactersInput) {
    passwordCharset += numericalCharacters;
    }
    let specialCharactersInput = confirm("Would you like special characters to be included in your password?");

// If and Then Conditionals for Punctuation Constant
    if (specialCharactersInput) {
    passwordCharset += specialCharacters;
    }

// Conditional Character Selector of Choice
    if (passwordCharset === "") {
    alert("Please select at least one type of character you would like to include!");
    }

// Conditional Choice Return from Selector 
    if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
    for (var i = 0; i < passwordLengthInput; i++) {
    newPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };

// Return ("password", newPassword);
        return newPassword
    };
};

// Write password to the #password input
    function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
generateButton.addEventListener("click", writePassword);

// Copy Function of New Password 
    function copyPassword() {
    password.select();
    document.execCommand("copy");
    passwordTextarea.innerHTML = "";

};
    copyButton.addEventListener("click", copyPassword);