function compose(firstFunction, secondFunction) {
    function composedFunction() {
        var secondFunctionResult = secondFunction.apply(null, arguments);
        return firstFunction(secondFunctionResult);
    }

    return composedFunction;
}

function add(x, y) {
    return x + y;
}

function addOne(x) {
    return x + 1;
}
function square(x) {
    return x * x;
}

var compositeFunction = compose(Math.sqrt, Math.cos);
console.log(compositeFunction(0.5));
console.log(compositeFunction(1));
console.log(compositeFunction(-1));
