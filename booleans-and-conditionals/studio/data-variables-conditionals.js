// Initialize Variables below

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions


//letslaunch

let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
let fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel = "100%";
//typeoff to convert to a number?
let weatherStatus = "clear";
let preparedForLiftOff = true;

//if astronautCount is no greater than 7

//console.log("All systems are a go! Initiating space shuttle launch sequence.");
/*
if (astronautCount == 7 &&
    astronautStatus === 'ready' &&
    totalMassKg < maximumMassLimit &&
    (fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius <= maximumFuelTemp) &&
    fuelLevel === '100%' &&
    weatherStatus === 'clear') {
    console.log("All conditions are met. Proceed with lift off.");
} else {
    console.log("Conditions for lift off are not fully satisfied.");
}
    */
if (astronautCount == 7 &&
    astronautStatus === 'ready' &&
    totalMassKg < maximumMassLimit &&
    (fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius <= maximumFuelTemp) &&
    fuelLevel === '95%' &&
    weatherStatus === 'clear') {
    // Print shuttle information
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Astronaut Count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg + " kg");
    console.log("Fuel Mass: " + fuelMassKg + " kg");
    console.log("Shuttle Mass: " + shuttleMassKg + " kg");
    console.log("Total Mass: " + totalMassKg + " kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + " Celsius");
    console.log("Weather Status: " + weatherStatus);

    // Wish astronauts a safe flight
    console.log("To Inifinity and beyond! Launch!");
} else {
    // Conditions not met, shut down launch operations
    console.log("Conditions for lift off are not fully satisfied. ABORT LAUNCH!");
}