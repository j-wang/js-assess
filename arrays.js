if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        found = false;
        i = 0;
        while (!found && i < arr.length) {
            if (arr[i] === item) {
                return i;
            } else {
                i++;
            }
        }
        return -1;
    },

    sum : function(arr) {
        len = arr.length;
        total = 0;
        for (i = 0; i < len; i++) {
            total += arr[i];
        }
        return total;
    },

    remove : function(arr, item) {
        len = arr.length;
        result = [];
        for (i = 0; i < len; i++) {
            if (arr[i] !== item) {
                result[result.length] = arr[i];
            }
        }
        return result;
    },

    removeWithoutCopy : function(arr, item) {
        len = arr.length;
        for (i = 0; i < len; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
                len--;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr[arr.length] = item;
        return arr;
    },

    truncate : function(arr) {
        arr.splice(arr.length - 1, 1);
        return arr;
    },

    prepend : function(arr, item) {
        len = arr.length;
        prior = item;
        next = arr[0];
        for (i = 0; i < len + 1; i++) {
            arr[i] = prior;
            prior = next;
            next = arr[i + 1];
        }
        return arr;
    },

    curtail : function(arr) {
        len = arr.length;
        prior = arr[len - 1];
        next = arr[len - 2];
        for (i = len - 2; i >= 0; i--) {
            arr[i] = prior;
            prior = next;
            next = arr[i - 1];
        }
        arr.splice(len - 1);
        return arr;
    },

    concat : function(arr1, arr2) {
        newarr = [];
        len1 = arr1.length;
        len2 = arr2.length;
        for (i = 0; i < len1; i++) {
            newarr[i] = arr1[i];
        } 
        for (j = 0; j < len2; j++) {
            newarr[len1 + j] = arr2[j];
        }
        return newarr;
    },

    insert : function(arr, item, index) {
        var prior, next;
        len = arr.length;
        for (i = 0; i < len + 1; i++) {
            if (i === index) {
                prior = arr[i];
                next = arr[i + 1];
                arr[i] = item;
            } else if (i > index) {
                arr[i] = prior;
                prior = next;
                next = arr[i + 1];
            }
        }
        return arr;
    },

    count : function(arr, item) {
        len = arr.length;
        occur = 0;
        for (i = 0; i < len; i++) {
            if (arr[i] === item) {
                occur++;
            }
        }
        return occur;
    },

    duplicates : function(arr) {
        var current;
        len = arr.length;
        tracker = [];
        dupes = [];
        for (i = 0; i < len; i++) {
            current = arr[i];
            if (tracker.indexOf(current) != -1 && 
                    dupes.indexOf(current) == -1) {
                dupes[dupes.length] = current;
            } else {
                tracker[tracker.length] = current;
            }
        }
        return dupes;
    },

    square : function(arr) {
        len = arr.length;
        result = [];
        for (i = 0; i < len; i++) {
            result[i] = arr[i] * arr[i];
        }
        return result;
    },

    findAllOccurrences : function(arr, target) {
        len = arr.length;
        result = [];
        for (i = 0; i < len; i++) {
            if (arr[i] == target) {
                result[result.length] = i
            }
        }
        return result;
    }
  };
});
