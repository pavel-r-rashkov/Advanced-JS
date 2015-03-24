var shapeModule = shapeModule || {};

(function(parentModule) {

    function Shape(x, y, color) {
        if(this.constructor === Shape) {
            throw new Error("Cannot instantiate Shape");
        }

        this.points = [{x: x, y: y}];
        this.setColor(color);
    }

    Shape.prototype.getColor = function() {
            return this.color;
        }

    Shape.prototype.setColor = function(c) {
        if(c.length !== 7 || c[0] !== '#' || c.substring(1, c.length).match(/[^\da-f]/i)) {
            throw new Error('Invalid color');
        } else {
            this.color = c;
        }
    }

    Shape.prototype.draw = function(canvasId) {
        var canvas = document.getElementById(canvasId);
        var ctx = canvas.getContext('2d');
        return ctx;
    };

    Shape.prototype.toString = function() {
        return this.constructor.name + ' - X: ' + this.points[0].x + ', Y: ' + this.points[0].y + ', Color: ' + this.getColor();
    };

    parentModule.Shape = Shape;
}(shapeModule));