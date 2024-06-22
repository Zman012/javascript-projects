let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
console.log(cargoHold)
//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold[5] = "space tether"
console.log(cargoHold);
//2) Remove the last item from the array with pop. Print the element removed and the updated array.
console.log(cargoHold.pop());
console.log(cargoHold);
//3) Remove the first item from the array with shift. Print the element removed and the updated array.
console.log(cargoHold.shift());
console.log(cargoHold);
//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
//cargoHold.unshift(1038).pop('20 meters') --- why doesn't this work?
console.log(cargoHold.push('20 meters'));
console.log(cargoHold.unshift(1038));
console.log(cargoHold);
console.log(cargoHold.length); //7


console.log(`In the end, ${cargoHold} had an astounding ${cargoHold.length} with in its beatueous array`);
