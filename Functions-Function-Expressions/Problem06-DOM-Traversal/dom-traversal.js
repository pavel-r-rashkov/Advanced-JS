function traverse(selector) {
    var element = document.querySelector(selector);
    printChildren(element, 1);

    function printChildren(element, indent) {
        var children  = element.children;

        for(var i = 0; i < children.length ; i++) {
            printElement(children[i]);
            printChildren(children[i], indent + 1);
        }

        function printElement(e) {
            var result = e.tagName.toLowerCase() + ': ';
            result = e.getAttribute('id') === null ? result : result += ('id="' + e.getAttribute('id') + '" ');
            result = e.getAttribute('class') === null ? result : result += ('class="' + e.getAttribute('class') + '"');
            console.log(Array(indent).join('\t') + result);
        }
    }
}

traverse(".birds");
