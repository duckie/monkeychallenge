define(['underscore','rsvp'],function(_, RSVP) {
  'use strict';

  // Prototype to store shared function for the grid object
  var GridPlayBase = {
    // Default values
    width: 5,
    height: 5,
    count_until: 5,

    _play: function(posx, posy, resolve, reject) {
      resolve(true); 
      //reject(true);
    },

    play: function(posx, posy) {
      self = this;
       return new RSVP.Promise(function(resolve, reject) {
         self._play(posx, posy, resolve, reject);
       });
    }
  };

  function GridPlayCtor(user_options) {
    var grid = Object.create(GridPlayBase);
    _.extend(grid, user_options);
    return grid;
  };

  return {
    createSingleGridPlay: GridPlayCtor
  };  
})
