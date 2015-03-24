shapeModule = shapeModule || {};

(function(parentModule) {
    function Point(x, y, color) {
        shapeModule.Shape.call(this, x, y ,color);
    }

    Point.prototype = Object.create(shapeModule.Shape.prototype);
    Point.prototype.constructor = Point;

    parentModule.Point = Point;
}(shapeModule));