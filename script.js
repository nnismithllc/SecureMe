// Assignment Code
 document.querySelector("generate");
 document.querySelector("copy");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var punctuation = "~`!@#$%^&*()_+|}{:<>?.,;[]=";

// Write password to the #password input
function writePassword() {
 
  var userpassword = "";
  var passwordCharSet = "";
  


  if (lowercaseInput.checked){

     

      var size = passwordCharSet.length;
   }

 
  

  for(var i = 0; i < size; i++) {
    userpassword += passwordCharSet.charAt(Math.floor(Math.random() * size));
  }
  // add password to textbox/display area
  document.getElementById("password").value = userpassword;

  document.getElementById("text").oninput =function () {


  document.getElementById("length").innerHTML = ("Length (8-128):");
}


// addd event listener to generate button
generateBtn.addEventListener("generate", writePassword);
}