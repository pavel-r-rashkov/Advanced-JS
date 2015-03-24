var shapeModule = shapeModule || {};

(function() {
    var shapes = [];
    var lastShapeId = 0;
    
    var shapeTypeSelect = document.getElementById('shapeType');
    var shapeSpecific = document.getElementById('shapeSpecific');
    var shapesList = document.getElementById('shapes');
    
    shapeTypeSelect.onchange = function() {
        removeInputFields();

        switch(shapeTypeSelect.value) {
            case 'Circle':
                generateCircleInput(); break;
            case 'Triangle':
                generateTriangleInput(); break;
            case 'Segment':
                generateSegmentInput(); break;
            case 'Rectangle':
                generateRectangleInput(); break;
            case 'Point':
                break;
            default:
                console.log('invalid shape'); break;
        }
    };

    function removeInputFields() {
        while (shapeSpecific.firstChild) {
            shapeSpecific.removeChild(shapeSpecific.firstChild);
        }
    }

    function generateCircleInput() {
        
        var innerHTML = ['<label for="radius">Radius: </label>',
            '<input type="number" id="radius">'].join('');
        shapeSpecific.insertAdjacentHTML("afterbegin", innerHTML);
    }

    function generateTriangleInput() {
    
        var innerHTML = ['<label for="x2">X2: </label><input type="number" id="x2">',
                '<label for="y2">Y2: </label><input type="number" id="y2"><br />',
                '<label for="x3">X3: </label><input type="number" id="x3"><label for="y3">Y3: ',
                '</label><input type="number" id="y3"><br />'].join('');

        shapeSpecific.insertAdjacentHTML("afterbegin", innerHTML);
    }

    function generateSegmentInput() {
        
        var innerHTML = ['<label for="x2">X2: </label><input type="number" id="x2">',
                '<label for="y2">Y2: </label><input type="number" id="y2">'].join('');

        shapeSpecific.insertAdjacentHTML("afterbegin", innerHTML);
    }

    function generateRectangleInput() {
    
        var innerHTML = ['<label for="width">Width: </label><input type="number" id="width">',
                '<label for="height">Height: </label><input type="number" id="height">'].join('');

        shapeSpecific.insertAdjacentHTML("afterbegin", innerHTML);
    }

    function reDraw(canvasId, elements) {
        var canvas = document.getElementById(canvasId);
        var context = canvas.getContext('2d');
        context.clearRect ( 0, 0, canvas.width, canvas.height );

        elements.sort(function(a, b) { return a.zindex - b.zindex; });

        for(var elementIndex in elements) {
            elements[elementIndex].draw(canvasId);
        }
    }

    document.getElementById('add').onclick = function() {

        var shape;
        var x = document.getElementById('x').value;
        var y = document.getElementById('y').value;
        var color = document.getElementById('color').value;

        switch(shapeTypeSelect.value) {
            case 'Circle':
                shape = new shapeModule.Circle(x, y, color, document.getElementById('radius').value); 
                break;
            case 'Triangle':
                shape = new shapeModule.Triangle(x, y, color, document.getElementById('x2').value,
                    document.getElementById('y2').value, document.getElementById('x3').value, document.getElementById('y3').value); 
                break;
            case 'Segment':
                shape = new shapeModule.Segment(x, y, color, document.getElementById('x2').value,
                    document.getElementById('y2').value); 
                break;
            case 'Rectangle':
                shape = new shapeModule.Rectangle(x, y, color, document.getElementById('width').value,
                    document.getElementById('height').value);
                break;
            case 'Point':
                shape = new shapeModule.Point(x, y, color); break;
        }

        if(shape) {
            shape.zindex = 0;
            shapes.push(shape);
            reDraw('myCanvas', shapes);

            var listElement = document.createElement('option');
            listElement.appendChild(document.createTextNode(shape.toString()));
            listElement.setAttribute('value', lastShapeId);
            shape.id = lastShapeId;
            lastShapeId += 1;
            shapesList.appendChild(listElement);
        } else {
            alert('invalid shape')
        }
    };

    document.getElementById('remove').onclick = function() {
        var elementId = shapesList.value;

        var length = shapes.length;
        for(var i = 0 ; i < length; i += 1) {
            if(shapes[i].id == elementId) {
                shapes.splice(i, 1);
                length -= 1;
                var children = shapesList.children;

                var childrenLength = children.length;
                for(var j = 0 ; j < childrenLength; j += 1) {
                    if(children[j].getAttribute('value') == elementId) {
                        shapesList.removeChild(children[j]);
                        break;
                    }
                }
            }
        }

        reDraw('myCanvas', shapes);
    };

    document.getElementById('increaseZindex').onclick = function() {
        changeZindex(1);
        reDraw('myCanvas', shapes);
    };

    document.getElementById('decreaseZindex').onclick = function() {
        changeZindex(-1);
        reDraw('myCanvas', shapes);
    };

    function changeZindex(value) {
        var elementId = shapesList.value;

        var length = shapes.length;
        for(var i = 0 ; i < length; i += 1) {
            if(shapes[i].id == elementId) {
                shapes[i].zindex += value;
                break;
            }
        }
    }

}());



