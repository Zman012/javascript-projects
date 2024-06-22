let num = 1001;
let num1 = 123.45

console.log(num);
console.log(num1);
console.log(num1.length);
//num.length
console.log(Number(num));
console.log(typeof Number(num));
console.log(String(num));
console.log(typeof String(num));
console.log(String(num1));
console.log(typeof String(num1));
//num.length
//num1.length
console.log(String(num1).length);
//Returns 'undefined'.

//Use type conversion to print the length (number of digits) of an integer.
if (String(num1).includes('.')){  //(String(num) - converts variable num into a string) WHILE .includes ('.') checks if their a decimal point
    console.log(String(num1).length-1); // -1 is for if theire iS a decimal point then it removes it
    } else {
    console.log(String(num1).length);
    }//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

