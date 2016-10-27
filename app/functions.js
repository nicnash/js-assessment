if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn,[greeting,name,punctuation]) {
        return fn(greeting,name,punctuation);
    },

    speak : function(fn, obj) {
        obj.speak = fn;
        return obj.speak();
    },

    functionFunction : function(str) {
        // console.log(str + ", ");
        // console.log(return functionFunction(str));
    },

    makeClosures : function(arr, fn) {
        let funcs = []
        for (var i = 0; i < arr.length; i++) {
            let temp = arr[i];
            funcs.push(
                function() {
                    x = temp;
                    return fn(temp);
                });
        }
        return funcs;
    },

    partial : function(fn, str1, str2) {
        return (function(punc){
                    greeting = str1;
                    name = str2;
                    return fn(greeting,name,punc);
                });
    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});




['hi','hello']
