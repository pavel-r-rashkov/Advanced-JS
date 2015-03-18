var domModule = (function() {

    function appendChild(parent, child) {
        var elements = getElements(document, parent);
        var elementsCount = elements.length;
        for(var i = 0; i < elementsCount; i++) {    
            elements[i].appendChild(child.cloneNode(true));
        }
    }

    function removeChild(parent, child) {
        var elements = getElements(document, parent);
        var elementsCount = elements.length;

        for(var i = 0; i < elementsCount; i++) {
            var childElements = getElements(elements[i], child);
            var childElementsCount = childElements.length;

            for(var j = 0; j < childElementsCount; j++) {
                childElements[j].remove();
            }
        }
    }

    function addHandler(parent, eventType, eventHandler) {
        var elements = getElements(document, parent);
        var elementsCount = elements.length;

        for(var i = 0; i < elementsCount; i++) {    
            elements[i].addEventListener(eventType, eventHandler);
        }
    }

    function retrieveElements(selector) {
        return document.querySelectorAll(selector);
    }

    function getElements(parent, element) {
        if(typeof element === "string") {
            return parent.querySelectorAll(element);
        } else if (isDescendant(parent, element)) {
            return [element];
        }
        return [];
    }

    function isDescendant(parent, child) {
        var node = child.parentNode;
        while (node != null) {
            if (node == parent) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    }
})();

// В условието на задачата не е споменато дали child елементите са само директни деца или не,
// в това решение съм приел по-комплексния вариант, че child елементите са директните и индиректните деца на parent елемента.

var liElement = document.createElement("li");
//domModule.appendChild("ul", liElement); 

//domModule.removeChild("ul.birds-list","li:first-child"); 

//domModule.addHandler("li.bird", 'click', function(){ alert("I'm a bird!") });

//console.log(domModule.retrieveElements("li.bird"));