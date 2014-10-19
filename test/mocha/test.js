define(['monkeys','mocha','chai'],function(monkeys, mocha, chai) {
  assert = chai.assert;

  describe("Test 1", function() {
    assert.equal(monkeys.roger(),2,"Function roger should return 2");
  });
});
