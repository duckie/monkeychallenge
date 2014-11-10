// Module need because the karma plugin karma-chai-pluins is shitty
define(['chai','chai-as-promised','es5-shim'], function(chai,chaiaspromised) {
  'use strict';
  chai.use(chaiaspromised);
  chai.should();
  return chai;
});
