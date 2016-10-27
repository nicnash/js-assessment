if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce((total,num)=>total+num);
    },

    remove : function(arr, item) {
      return arr.filter((arrayItem)=>arrayItem!==item);
    },

    removeWithoutCopy : function(arr, item) {
      let foundIndexArr =[];

      //trying to use for of loop more because of its flexability
      for(const [i,arrItem] of arr.entries()) {
        if(arrItem === item){
          foundIndexArr.push(i);
        }
      }

      //go in reverse so that removing the item doesnt effect the remaining items.  Alternatively could have gone reverse on first loop.
      for (var i = foundIndexArr.length-1; i >= 0; i--) {
        arr.splice(foundIndexArr[i],1);
      }

      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item)
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return [...arr1,...arr2];
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
      //Addressing edge cases: for this function if index is lower than 0 it prepends, greater than the length it appends
      // if (index<=0) {
      //   return prepend(arr,item)
      // } else if(index >= arr.length) {
      //   return append(arr,item);
      // } else {
      //   return [...arr.slice(0,index), item, ...arr.slice(index)]
      // }
    },

    count : function(arr, item) {
      // the reduce in following comment works but i think i still prefer the loop for clarity.  Not sure if it is because I am not super used to it.  Should be team decision
      // return arr.reduce((pre,cur) => {return cur===item ? pre+1 : pre},0);

      let count=0;
      for(const arrItem of arr) {
        if(arrItem === item){
          count++;
        }
      }

      return count;
    },

    duplicates : function(arr) {
      //Could have done this many ways, it was fun implementing this
      // and gave me a chance to mess with sets.  Also thought about 
      // using map with the item:count but then id have to filter
      // a memory vs processing tradeoff

      let arrContains = new Set();
      let arrDuplicates = new Set();

      for (const arrItem of arr) {
        if(arrContains.has(arrItem)){
          arrDuplicates.add(arrItem)
        } else {
          arrContains.add(arrItem);
        }
      }

      return Array.from(arrDuplicates);
    },

    square : function(arr) {
      return arr.map((item) => item*item);
    },

    findAllOccurrences : function(arr, target) {
      const occurences = [];
      arr.forEach((item,i)=>{
        if(item === target){
          occurences.push(i);
        }
      })

      return occurences;
    }
  };
});
