//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let startingFuelLevel = 20000
let astronautsAboard = 7
let altitudeReachedMiles = 386


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');
startingFuelLevel = input.question("Please enter Fuel Level within optimal range: ");


while (startingFuelLevel <= 5000 || startingFuelLevel >= 30001) {
startingFuelLevel = input.question("invalid input.  PLease enter optimal Fuel Level for space ship: ")
startingFuelLevel = Number(startingFuelLevel);
}

astronautsAboard = input.question("Please enter the number of astronauts aboard!: ")
astronautsAboard = Number(astronautsAboard)

while (astronautsAboard !== 7) {
  astronautsAboard = input.question(' We are missing an astronaut - have you checked the laboroties? Please verify 7 astronauts and enter again: ');
  astronautsAboard = Number(astronautsAboard)
};

while (startingFuelLevel-100*astronautsAboard >= 0) {
  altitudeReachedMiles += 50;
  startingFuelLevel -= 100*astronautsAboard;
  }

let output = `The shuttle gained an altitude of ${altitudeReachedMiles} miles.`;

if (altitudeReachedMiles >= 2000) {
output += " Orbit achieved!";
}
console.log(output);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
