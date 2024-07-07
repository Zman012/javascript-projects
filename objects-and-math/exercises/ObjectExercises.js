let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6

};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpeTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};


let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};


let waterBears = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

let test = {
   name: "test",
   species: "test",
   mass: 0,
   age: 1
};
// After you have created the other object literals, add the astronautID property to each one.
superChimpOne["astronautID"] = 1
salamander["astronautID"] = 2
superChimpeTwo["astronautID"] = 3
dog["astronautID"] = 4
waterBears["astronautID"] = 5


superChimpOne["move"] = function () {return Math.floor(Math.random()*11)}
salamander["move"] = function () {return Math.floor(Math.random()*11)}
superChimpeTwo["move"] = function () {return Math.floor(Math.random()*11)}
dog["move"] = function () {return Math.floor(Math.random()*11)}
waterBears["move"] = function () {return Math.floor(Math.random()*11)}

/* 
 // Kavin here ------------------- cant you automate with a function and keep it,
 // peramnently on the object? vs typing manually?

function addAstronautID(obj, id) {
   obj["astronautID"] = id;
   //console.log(obj);
   return obj
};
//let move = Math.floor(Math.random()*10);
//or ^^
//function () {return Math.floor(Math.random()*11)}

function move(obj,id = Math.floor(Math.random()*10)) {
   obj["move"] = id
   return id
};


*/
//console.log(`${waterBears.name}, please move ${waterBears.move(10)} spaces!`)
console.log(waterBears);
//is this the best way of doing it^? //Kavin here ------------

//console.log(addAstronautID(dog, 4));
//console.log(waterBears);
//console.log(test);

let crew = [
   superChimpOne,
   salamander,
   superChimpeTwo,
   dog,
   waterBears
];
// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.
function crewReports (crew) {
   for (item in crew) {
       name = crew[item].name;
       species = crew[item].species;
       age = crew[item].age;
       mass = crew[item].mass;
       astronautID = crew[item].astronautID;

      console.log(`'${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.'`)
   }
};

console.log(crewReports(crew));
console.log("--------- ");
// Start an animal race!

/*
//try 1
function fitnessTest(crew) {
   let arr1 = []
   for (item in crew) {
      name = crew[item].name;
      move = crew[item].move(0);
      console.log(`'${name} took ${move} turns to take 20 steps.'`)
      if (move >= 20) {
         move.push(arr1);
      }
   }  return arr1

}
console.log(fitnessTest(crew));
*/

function fitnessTest(candidates){
   let results = [], numSteps, turns; //what does numSteps and turns do?

   for (let i = 0; i < candidates.length; i++){
       numSteps = 0;
       turns = 0;

    while(numSteps < 20){
       numSteps += candidates[i].move();
       turns++;
       //console.log(numSteps);
      //  console.log(results);
      //  console.log(numSteps);
      //  console.log(turns);

    }

    results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
}

return results;
}
console.log(fitnessTest(crew));