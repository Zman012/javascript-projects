/*
for (let i = 0; i < 100; i++){
  console.log("Repetition is a good thing.");
}
*/

/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    

    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

    //a 
    /* -------
    for  ( let i = 0; i < 21; i++) {
      console.log(i);
    }

    let i = 0
    while (i < 21) {
      console.log(i);
      i++
    }
*/ 
    //b
/*
for ( let i = 3; i <= 29; i++) {
  if (i % 2 !== 0) {  //condition checks if 'i' is not divisible by 2 (i % 2 !== 0)
  console.log(i);
}
}
*/
    //c
  /*
for ( let i = 12; i >= -14; i--) {
  if (i % 2 === 0) {   // stick to 2 for checking divibility to integers
    console.log(i)
  }
}

C option 2!
for (let i = 12; i >= -14; i-=2) {
   console.log(i);
}
  */
//d
/*
// Loop from 50 down to 20
for (let i = 50; i >= 20; i--) {
  // Check if the number is a multiple of 3
  if (i % 3 === 0) {
      // Print the number
      console.log(i);
  }
}
*/

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
 //A
 let language = "LaunchCode";
 let reversed = "";
 let reversedArr = [];
 let random = [
  1, 
  5, 
  "LC101", 
  "blue", 
  42
];
for (let i = 0; i < language.length; i++) {
  console.log(language[i]);
  }

  for (let i = 0; i < language.length; i++) {
    reversed = language[i] + reversed
  // print bracket here to see a different result
  console.log(reversed);
  }
for (let i = 0; i < random.length; i++) {

console.log(random[i]);
};

/* --- reverse array but same lines?!
for (let i = []; i < random.length; i++) {
  reversedArr = random[i] + reversedArr;
}

console.log(reversedArr);
*/






/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
/*
  let numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [], odds = [];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 === 0) {
        evens.push(number);
    } else {
        odds.push(number);
    }
}

console.log("Even numbers:", evens);
console.log("Odd numbers:", odds);
*/

