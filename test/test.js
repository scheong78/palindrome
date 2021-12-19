// assert is an assertion library that lets us assert that things are true in our tests
let assert = require("assert");
// This is the Phrase object
let Phrase = require("../index.js");

// describe is a function from assert
describe("Phrase", function() {
  // We us a hash mark # to indicate an object method (Phrase#palindrome)
  describe("#palindrome", function() {
    // it is anotehr function from assert. Here we take a string and a function
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    })

    it("should return true for a plain palindrome", function () {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    })

    // To leave a pending test, do not include a function as the 2nd parameter
    // Exercise 8.2.2. By filling in the code in Listing 8.7, add a test for a mixed-case palindrome like “RaceCar”. Is the test suite still green?
    it("should return true for a mixed-case palindrome", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    })
  });

  describe("#letters", function() {
    it("should return only letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });
  });
});
