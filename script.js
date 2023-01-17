// Assignment Code
var passwordBtnEl = $('#password-btn');
var passwordDisplayEl = $('#password-display');


// Write password to the #password input
function passwordGenerator(num) {
  var password = '';
  for (var i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Add event listener to generate button
passwordBtnEl.on('click', function () {
  var newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
