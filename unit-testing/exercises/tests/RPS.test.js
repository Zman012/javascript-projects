const test = require('../RPS.js');


describe("RPS ", function(){

    it("should return 'Player 2 wins!' if P1 = rock & P2 = paper", function() {
        let output = test.whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });
 
    it("should return 'Player 2 wins!' if P1 = paper & P2 = scissors", function() {
        let output = test.whoWon('paper', 'scissors');
        expect(output).toBe("Player 2 wins!");
    });

    it("should return 'Player 1 wins!' if P1 = scissors & P2 = paper", function() {
        let output = test.whoWon('scissors', 'paper');
        expect(output).toBe("Player 1 wins!");
    });

    it("should return 'Player 1 wins!' if P1 = rock & P2 = scissors", function() {
        let output = test.whoWon('rock', 'scissors');
        expect(output).toBe("Player 1 wins!");
    });

    it("should return 'It's a tie!' if P1 = rock & P2 = rock", function() {
        let output = test.whoWon('rock', 'rock');
        expect(output).toBe("TIE");
    });

});
