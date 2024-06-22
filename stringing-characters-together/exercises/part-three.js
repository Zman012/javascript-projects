//Part Three section one

let language = 'JavaScript';

//stringName.slice(i, j) - Returns the substring consisting of chracters from index i through index j-1
language1 = language.slice(0,1);
language2 = language.slice(4,5);
console.log(language1 + language2);
//SHORTEN YOUR COOODDEE
//let language = 'JavaScript';
console.log(language.slice(0,1)+language.slice(4,5));

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

//2. Without using slice(), use method chaining to accomplish the same thing.
//another optoin - let language = 'JavaScript';
let result = language.charAt(0) + language.charAt(4);
console.log(result);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let language3 = 'JavaScript';
let firstInitial = language3[0];
let lastInitial = language3[4];

let initials = firstInitial + lastInitial
console.log(`The abbreviations for ${language3} is ${initials}!`)
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let notTitleCase1 = notTitleCase.slice(0,1);
//console.log(noTittlecase1.toUpperCase() + )
console.log(notTitleCase.slice(0,1).toUpperCase()+notTitleCase.slice(2,11));

//console.log(notTitleCase.toUpperCase('t'));
