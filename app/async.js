if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	// return new Promise((resolve,reject) => {
    	// 	resolve(value);
    	// });
    	return Promise.resolve(value);
    },

    manipulateRemoteData : function(url) {
		let response = fetch(url)
			.then(data => data.json())
			.then(data => data.people.map((item)=>item.name).sort())
			.catch((err) => {
				console.error(err);
			});
			
		return response;
    }
  };
});
