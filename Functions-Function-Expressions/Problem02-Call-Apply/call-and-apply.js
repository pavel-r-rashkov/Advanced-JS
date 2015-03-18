function printArgsInfo() {
    Array.prototype.map.call(arguments, function(element) {
        var type = typeof element;
        type = element instanceof Array ? "array" : type;
        console.log(element + " (" + type + ")");
    })
}

printArgsInfo.call();
console.log("====================");

printArgsInfo.call(null, 1, "str", false);
console.log("====================");

printArgsInfo.apply();
console.log("====================");

printArgsInfo.apply(null, [1, "str", false]);
console.log("====================");

