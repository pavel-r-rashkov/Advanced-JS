shapeModule = shapeModule || {};

(function(parentModule) {
    var point = shapeModule.shape.extend({
        init: function init(x, y, color) {
            this._super.init.call(this, x, y ,color);
            return this;
        },
        toString: function toString() {
            return 'Point' + this._super.toString.call(this);
        }
    });

    parentModule.point = point;
}(shapeModule));