function add(sum) {

    function increment(inc) {
        return add(sum + inc);
    }

    increment.toString = function() {
        return sum;
    }

    increment.valueOf = function() {
        return sum;
    }

    return increment;
}

console.log(add(1));
//console.log('' + add(1));    // In Node.js

var addTwo = add(2);
console.log(addTwo);
//console.log('' + addTwo);    // In Node.js

var addTwo = add(2); 
console.log(addTwo(3));
//console.log(addTwo(3));      // In Node.js

