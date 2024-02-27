####rot13
The Caesar Cipher is a famous implementation of early day encryption. It would take a sentence and reorganize it based on a key that is enacted upon the alphabet. Take, for example, a key of 3 and the sentence, “I like to wear hats.”

When this sentence is encrypted using a key of 3, it becomes:

---->L olnh wr zhdu kdwv.

This makes it difficult to read and allows messages to be passed undetected

Step 1: Identify the character within the sentence.

Step 2: Find that character’s location within the alphabet.

Step 3: Identify that characters location + the key in the alphabet.

Note* if the location + key > 26, loop back around and begin counting at one.
############################################
in this function the charCodeAt(0)--> return the UUNIcode of letter for example 
'S'--> char.charAtcode(0) retrun 83 
 and the fromCharCode() transeft the unicode to  a letter .
 ############################################
 You can pass multiple Unicode values to String.fromCharCode() to create a string from those values. For instance:

let unicode = [65, 66, 67]; // Unicode values for 'A', 'B', 'C'
let str = String.fromCharCode(...unicodeValues);

console.log(str); // Outputs 'ABC'
