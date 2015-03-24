var shapeModule = shapeModule || {};

var circle = new shapeModule.Circle(1, 1, '#121212', 5);
console.log(circle.toString());

var rec = new shapeModule.Rectangle(1, 1, '#121212', 5, 10);
console.log(rec.toString());

var p = new shapeModule.Point(1, 1, '#128212');
console.log(p.toString());

var s = new shapeModule.Segment(1, 1, '#121212', 2, 2);
console.log(s.toString());

var t = new shapeModule.Triangle(1, 1, '#121212', 3, 3, 4, 4);
console.log(t.toString());

//var s = new shapeModule.Shape(5, 5, "#121212"); //Should throw error


