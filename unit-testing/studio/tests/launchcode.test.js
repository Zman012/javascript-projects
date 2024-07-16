// launchcode.test.js code:
const launchcode = require('../index.js');

describe("The LaunchCode Object", function() {

  test("should hae a property called organization", function() {
    expect(launchcode.organization).toEqual("nonprofit")  //toEqual checks iterativly - safer toBe is same reference/o //toEqual try to use toEqual //tobe shallow equality primitive // you can do a newsted describe - use all toEqual
                                              
  });

  test("check executive director name", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("check perctange of cool employees", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  })

  test("check programsOffered", function() {
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  describe("should have a method called launchOutput, which", function()  {

    test("should return 'Launch!' for numbers evenly divisible by 2", function() {
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });
    test("should return 'Code!' for numbers evenly divisible by 2", function() {
      expect(launchcode.launchOutput(3)).toEqual("Code!");
    
    });
    test("should return 'Rocks!' for numbers evenly divisible by 2", function() {
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
    });
    test("should return 'LaunchCode!' for numbers evenly divisible by both 2 and 3", function() {
      expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
    });
    test("should return 'Code Rocks!' for numbers evenly divisible by both 3 and 5", function() {
      expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
    });
    test("should return 'Launch Rocks! (CRASH!!!!)' for numbers evenly divisible by both 2 and 5", function() {
      expect(launchcode.launchOutput(10)).toEqual("Launch Rocks! (CRASH!!!!)");
    });
    test("should return 'LaunchCode Rocks!' for numbers evenly divisible by both 2 3, and 5", function() {
      expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
    });
    test("should return 'Rutabagas! that doesn't work.' for numbers not evenly divisible by both 2 3, and 5", function() {
      expect(launchcode.launchOutput(7)).toEqual("Rutabagas! that doesn't work.");
    });

});

});





//Jest runner for extension to run single tests - adds hot links for run | debug
//run all of code when adding new blocks to check if old code breaks