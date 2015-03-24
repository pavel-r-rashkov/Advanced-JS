shapeModule = shapeModule || {};

(function(parentModule) {
    function Triangle(x, y, color, x2, y2, x3, y3) {
        shapeModule.Shape.call(this, x, y ,color);
        this.points.push({x: x2, y: y2}, {x: x3, y: y3});
    }

    Triangle.prototype = Object.create(shapeModule.Shape.prototype);
    Triangle.prototype.constructor = Triangle;

    Triangle.prototype.toString = function() {
        return shapeModule.Shape.prototype.toString.call(this) + ', X2: ' + this.points[1].x + ', Y2: ' + this.points[1].y
            + ', X3: ' + this.points[2].x + ', Y3: ' + this.points[2].y;
    };

    parentModule.Triangle = Triangle;
}(shapeModule));