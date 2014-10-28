define(['monkeys'], function(monkeys) {
  'use strict';
  var expect = chai.expect;

  describe("Grid play model",function() {
    it("Construction",function() { 
      var grid1 = monkeys.createSingleGridPlay({width:10});
      expect(grid1.width).to.equal(10);
    });
  });
});
