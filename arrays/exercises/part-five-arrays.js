let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];


//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
console.log(str);
console.log(str.split('e'));
//console.log
console.log(str.split(' ')); // splits by commas
console.log(str.split('')); //splits each individual chracter/index

console.log(str.split('In','you')); // adds spaces just 'in' woudl take the In out
//Deliiminator - boundaries between seperate entities - string deliminters are characters at the beginning and enda of a string - so quotes at the beginning or doublequotes
//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join('o'));
console.log(arr.join(''))
console.log(arr.join(' '));
console.log(arr.join('!'));
//connector are operators +,-, ||, && etc
//3) Do split or join change the original string/array?
console.log(arr); //no
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(",").sort().join(',')); // THIS

