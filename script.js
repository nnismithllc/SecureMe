// Assignment Code
var generateBtn = document.querySelector("generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var punctuation = "~`!@#$%^&*()_+|}{:<>?.,;[]=";

// Write password to the #password input
function writePassword() {
  // var lowercaseInput= document.getElementById("lowercase");
  // var uppercaseInput= document.getElementById("uppercase");
  // var numbersInput= document.getElementById("numbers");
  // var lowercaseInput= document.getElementById("lowercase");
  // var password = generatedPassword();
  var userpassword = "";
  var passwordCharSet = "";
  


  if (lowercaseInput.checked){

      // passwordCharSet+= lowercase;
      // passwordCharSet+= uppercase;
      // passwordCharSet+= numbers;
      // passwordCharSet+= punctuation;


      var size = passwordCharSet.length;
   }

  //  if (uppercaseInput.checked){
  //     passwordCharSet+= uppercase;
  //   }
  //   if (numbersInput.checked){
  //     passwordCharSet+= numbers;
  //   }
  //   if (punctuationInput.checked){
  //     passwordCharSet+= punctuation;
  //   }
  

  for(var i = 0; i < size; i++) {
    userpassword += passwordCharSet.charAt(Math.floor(Math.random() * size));
  }
  // add password to textbox/display area
  document.getElementById("password").value = userpassword;

  document.getElementById("text").oninput =function () {

  //   if (document.getElementById("text").value >7){

  // document.getElementById("length").innerHTML = "Length: 8";
    
  }

  // }


  document.getElementById("display").value = userpassword;
  document.getElementById("length").innerHTML = ("Length(8-128):");
}


  // var passwordText = document.querySelector("password");
  // passwordText.value = password;

  // function display (){
  //   document.getElementById("display").select();
  //   document.execCommand("copy");
  //   alert("Password copied to the Clipboard!");
  // }

// addd event listener to generate button
generateBtn.addEventListener("click", writePassword);