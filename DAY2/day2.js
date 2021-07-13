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
