shapeModule = shapeModule || {};

(function(parentModule) {
    function Point(x, y, color) {
        shapeModule.Shape.call(this, x, y ,color);
    }

    Point.prototype = Object.create(shapeModule.Shape.prototype);
    Point.prototype.constructor = Point;

    Point.prototype.draw = function(canvasId) {
        var ctx = shapeModule.Shape.prototype.draw.call(this, canvasId);
        ctx.fillRect(this.points[0].x, this.points[0].y, 2, 2);
    };

    Point.prototype.toString = function() {
        return shapeModule.Shape.prototype.toString.call(this) + ', X2: ' + this.points[0].x + ', Y2: ' + this.points[0].y;
    };

    parentModule.Point = Point;
}(shapeModule));