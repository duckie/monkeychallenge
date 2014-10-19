define(['monkeys'], function(monkeys) {
  describe("Blah",function() {
    it("Tests things",function() { 
      chai.assert.equal(monkeys.roger(),2,"Function roger should return 2");
    });
  });
});
