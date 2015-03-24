shapeModule = shapeModule || {};

(function(parentModule) {
    var circle = shapeModule.shape.extend({
        init: function init(x, y, color, radius) {
            this._super.init.call(this, x, y ,color);
            this.setRadius(radius);
            return this;
        },
        getRadius: function getRadius() {
            return this.radius;
        },
        setRadius: function setRadius(radius) {
            if(radius <= 0) {
                throw new Error('Radius can\'t be 0 or negative');
            }else {
                this.radius = radius;
            }
        },
        toString: function toString() {
            return 'Circle' + this._super.toString.call(this) + ', Radius: ' + this.getRadius();
        }
    });
    
    parentModule.circle = circle;
}(shapeModule));