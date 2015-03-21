Array.prototype.flatten = function flatten() {
    var outputArray = [];
    appendChilds(this);
    return outputArray;

    function appendChilds(array) {
        var count = array.length;

        for(var i = 0; i < count; i += 1) {
            if(array[i] instanceof Array) {
                appendChilds(array[i]);
            } else {
                outputArray.push(array[i]);
            }
        }
    }
}

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
