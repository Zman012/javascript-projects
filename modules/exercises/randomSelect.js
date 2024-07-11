function randomFromArray(arr){    //take an array as an argument and then return randomy elements from array
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

//TODO: Export the randomFromArray function.

module.exports = randomFromArray;
