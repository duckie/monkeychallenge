define(['monkeys','chai-setup'], function(monkeys,chai) {
  'use strict';
  var expect = chai.expect;

  describe("Grid play model",function() {

    var grid1 = monkeys.createSingleGridPlay({width:10});

    it("Construction",function() { 
      grid1.width.should.equal(10);
      grid1.height.should.equal(5);
      grid1.height = 6;
      grid1.height.should.equal(6);
      return grid1.play(0,0).should.eventually.equal(true);
    });

    it("Basic play",function() { 
      grid1.height.should.equal(6);
      //var grid1 = monkeys.createSingleGridPlay({width:10});
      //grid1.width.should.equal(10);
      //grid1.height.should.equal(5);
      return grid1.play(0,0).should.eventually.equal(true);
    });
  });
});
