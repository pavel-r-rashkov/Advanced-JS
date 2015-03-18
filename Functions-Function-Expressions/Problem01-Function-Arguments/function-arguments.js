function printArgsInfo() {
    Array.prototype.map.call(arguments, function(element) {
        var type = typeof element;
        type = element instanceof Array ? "array" : type;
        console.log(element + " (" + type + ")");
    })
}

printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
