shapeModule = shapeModule || {};

(function(parentModule) {
    function Segment(x, y, color, x2, y2) {
        shapeModule.Shape.call(this, x, y ,color);
        this.points.push({x: x2, y: y2});
    }

    Segment.prototype = Object.create(shapeModule.Shape.prototype);
    Segment.prototype.constructor = Segment;

    Segment.prototype.toString = function() {
        return shapeModule.Shape.prototype.toString.call(this) + ', X2: ' + this.points[1].x + ', Y2: ' + this.points[1].y;
    };

    parentModule.Segment = Segment;
}(shapeModule));