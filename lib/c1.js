var B = require('eob/B');
var A = require('eob/A');

var C1 = function() {
  A();
  B();
  console.log('C1');
};

module.exports = C1;