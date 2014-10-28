define(['underscore'],function(_) {
  'use strict';

  // Prototype to store shared function for the grid object
  var GridPlayBase = {
    // Default values
    width: 5,
    height: 5,
    count_until: 5
    // 
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
