shapeModule = shapeModule || {};

(function(parentModule) {

    function Circle(x, y, color, radius) {
        shapeModule.Shape.call(this, x, y ,color);
        this.setRadius(radius);
    }

    Circle.prototype = Object.create(shapeModule.Shape.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.getRadius = function() {
        return this.radius;
    };

    Circle.prototype.setRadius = function(radius) {
        if(radius <= 0) {
            throw new Error('Radius can\'t be 0 or negative');
        }else {
            this.radius = radius;
        }
    };

    Circle.prototype.toString = function() {
        return shapeModule.Shape.prototype.toString.call(this) + ', Radius: ' + this.getRadius();
    };

    parentModule.Circle = Circle;
}(shapeModule));