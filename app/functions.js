if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn,args) {  //could do destructuring if wanted each individual argument
        return fn(...args);
    },

    speak : function(fn, obj) {
        return fn.call(obj)
    },

    functionFunction : function(str) {
        return (str2)=>`${str}, ${str2}`;
    },

    makeClosures : function(arr, fn) {
        return arr.map((item)=>()=>fn(item));
    },

    partial : function(fn, str1, str2) {
        return (punc) => fn(str1,str2,punc);
    },

    useArguments : function() {
        return [...arguments].reduce((pre,cur) => {return pre+cur},0);
    },

    callIt : function(fn,...args) {
        return fn(...args);
    },

    partialUsingArguments : function(fn,...args) {
        return (...args2) => fn(...args, ...args2);
    },

    curryIt : function(fn) {
        return (a)=>(b)=>(c)=> fn(a,b,c);
    }
  };
});
