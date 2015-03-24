var shapeModule = shapeModule || {};

var circle =  Object.create(shapeModule.circle).init(1, 1, '#121212', 5);
console.log(circle.toString());

var rec = Object.create(shapeModule.rectangle).init(1, 1, '#121212', 5, 10);
console.log(rec.toString());

var p = Object.create(shapeModule.point).init(1, 1, '#123212');
console.log(p.toString());

var s = Object.create(shapeModule.segment).init(1, 1, '#121212', 2, 2);
console.log(s.toString());

var t = Object.create(shapeModule.triangle).init(1, 1, '#121212', 2, 2, 3, 3);
console.log(t.toString());



