if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	obj.sayIt = fn;
    	return obj.sayIt();
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    	return constructor;
    },

    iterate : function(obj) {
    	let propertiesList = [];

    	for (var key in obj) {
    	    if (obj.hasOwnProperty(key)) {
    	    	propertiesList.push(`${key}: ${obj[key]}`)
    	  	}
    	}
    	
    	return propertiesList;
    }
  };
});
