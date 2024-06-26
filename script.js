// Function to perform Caesar Cipher encryption or decryption
function caesarCipher(singleCharacter, shiftValue, isEncrypting) {
  const charCode = singleCharacter.charCodeAt(0);
  const baseCode = singleCharacter >= 'a' ? 97 : 65; // Determine base char code for uppercase or lowercase letters

  if (
    (singleCharacter >= 'A' && singleCharacter <= 'Z') ||
    (singleCharacter >= 'a' && singleCharacter <= 'z')
  ) {
    // Check if the character is a letter
    shiftValue = shiftValue % 26; // Adjust the shift to be within the range of 0-25

    // Apply encryption or decryption
    const adjustedCharCode = isEncrypting
      ? (charCode - baseCode + shiftValue) % 26
      : (charCode - baseCode - shiftValue + 26) % 26;

    return String.fromCharCode(adjustedCharCode + baseCode);
  } else {
    // Non-alphabetic characters remain unchanged
    return singleCharacter;
  }
}

// Function to generate a random letter
function getRandomLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return letters.charAt(Math.floor(Math.random() * letters.length));
}

// Function to encrypt a message using Caesar Cipher with a shift value of 42 and add a random letter after every 2 letters
function encryptMessage(message) {
  const shiftValue = 42;
  let encryptedMessage = '';

  // Flag to track whether to insert a random letter
  let insertRandomLetter = true;

  for (let i = 0; i < message.length; i++) {
    encryptedMessage += caesarCipher(message[i], shiftValue, true);

    // Insert a random letter after every 2 letters
    if (insertRandomLetter && (i + 1) % 2 === 0) {
      encryptedMessage += getRandomLetter();
    }

    // Toggle insertRandomLetter after every 3rd character
    if ((i + 1) % 3 === 0) {
      insertRandomLetter = !insertRandomLetter;
    }
  }

  return encryptedMessage;
}

// Function to decrypt a message using Caesar Cipher with a shift value of 42 and ignore random letters added during encryption
function decryptMessage(encryptedMessage) {
  const shiftValue = 42;
  let decryptedMessage = '';
  let skipNextChar = false;

  for (let i = 0; i < encryptedMessage.length; i++) {
    if (skipNextChar) {
      skipNextChar = false;
      continue;
    }

    if ((i + 1) % 3 === 0) {
      skipNextChar = true;
      continue; // Skip the random letters added during encryption
    }

    decryptedMessage += caesarCipher(encryptedMessage[i], shiftValue, false);
  }

  // Remove the first character if it was a random letter
  if (decryptedMessage.length > 0 && !isLetter(decryptedMessage[0])) {
    decryptedMessage = decryptedMessage.substring(1);
  }

  return decryptedMessage;
}

// Helper function to check if a character is a letter
function isLetter(character) {
  return /[a-zA-Z]/.test(character);
}

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

// Handle reset button click
document.getElementById('resetButton').addEventListener('click', function () {
  document.getElementById('messageInput').value = '';
  document.getElementById('encryptedMessageInput').value = '';
  document.getElementById('encryptedMessage').textContent =
    'Encrypted message will appear here';
  document.getElementById('decryptedMessage').textContent =
    'Decrypted message will appear here';
});

// this will create a random first letter for encryption and remove it

// Function to perform Caesar Cipher encryption or decryption
// function caesarCipher(singleCharacter, shiftValue, isEncrypting) {
//   const charCode = singleCharacter.charCodeAt(0);
//   const baseCode = singleCharacter >= 'a' ? 97 : 65; // Determine base char code for uppercase or lowercase letters

//   if (
//     (singleCharacter >= 'A' && singleCharacter <= 'Z') ||
//     (singleCharacter >= 'a' && singleCharacter <= 'z')
//   ) {
//     // Check if the character is a letter
//     shiftValue = shiftValue % 26; // Adjust the shift to be within the range of 0-25

//     // Apply encryption or decryption
//     const adjustedCharCode = isEncrypting
//       ? (charCode - baseCode + shiftValue) % 26
//       : (charCode - baseCode - shiftValue + 26) % 26;

//     return String.fromCharCode(adjustedCharCode + baseCode);
//   } else {
//     // Non-alphabetic characters remain unchanged
//     return singleCharacter;
//   }
// }

// // Function to generate a random letter
// function getRandomLetter() {
//   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   return letters.charAt(Math.floor(Math.random() * letters.length));
// }

// // Function to encrypt a message using Caesar Cipher with a shift value of 42 and add a random letter at the beginning
// function encryptMessage(message) {
//   const shiftValue = 42;
//   let encryptedMessage = getRandomLetter(); // Start with a random letter

//   for (let i = 0; i < message.length; i++) {
//     encryptedMessage += caesarCipher(message[i], shiftValue, true);
//     if ((i + 1) % 2 === 0) {
//       encryptedMessage += getRandomLetter();
//     }
//   }
//   return encryptedMessage;
// }

// // Function to decrypt a message using Caesar Cipher with a shift value of 42 and ignore random letters added during encryption
// function decryptMessage(encryptedMessage) {
//   const shiftValue = 42;
//   let decryptedMessage = '';

//   // Start decoding after the first character (random letter)
//   for (let i = 1; i < encryptedMessage.length; i++) {
//     if ((i - 1 + 1) % 3 === 0) {
//       continue; // Skip the random letters added during encryption
//     }
//     decryptedMessage += caesarCipher(encryptedMessage[i], shiftValue, false);
//   }

//   return decryptedMessage;
// }

// // Handle form submission for encryption
// document
//   .getElementById('encryptionForm')
//   .addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission
//     const originalMessage = document.getElementById('messageInput').value;
//     const encryptedMessage = encryptMessage(originalMessage);
//     document.getElementById('encryptedMessage').textContent =
//       'Encrypted message: ' + encryptedMessage;
//   });

// // Handle form submission for decryption
// document
//   .getElementById('decryptionForm')
//   .addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission
//     const encryptedMessage = document.getElementById(
//       'encryptedMessageInput'
//     ).value;
//     const decryptedMessage = decryptMessage(encryptedMessage);
//     document.getElementById('decryptedMessage').textContent =
//       'Decrypted message: ' + decryptedMessage;
//   });

// // Handle reset button click
// document.getElementById('resetButton').addEventListener('click', function () {
//   document.getElementById('messageInput').value = '';
//   document.getElementById('encryptedMessageInput').value = '';
//   document.getElementById('encryptedMessage').textContent =
//     'Encrypted message will appear here';
//   document.getElementById('decryptedMessage').textContent =
//     'Decrypted message will appear here';
// });
