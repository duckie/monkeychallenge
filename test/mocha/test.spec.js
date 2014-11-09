define(['monkeys','vendor/chai/chai','vendor/chai-as-promised/lib/chai-as-promised','es5-shim'], function(monkeys,chai,asp) {
  'use strict';
  chai.use(asp);
  chai.should();
  var expect = chai.expect;

  describe("Grid play model",function() {
    it("Construction",function() { 
      var grid1 = monkeys.createSingleGridPlay({width:10});
      grid1.width.should.equal(10);

      //console.log(asp);
      return grid1.play(0,0).should.eventually.equal(true);
      //done();
    });
  });
});
