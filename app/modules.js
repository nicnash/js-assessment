if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
    	return (function (str1,str2) {
	    					greeting:str1,
	    					name:str2,
	    					sayIt(str1) {
	    						console.log(str1+', ' str2);
	    					}
								// ... all vars and functions are in this scope only
								// still maintains access to all globals
							}());
    }
  };
});

