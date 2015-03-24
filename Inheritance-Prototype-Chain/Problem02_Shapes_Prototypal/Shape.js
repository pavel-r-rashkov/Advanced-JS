var shapeModule = shapeModule || {};

(function(parentModule) {
    var shape = {
        init: function init(x, y, color) {
            this.points = [{x: x, y: y}];
            this.setColor(color);
            return this;
        },  
        getColor: function getColor() {
            return this.color;
        },
        setColor: function setColor(c) {
            if(c.length !== 7 || c[0] !== '#' || c.substring(1, c.length).match(/[^\da-f]/i)) {
                throw new Error('Invalid color');
            } else {
                this.color = c;
            }
        },
        toString: function toString() {
            return ' - X: ' + this.points[0].x + ', Y: ' + this.points[0].y + ', Color: ' + this.getColor();
        }
    }

    parentModule.shape = shape;
}(shapeModule));