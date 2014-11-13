define(['monkeys','chai-setup'], function(monkeys,chai) {
  'use strict';
  describe("Grid play model",function() {

    beforeEach(function() {
      this.grid1 = monkeys.createSingleGridPlay({
        width:10,
        shuffle_func: _.identity
      });
    });

    it("Construction",function() { 
      this.grid1.width.should.equal(10);
      this.grid1.height.should.equal(5);
      this.grid1.current.should.equal(0);
      this.grid1.count_until.should.equal(5);
      this.grid1.values[0][0].should.equal(1);
    });

    it("Basic play",function() { 
      return this.grid1.play(0,1).should.eventually.deep.include({
        current:0,
        next_expected:1,
        nb_failed_attempt:0,
        finished:false
      });
    });

    it("Basic play 2",function() { 
      var that = this;
      return this.grid1.play(1,0)
        .then(function() { return that.grid1.play(0,0); })
        .should.eventually.deep.include({
          current:1,
          finished:false
        });
    });

    it("Basic play 3",function() { 
      var that = this;
      return this.grid1.play(0,0)
        .then(function() { return that.grid1.play(1,0); })
        .then(function() { return that.grid1.play(2,0); })
        .then(function() { return that.grid1.play(3,0); })
        .then(function() { return that.grid1.play(3,1); })  // Failed attempt
        .then(function() { return that.grid1.play(4,0); })
        .should.eventually.deep.include({
          current:5,
          next_expected:null,
          nb_failed_attempt:1,
          finished:true
        });
    });
  });
});
