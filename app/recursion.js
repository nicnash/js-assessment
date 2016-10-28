if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	let list = [];
    	let currdir = data.dir;
    	let files = data.files;
    	if(files){
	    	for(const [i,fileItem] of files.entries()) {
	    		if(dirName){
					if(typeof fileItem === 'string' && dirName === currdir){
						list.push(fileItem);
					} else {
						list = list.concat(this.listFiles(fileItem,dirName));
					}
				} else {
					if(typeof fileItem === 'string'){
						list.push(fileItem);
					} else {
						list = list.concat(this.listFiles(fileItem,dirName));
					}
				}
	    	}
    	}
    	console.log(currdir,list);
    	return list;
    	
    },

    permute: function(arr) {

    }
  };
});
