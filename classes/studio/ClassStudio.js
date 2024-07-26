//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name,mass,scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore)
    }
    average() {
        let total = 0
        for (let i = 0; i < this.scores.length;) {
            total += this.scores[i]

        }
        return Math.round(total/this.scores.length*10)/10
    }
    status() {
            if(this.average() < 70) {
            return "rejected"
            }
             else if(this.average() > 69 && this.average() < 80) {
            return "Probationary";
             }
            else if(this.average() < 79 ** this.average < 90) {
            return "reserve";
             }
            else if(this.average > 89) {
            return "accepted";
         }
     }
 }   



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

const bear = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
const dog = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
const aligator = new CrewCandidate("Glad Gator", 225, [75,78,62]);

console.log(bear);
console.log(dog);
console.log(aligator);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? 
//How many to reach Accepted? Remember, scores cannot exceed 100%.

bear.addScore(83);

console.log(bear.scores)
console.log(aligator.average())

let gatorGetsGoodGrades = 0;
while (aligator.status === "Probationary") {
    aligator.addScore(100);
    gatorGetsGoodGrades ++;
}

let gatorGetsBestGrades = 0;
while (alligator.status() === "reserve") {
    aligator.addScore(100);
    gatorGetsBestGrades ++;
}