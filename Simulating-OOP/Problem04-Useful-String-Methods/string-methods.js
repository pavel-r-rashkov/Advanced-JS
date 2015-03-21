String.prototype.startsWith = function startsWith(substring) {
    stringStart = this.substr(0, substring.length);
    
    if(stringStart === substring) {
        return true;
    }
    return false;
}

String.prototype.endsWith = function endsWith(substring) {
    stringEnd = this.substr(this.length - substring.length, substring.length);
    
    if(stringEnd === substring) {
        return true;
    }
    return false;
}

String.prototype.left = function left(count) {
    stringStart = this.substr(0, count);
    return stringStart;
}

String.prototype.right = function right(count) {
    startIndex = this.length - count < 0 ? 0 : this.length - count;
    stringEnd = this.substr(startIndex, count);
    return stringEnd;
}

String.prototype.padLeft = function padLeft(count, character) {
    character = character || " ";
    var charCount = count - this.length;
    charCount = charCount < 0 ? 0 : charCount;
    return character.repeat(charCount) + this;
}

String.prototype.padRight = function padRight(count, character) {
    character = character || " ";
    var charCount = count - this.length;
    charCount = charCount < 0 ? 0 : charCount;
    return this + character.repeat(charCount);
}

String.prototype.repeat = function repeat(count) {
    var result = "";

    for(var i = 0; i < count; i += 1) {
        result += this;
    }
    return result;
}

var example = "This is an example string used only for demonstration purposes.";

console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log("====================");
console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log("====================");
console.log(example.left(9));
console.log(example.left(90));

console.log("====================");
console.log(example.right(9));
console.log(example.right(90));

var secondExample = "abcdefgh";
console.log(secondExample.left(5).right(2));

console.log("====================");
var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log("====================");
console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

console.log("====================");
var character = "*";
console.log(character.repeat(5));
console.log("~".repeat(3));

console.log("====================");
console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));

