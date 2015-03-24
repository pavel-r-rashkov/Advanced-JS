shapeModule = shapeModule || {};

(function(parentModule) {
    var triangle = shapeModule.shape.extend({
        init: function init(x, y, color, x2, y2, x3, y3) {
            this._super.init.call(this, x, y ,color);
            this.points.push({x: x2, y: y2}, {x: x3, y: y3});
            return this;
        },
        toString: function toString() {
            return 'Triangle' + this._super.toString.call(this) + ', X2: ' + this.points[1].x + ', Y2: ' + this.points[1].y
                + ', X3: ' + this.points[2].x + ', Y3: ' + this.points[2].y;
        }
    });

    parentModule.triangle = triangle;
}(shapeModule));