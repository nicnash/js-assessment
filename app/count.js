if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {

	interval: null,

   	generate: function*(start, end) {
        for(let i = start; i <= end; i++) {
            yield i;
        }
    },

   	count: function(start, end) {
        let iterator = this.generate(start, end);

        interval = setInterval(this.callNext, 100, iterator, end, this.cancel);
        return {
        	cancel: function(){
        		clearInterval(interval);
        	}
    	}
    },

   	cancel: function() {
        clearInterval(interval);
    },

    callNext: function(iterator, end, cancel) {
        let response = iterator.next();
        console.log(response.value);
        if(response.value == end) {
	 	 	    cancel();
        }
   }

  };
});