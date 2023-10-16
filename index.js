function decrypt() {
  var nameKey = document.getElementById("input").value.toLowerCase();
  var nameKeyNumberStripped = nameKey.slice(4);
  var decryptedParticipant = "";
  var cipherKey = 13;

  for (var i = 0; i < nameKeyNumberStripped.length; i++) {
    var charCode = nameKeyNumberStripped.charAt(i).charCodeAt();

    //lower case ASCII alphabet is 97(a) to 122(z)
    if (charCode - cipherKey < 97) { //start at beginning of alphabet
      charCode -= cipherKey - 26;
    } else {
      charCode -= cipherKey;
    }

    var char = String.fromCharCode(charCode);
    decryptedParticipant += char;
  }

  document.getElementById("recipient").textContent = decryptedParticipant;
}

//add an event listener (for the enter key) when input is focused
document.getElementById("input").addEventListener("keyup", function (e) {
  //enter has a keycode of 13
  if (e.keyCode == 13) {
    //call the same function that clicking add calls
    decrypt();
  }
});
