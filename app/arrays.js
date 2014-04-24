if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        for (var i = 0; i<arr.length; i++)
        {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var index = arr.indexOf(item);
        for (var i = 0; i<arr.length-1; i++)
        {
            arr.splice(index, 1);
            index = arr.indexOf(item);
        }
        return arr;

    },

    removeWithoutCopy : function(arr, item) {
        var index = arr.indexOf(item);
        for (var i = 0; i<arr.length; i++)
        {
            arr.splice(index, 1);
            index = arr.indexOf(item);
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
        arr.splice(0,0,item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        var x= arr1.concat(arr2);
        return x;

    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
         return arr.count(item);

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
