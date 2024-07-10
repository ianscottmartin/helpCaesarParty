# helpCaesarParty

# **Technical Skills Survey** Project Part 2- Helping Caesar's Traditional Secret Party

# Introduction 🚀

Congratulations on your journey with JavaScript so far! From knowing little to nothing about programming, you've now reached a point where you can tackle some of the most intricate challenges. Remember, every coder was once where you are now, and every expert has faced challenges they didn't know how to solve. Embrace the process, and let's dive into this exciting challenge inspired by Julius Caesar himself! So that your friends can send you secret messages through your digital CV!

**Previously on Springboard**:

In the heart of ancient Rome 🏛️, Julius Caesar had a secret 🤫. Not just about gladiators 🗡️ or gold 💰, but about... a party 🍾! This year, he would host a secret party only for his closest friends. This party was the talk of the town 🙊! There were magical fairies ✨, dancing peacocks 🦚, melodious harps 🎵, and sparkling fountains ⛲.

However, there was a problem 😲! Uninvited guests 🥷 would crash the party because the location 🗺️ would get leaked by spies 🕵️‍♂️.

Caesar needed a plan 💡! He thought, "I'll send out the invites encrypted 🔐. That way, only my true friends 🤝 will know when and where the party is!".

So, he came up with a cunning plan 🦊. Instead of writing the party location of the invitation directly 🏞️, he would shift each letter in by a fixed number 🔢. So, for example, if he decided to shift by 3:

- A would become D 🔄
- B would become E 🔄
- C would become F 🔄
- ... and so on.

If the invite said "GARDEN" 🌳, he would write "JDUGHQ" 🤯.

When Brutus (Caesar's friend turned enemy) received the letter 📜, he knew about this secret code 🗝️. He would shift the letters back by the same number and decode "JDUGHQ" to "GARDEN" 🌳. Mmm, clever 🧠!

However, any nosy Romans 👀 intercepting the message would be baffled 😶‍🌫️! "JDUGHQ? What kind of place is that?" they would wonder 🤷‍♂️.

Thanks to the "Caesar Cipher" 🔐, Caesar's secret party remained exclusive 😼, magical 🌌, and crasher-free 🥳!

# Objective 🎯

Your task is to craft two intricate functions: one that encrypts a message in the spirit of Caesar's Cipher but with added layers of complexity and another that decrypts such messages, unveiling their hidden content.

# Starter Code 🌱

```jsx
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt(message, shiftValue) {
  // Your encryption code here
  return encryptedMessage;
}

function decrypt(encryptedMessage, shiftValue) {
  // Your decryption code here
  return decryptedMessage;
}
```

# Requirements 📋

1. **Implementing the Encryption Algorithm of Caesar's Cipher**
   - Step 1: Take a plaintext message and a shift value and return an encrypted string. If the message includes a character out of the alphabet, pass it as is to the encrypted string.
   - Step 2: After every two letters, insert a random letter from the alphabet.
2. **Implementing the Decryption Algorithms of Caesar's Cipher**
   - Take in the encrypted message and a shift value and return the original plaintext message.
   - Accurately reverse the encryption process to retrieve the original message.
3. **Decrypting the Secret Message**
   - Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.
   - Decrypt the above secret message using 42 as the shift value and complete the quest.
4. **Using Comments**: As you build your functions, document your thought process, the purpose of each section of your code, and any challenges you come across. Good commenting not only helps others understand your code but also aids you in tracking your logic.
5. **Attributing Help**:
   - If you incorporate code or inspiration from online resources, attribute the source. At a minimum, provide the URL.
   - If you get help from mentors or TAs, describe the help given and attribute the name.

# Expected Output 🖼️

A set of functions that can seamlessly encrypt and decrypt messages with the given complexities.

# Hints 💡

## General Hints:

- Break the problem down and tackle one aspect of the task at a time.
- Use helper functions to make your code more modular and readable.
- Test your functions with various input strings to ensure accuracy.

## Step 1 Hints:

- **Shift Only**: At this point, focus only on shifting the characters based on the shift value. You don't need to worry about random characters or alternating shift directions yet.
- Remember to handle both uppercase and lowercase characters.
- If a character isn't in the alphabet, just add it to the encrypted/decrypted message as is.
- Remember to handle negative indices after shifting. The modulo operation can return a negative result in some languages, including JavaScript.
- **Example**: For a shift value of 42, if your encrypted message is "Xubbe Rhkjki, cuuj cu qj jxu xywx wqhtudi.", decrypting it should yield "Hello Brutus, meet me at the high gardens.".

## Step 2 Hints:

- **Introduce Random Letters**: After every two characters in the encrypted message, insert a random letter. This will make your encrypted message longer than the original.
- When decrypting, you'll need a strategy to skip over these random letters to get back the original message.
- Keep a counter to track every two characters. Reset this counter after inserting a random letter.
- Be careful when skipping over random letters during decryption. Ensure you don't accidentally skip over a valid encrypted character.
- **Example**: For a shift value of 42, if your encrypted message is "Xuobbce eRhakjikiw, gcueujr cfu wqjy jzxul xfywox pwqghtiudri.", decrypting it should yield "Hello Brutus, meet me at the high gardens.".

# Submission Guidelines 📦

- Upload the project folder (a separate folder from the previous one) to a cloud storage. If using Google Drive, see the ["Upload files & folders to Google Drive"](https://support.google.com/drive/answer/2424368) article.
- Make the folder publicly accessible. If using Google Drive, see the "Share a file publicly" section in Step 2 of the "[Share files from Google Drive](https://support.google.com/drive/answer/2424368)" article.
- Submit the link to the folder.

# Assessment Criteria 🔍

1. Proper function definitions and absence of syntax errors.
2. Correct implementation of functions.
3. Ability of the decrypt function to decode messages from the encrypt function.
4. Decrypting the given secret message and completing the quest!
5. Thorough commenting and explanation of the code logic.
6. Proper attribution for borrowed or inspired code, with provided references.

While the basic mechanics of the exercise should be adhered to, you might come up with different yet valid methods to achieve the results. We celebrate and encourage such creativity, recognizing that there can be multiple correct approaches to a problem.

# Fun Fact 🥳

Did you know? The concept of secret messages isn't just limited to human history. In nature, many animals use sophisticated methods of communication to send "hidden" messages to each other, often to warn about predators or find mates. While they might not be encrypting their calls or colors, they've mastered the art of covert communication. If animals had coding classes, who knows, maybe they'd be learning the Caesar Cipher, too! 🐦🎶🦎

# Optional Coding Challenge 🌀

While you've traversed through the mysteries of the Caesar Cipher, the labyrinth of code still has hidden chambers to explore. As an elite code-breaker, can you add another layer of complexity to this ancient puzzle? Here's a twist:

Alternate the shift direction. Each time, before adding a random letter, shift the first letter forward and the second letter backward. This not only adds an element of unpredictability but also tests the robustness of your functions. Dive deep, brave coder, and let's see if you can conquer this enhanced enigma! 🌌
