function testContext() {
    console.log(this);
}

// Calling from global scope.
// Will print the global object
testContext();

function wrapper() {
    testContext();
}

// Calling from another function.
// Will print the global object
wrapper();

// Calling as an object.
// This will point to concrete object.
var obj = new testContext();