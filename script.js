// //Purpose:Function to perform Caesar Cipher encryption or decryption
// Function to encrypt a message using Caesar Cipher with a shift value of 42 and add a random letter after every 2 letters
//This function encrypts or decrypts a single character using the Caesar Cipher method.
//Parameters:
// singleCharacter: The character to be encrypted or decrypted.
// shiftValue: The number of positions to shift in the alphabet.
// isEncrypting: A boolean indicating whether to encrypt (true) or decrypt (false).
// Process:
// Determine the letter of the alphabet of the character.
// Identify if the character is lowercase or uppercase.
// Calculate the base-code for lowercase ('a') or uppercase ('A').
// Adjust the shiftValue to be within the 0-25 range.
// Encrypt or decrypt the character by adjusting its base-code accordingly.
// Return the transformed character.
// Purpose: Encrypt a message using the Caesar Cipher and add a random letter after every two letters.
function caesarCipher(singleCharacter, shiftValue, isEncrypting) {
  const charCode = singleCharacter.charCodeAt(0);
  let baseCode;

  if (singleCharacter >= 'a' && singleCharacter <= 'z') {
    baseCode = 'a'.charCodeAt(0);
  } else if (singleCharacter >= 'A' && singleCharacter <= 'Z') {
    baseCode = 'A'.charCodeAt(0);
  } else {
    return singleCharacter; // Non-alphabetic characters remain unchanged
  }

  shiftAmount = shiftValue % 26; // Adjust the shift to be within the range of 0-25

  // Apply encryption or decryption
  let adjustedCharCode;
  if (isEncrypting) {
    adjustedCharCode = ((charCode - baseCode + shiftAmount) % 26) + baseCode;
  } else {
    adjustedCharCode =
      ((charCode - baseCode - shiftAmount + 26) % 26) + baseCode;
  }

  return String.fromCharCode(adjustedCharCode);
}


// Parameters: message - The message to be encrypted.
// Process:
// Use a fixed shiftValue of 42.
// Iterate over each character in the message.
// Encrypt each character using the caesarCipher function.
// Add a random letter after every two characters using the getRandomLetter function.
// Return the fully encrypted message.

function encryptMessage(message) {
  const shiftValue = 42;
  let encryptedMessage = '';

  for (let i = 0; i < message.length; i++) {
    encryptedMessage += caesarCipher(message[i], shiftValue, true);
    if ((i + 1) % 2 === 0) {
      encryptedMessage += getRandomLetter(); // Add a random letter after every 2 letters
    }
  }
  return encryptedMessage;
}

// Function to decrypt a message using Caesar Cipher with a shift value of 42 and ignore random letters added during encryption
// Purpose: Decrypt a message encrypted with the previous function, ignoring the added random letters.
// Parameters: encryptedMessage - The message to be decrypted.
// Process:
// Use a fixed shiftValue of 42.
// Iterate over each character in the encrypted message.
// Skip every third character (the random letters added during encryption).
// Decrypt each valid character using the caesarCipher function.
// Return the fully decrypted message.

function decryptMessage(encryptedMessage) {
  const shiftValue = 42;
  let decryptedMessage = '';

  for (let i = 0; i < encryptedMessage.length; i++) {
    if ((i + 1) % 3 === 0) {
      continue; // Skip the random letters added during encryption
    }
    decryptedMessage += caesarCipher(encryptedMessage[i], shiftValue, false);
  }

  return decryptedMessage;
}

// Function to generate a random letter
// Purpose: Generate a random letter (either uppercase or lowercase).
// Process:
// Define a string containing all letters of the alphabet.
// Randomly select a character from the string.
// Return the selected random letter.

function getRandomLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return letters.charAt(Math.floor(Math.random() * letters.length));
}


//Purpose: Handle the form submission for encrypting a message.
// Process:
// Prevent the default form submission behavior.
// Retrieve the original message from the input field.
// Encrypt the message using the encryptMessage function.
// Display the encrypted message in the designated area on the webpage.

// Handle form submission for encryption
document
  .getElementById('encryptionForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const originalMessage = document.getElementById('messageInput').value;
    const encryptedMessage = encryptMessage(originalMessage);
    document.getElementById('encryptedMessage').textContent =
      'Encrypted message: ' + encryptedMessage;
  });


// Purpose: Handle the form submission for decrypting a message.
// Process:
// Prevent the default form submission behavior.
// Retrieve the encrypted message from the input field.
// Decrypt the message using the decryptMessage function.
// Display the decrypted message in the designated area on the webpage.

// Handle form submission for decryption
document
  .getElementById('decryptionForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const encryptedMessage = document.getElementById(
      'encryptedMessageInput'
    ).value;
    const decryptedMessage = decryptMessage(encryptedMessage);
    document.getElementById('decryptedMessage').textContent =
      'Decrypted message: ' + decryptedMessage;
  });


//Purpose: Handle the reset button click event to clear all input fields and message displays.
//Process:
//Clear the value of the message input field.
//Clear the value of the encrypted message input field.
//Reset the displayed encrypted message text.

// Handle reset button click
document.getElementById('resetButton').addEventListener('click', function () {
  document.getElementById('messageInput').value = '';
  document.getElementById('encryptedMessageInput').value = '';
  document.getElementById('encryptedMessage').textContent =
    'Encrypted message will appear here';
  document.getElementById('decryptedMessage').textContent =
    'Decrypted message will appear here';
});

// Message to Decrypt for the key to next posted on slack channel
// Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.

//Decypted Message: Seek the midnight shadow of Romulus and Remus. There, whisper the word 'Aurelius' to the winds. The first to unveil it in our Slack channel earns the key to the next quest.
