var Vector = (function() {
    function Vector(components) {
        this.setComponents(components);
    }

    Vector.prototype.getComponents = function getComponents() {
        return this._components;
    }

    Vector.prototype.setComponents = function setComponents(value) {
        if(!(value instanceof Array)) {
            throw new Error("Components must be an array");
        }

        var length = value.length;
        if(length == 0) {
            throw new Error("Vector must have at least one component");
        }

        for(var i = 0; i < length; i += 1) {
            if(typeof value[i] !== "number") {
                throw new Error("All components must be numbers");
            }
        }

        this._components = value;
    }

    Vector.prototype.add = function add(secondVector) {
        checkIsValidVector.call(this, secondVector);

        var length = this.getComponents().length;
        var resultComponents = [];
        for(var i = 0; i < length; i += 1) {
            resultComponents.push(this.getComponents()[i] + secondVector.getComponents()[i]);
        }

        return new Vector(resultComponents);
    }

    Vector.prototype.subtract = function subtract(secondVector) {
        checkIsValidVector.call(this, secondVector);

        var length = this.getComponents().length;
        var resultComponents = [];
        for(var i = 0; i < length; i += 1) {
            resultComponents.push(this.getComponents()[i] - secondVector.getComponents()[i]);
        }

        return new Vector(resultComponents);
    }

    Vector.prototype.dot = function dot(secondVector) {
        checkIsValidVector.call(this, secondVector);

        var length = this.getComponents().length;
        var resultComponents = [];
        for(var i = 0; i < length; i += 1) {
            resultComponents.push(this.getComponents()[i] * secondVector.getComponents()[i]);
        }

        return resultComponents.reduce(function(previousValue, currentValue, index, array) {
          return previousValue + currentValue;
        }, 0);
    }

    Vector.prototype.norm = function norm() {
        return Math.sqrt(this.getComponents().reduce(function(previousValue, currentValue, index, array) {
            return previousValue + Math.pow(currentValue, 2);
        }, 0));
    }


    Vector.prototype.toString = function toString() {
        return "(" + this.getComponents().join(", ") + ")";
    }

    function checkIsValidVector(vector)
    {
        if(!(vector instanceof Vector)) {
            throw new Error("Can't add non vector element");
        }

        if(this.getComponents().length !== vector.getComponents().length) {
            throw new Error("The count of the components of the vectors must be equal");
        }
    }

    return Vector;
})();

var a = new Vector([1, 2, 3]);
var b = new Vector([4, 5, 6]);
var c = new Vector([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
console.log(a.toString());
console.log(c.toString());
//var wrong = new Vector();
//var anotherWrong = new Vector([]);
//var g = new Vector("test");
var result = a.add(b);
console.log(result.toString());
//a.add(c); // Error

result = a.subtract(b);
console.log(result.toString());
//a.subtract(c); // Error

result = a.dot(b);
console.log(result.toString());
//a.dot(c); // Error

console.log(a.norm());
console.log(b.norm());
console.log(c.norm());
console.log(a.add(b).norm());


