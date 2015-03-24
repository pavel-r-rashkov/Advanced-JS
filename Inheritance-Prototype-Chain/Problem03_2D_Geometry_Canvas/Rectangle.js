shapeModule = shapeModule || {};

(function(parentModule) {

    function Rectangle(x, y, color, width, height) {
        shapeModule.Shape.call(this, x, y ,color);
        this.setWidth(width);
        this.setHeight(height);
    }

    Rectangle.prototype = Object.create(shapeModule.Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;


    Rectangle.prototype.getWidth = function() {
        return this.width;
    };

    Rectangle.prototype.setWidth = function(width) {
        if(width <= 0) {
            throw new Error('Width can\'t be 0 or negative');
        }else {
            this.width = width;
        }
    };

    Rectangle.prototype.getHeight = function() {
        return this.height;
    };

    Rectangle.prototype.setHeight = function(height) {
        if(height <= 0) {
            throw new Error('Height can\'t be 0 or negative');
        }else {
            this.height = height;
        }
    };

    Rectangle.prototype.draw = function(canvasId) {
        var ctx = shapeModule.Shape.prototype.draw.call(this, canvasId);
        ctx.beginPath();
        ctx.rect(this.points[0].x, this.points[0].y, this.getWidth(), this.getHeight());
        ctx.fillStyle = this.color; 
        ctx.fill();
        ctx.closePath();
    };

    Rectangle.prototype.toString = function() {
        return shapeModule.Shape.prototype.toString.call(this) + ', Width: ' + this.getWidth() + ', Height: ' + this.getHeight();
    };

    parentModule.Rectangle = Rectangle;
}(shapeModule));