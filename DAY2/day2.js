//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
let challenge = '30 days of JavaScript'

//Print the string on the browser console using console log
console.log(challenge)

//Print the length of the string on the browser console using console
console.log(challenge.length)

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())

//All lower case now
console.log(challenge.toLowerCase())

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,2))

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(3,4))

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('script'))

//Split the string into an array using split() method
console.log(challenge.split())

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(''))

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let techFirms = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(techFirms.split(','))

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Python'))

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt([15]))

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt([11]))

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because'))

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf('because'))

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.search('because'))

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(challenge.trim())

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'))

//Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/gi
console.log(challenge.match(pattern))

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string = ''
console.log(string.concat('30 Days of ', 'JavaScript'))

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

//exercise level 2
// Using console.log() print out the following statement:  The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

//Using console.log() print out the following statement: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10')
let num = '10'
let numInt = parseInt(num)
console.log(numInt) 
console.log(typeof numInt) //double-checking to see the typeof is equal to int 10

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(typeof '9.8')
let num1 = '9.8'
let numFloat = parseFloat(num1)
console.log(numFloat)
console.log(typeof numFloat)

//Check if 'on' is found in both python and jargon
let thisString = 'python'
let thatString = 'jargon'
console.log(thisString.match('on'))
console.log(thatString.match('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let thisSentence = 'I hope this course is not full of jargon.'
console.log(thisSentence.search('jargon'))

//Generate a random number between 0 and 100 inclusively.
let randomNum = Math.random()
let numBwZeroHundred = randomNum * 101
let randomNum2 = Math.floor(numBwZeroHundred)
console.log(randomNum2)
