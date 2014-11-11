define(['underscore','rsvp'],function(_, RSVP) {
  'use strict';

  // Prototype to store shared function for the grid object
  var GridPlayBase = {
    // Default values
    width: 5,
    height: 5,
    count_until: 5,

    _play: function(posx, posy, resolve, reject) {
      var pos = this.width*posx + posy;
      var length = this.width*this.height;
      var value_at_pos;

      if (pos < 0 || length <= pos)
        reject(new Error("Specified play position is out of range."));
      
      value_at_pos = this.values[pos];
      if (value_at_pos === this.current_state.next_expected) {
        if (value_at_pos === this.count_until) {
          // Grid is finished
          _.extend(this.current_state,{
            current:value_at_pos,
            next_expected:null,
            finished:true
          });
        }
        else {
          // Step ok, but not finished yet
          _.extend(this.current_state,{
            current:value_at_pos,
            next_expected:value_at_pos+1,
          });
        }
      }
      else if (false === this.current_state.finished) {
        ++this.current_state.nb_failed_attempt;
      }
     
      //console.log(this.current_state);
      resolve(this.current_state);
      //reject(true);
    },

    play: function(posx, posy) {
      var self = this;
       return new RSVP.Promise(function(resolve, reject) {
         self._play(posx, posy, resolve, reject);
       });
    }
  };

  function GridPlayCtor(user_options) {
    var grid = Object.create(GridPlayBase);
    var ordered_array = [];
    var index;
    var length;

    _.extend(grid, user_options);
    grid.current = 0;
    length = grid.width * grid.height;
    for (index = 0; index < grid.count_until; ++index)
      ordered_array[index] = index+1;
    for (index = grid.count_until; index < length; ++index)
      ordered_array[index] = 0;

    grid.values = _.shuffle(ordered_array);
    grid.current_state = {
      current:0,
      next_expected:1,
      nb_failed_attempt:0,
      finished:false
    };

    return grid;
  };

  return {
    createSingleGridPlay: GridPlayCtor
  };  
})
