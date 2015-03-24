shapeModule = shapeModule || {};

(function(parentModule) {
    var rectangle = shapeModule.shape.extend({
        init: function init(x, y, color, width, height) {
            this._super.init.call(this, x, y ,color);
            this.setWidth(width);
            this.setHeight(height);
            return this;
        },
        getWidth: function getWidth() {
            return this.width;
        },
        setWidth: function setWidth(width) {
            if(width <= 0) {
                throw new Error('Width can\'t be 0 or negative');
            }else {
                this.width = width;
            }
        },
        getHeight: function getHeight() {
            return this.height;
        },
        setHeight: function setHeight(height) {
            if(height <= 0) {
                throw new Error('Height can\'t be 0 or negative');
            }else {
                this.height = height;
            }
        },
        toString: function toString() {
            return 'Rectangle' + this._super.toString.call(this) + ', Width: ' + this.getWidth() + ', Height: ' + this.getHeight();
        }
    });

    parentModule.rectangle = rectangle;
}(shapeModule));