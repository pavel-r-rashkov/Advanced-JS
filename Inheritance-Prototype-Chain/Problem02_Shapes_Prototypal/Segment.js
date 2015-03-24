shapeModule = shapeModule || {};

(function(parentModule) {
    var segment = shapeModule.shape.extend({
        init: function init(x, y, color, x2, y2) {
            this._super.init.call(this, x, y ,color);
            this.points.push({x: x2, y: y2});
            return this;
        },
        toString: function toString() {
            return 'Segment' + this._super.toString.call(this) + ', X2: ' + this.points[1].x + ', Y2: ' + this.points[1].y;
        }
    });

    parentModule.segment = segment;
}(shapeModule));