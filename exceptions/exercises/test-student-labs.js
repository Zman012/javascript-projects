function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let result;
    try {
      result = lab.runLab(3);
    } catch (error) {
      result = `Error thrown with the ${studentLabs2.student[i] + "'s"} code`;
      console.log(result)
    }

    console.log(`${lab.student} code worked: ${result === 27}`);
  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

// gradeLabs(studentLabs);

gradeLabs(studentLabs2);

//Add a try/catch block inside of gradeLabs 
//to catch an exception if the runLab property is not defined. 
//If the exception is thrown, result should be set to the text "Error thrown".


