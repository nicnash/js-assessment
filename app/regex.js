if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([a-z])\1/i.test(str)
    },

    endsWithVowel : function(str) {
        return /[aeiou]$/i.test(str)
    },

    captureThreeNumbers : function(str) {
        if(/[0-9]{3}/.test(str)){
            return str.match(/[0-9]{3}/)[0]
        } else {
            return false;
        }
    },

    matchesPattern : function(str) {
        return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str)
    },
    
    isUSD : function(str) {
        return /(?=.)^\$(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{2})?$/.test(str);
   }
  };
});
