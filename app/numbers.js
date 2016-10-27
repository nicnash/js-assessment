if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        stringNum = num.toString(2);
        l = stringNum.length;
        if(bit > l) {
            return 0;
        }

        return +(num.toString(2)[l-bit]);
    },

    base10: function(str) {
        return parseInt(str,2);
    },

    convertToBinary: function(num) {
        num+=2251799813685248;
        return num.toString(2).slice(-8);
    },

    multiply: function(a, b) {
        // return +(3 * .0000000001).toFixed(8);  // would work but i feel its more hackey / less accurate in certain scenarios

        var commonMultiplier = 1000000;

        a *= commonMultiplier;
        b *= commonMultiplier;

        return (a * b) / (commonMultiplier * commonMultiplier);
    }
  };
});

