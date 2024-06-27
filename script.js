// Function to perform Caesar Cipher encryption or decryption
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

  shiftValue = shiftValue % 26; // Adjust the shift to be within the range of 0-25

  // Apply encryption or decryption
  let adjustedCharCode;
  if (isEncrypting) {
    adjustedCharCode = ((charCode - baseCode + shiftValue) % 26) + baseCode;
  } else {
    adjustedCharCode =
      ((charCode - baseCode - shiftValue + 26) % 26) + baseCode;
  }

  return String.fromCharCode(adjustedCharCode);
}

// Function to encrypt a message using Caesar Cipher with a shift value of 42 and add a random letter after every 2 letters
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
function getRandomLetter() {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  return letters.charAt(Math.floor(Math.random() * letters.length));
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
