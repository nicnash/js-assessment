if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName,isSubfolder = false) {
    	let list = [];
    	let currdir = data.dir;
    	let files = data.files;
    	if(files){
	    	for(const [i,fileItem] of files.entries()) {
	    		if(dirName){
	    			if(dirName === currdir){
	    				isSubfolder = true;
	    			}
					if(typeof fileItem === 'string' && isSubfolder){
						list.push(fileItem);
					} else {
						list = list.concat(this.listFiles(fileItem,dirName,isSubfolder));
					}
				} else {
					if(typeof fileItem === 'string'){
						list.push(fileItem);
					} else {
						list = list.concat(this.listFiles(fileItem,dirName,true));
					}
				}
	    	}
    	}
    	return list;
    },

    permute: function(arr, prefix = [], list =[]) {

        if(arr.length <= 1) {
            list.push([...prefix,...arr]);
        } else {
            for (var i = 0; i < arr.length; i++) {
                let cur = arr[i];
                let everythingElse = this.remove(arr,i);
                
                this.permute(everythingElse , prefix.concat(cur),list);
            }
        }
        return list;
    },

    remove : function(arr, index) {
      return arr.filter((arrayItem,i)=>i!==index);
    },
  };
});