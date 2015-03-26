var todoListModule = (function(){

    var Item = (function() {

        function Item(content, completed) {
            this.setContent(content);
            this.setCompleted(completed);
        }

        Item.prototype.getContent = function() {
            return this._content;
        };

        Item.prototype.setContent = function(value) {
            if(!value) {
                throw new Error('Content can\'t be blank');
            }
            this._content = value;
        };

        Item.prototype.getCompleted = function() {
            return this._completed;
        };

        Item.prototype.setCompleted = function(value) {
            if( typeof value !== 'boolean' ) {
                throw new Error('Completed value should true or false');
            }
            this._completed = value;
        };

        Item.prototype.addToDOM = function(parentElement) {

            var item = document.createElement('div');
            item.setAttribute('class', 'item');

            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('class', 'itemCheckbox');

            var itemLabel = document.createElement('label');
            itemLabel.setAttribute('class', 'itemLabel');
            itemLabel.innerHTML = this.getContent();

            checkbox.onchange = function() {
                if(checkbox.checked) {
                    itemLabel.style.background = '#90EE90';
                } else {
                    itemLabel.style.background = 'white';
                }
            };

            item.appendChild(checkbox);
            item.appendChild(itemLabel);

            parentElement.appendChild(item);
        };

        return Item;
    }());

    var Section = (function() {

        function Section(title) {
            this.setTitle(title);
            this._items = []; 
        }

        Section.prototype.getTitle = function() {
            return this._title;
        };

        Section.prototype.setTitle = function(value) {
            if(!value) {
                throw new Error('Title can\'t be blank');
            }
            this._title = value;
        };

        Section.prototype.getItems = function() {
            return this._items;
        };

        Section.prototype.addItem = function(item) {
            if( item.constructor != Item) {
                throw new Error('Can\'t add non-item elements');
            }
            this._items.push(item);
        };

        Section.prototype.addToDOM = function(parentElement) {
            var s = this;
            
            var section = document.createElement('div');
            section.setAttribute('class', 'section');

            var headline = document.createElement('h3');
            headline.appendChild(document.createTextNode(this.getTitle()));
            section.appendChild(headline);

            var items = this.getItems();
            for(var itemIndex in items) {
                items[itemIndex].addToDOM(section);
            }

            var itemTitle = document.createElement('input');
            itemTitle.setAttribute('type', 'text');
            itemTitle.setAttribute('placeholder', 'Item...');
            itemTitle.setAttribute('class', 'itemTitleInput');

            var newItemButton = document.createElement('input');
            newItemButton.setAttribute('type', 'button');
            newItemButton.setAttribute('class', 'newItem');
            newItemButton.setAttribute('value', '+');

            newItemButton.onclick = function() {
                var newItem = new Item(itemTitle.value, false);
                s.addItem(newItem);
                newItem.addToDOM(section);
            };

            parentElement.appendChild(section);
            parentElement.appendChild(newItemButton);
            parentElement.appendChild(itemTitle);
        };

        return Section;
    }());

    var Container = (function() {

        function Container(title) {
            this._sections = [];
            this.setTitle(title);
        }

        Container.prototype.getTitle = function() {
            return this._title;
        };

        Container.prototype.setTitle = function(value) {
            if(!value) {
                throw new Error('Title can\'t be blank');
            }
            this._title = value;
        };

        Container.prototype.getSections = function() {
            return this._sections;
        };

        Container.prototype.addSection = function(section) {
            if( section.constructor != Section) {
                throw new Error('Can\'t add non-section elements');
            }
            this._sections.push(section);
        };

        Container.prototype.addToDOM = function(parentElement) {

            var list = document.createElement('section');
            list.setAttribute('id', 'list');

            var html1 = '<h2>' + this.getTitle() +'</h2>';
            list.insertAdjacentHTML("afterbegin", html1);

            var c = this;

            var container = document.createElement('div');
            container.setAttribute('id', 'container');

            var sections = this.getSections();
            for(var sectionIndex in sections) {
                sections[sectionIndex].addToDOM(container);
            }

            var sectionTitle = document.createElement('input');
            sectionTitle.setAttribute('type', 'text');
            sectionTitle.setAttribute('placeholder', 'Title...');
            sectionTitle.setAttribute('id', 'sectionTitleInput');

            var newSectionButton = document.createElement('input');
            newSectionButton.setAttribute('type', 'button');
            newSectionButton.setAttribute('id', 'newSection');
            newSectionButton.setAttribute('value', 'New Section');

            newSectionButton.onclick = function() {
                var newSect = new Section(sectionTitle.value);
                c.addSection(newSect);
                newSect.addToDOM(container);
            };

            list.appendChild(container);
            list.appendChild(sectionTitle);
            list.appendChild(newSectionButton);

            parentElement.appendChild(list);

        };

        return Container;
    }());

    function createList(title, parentElementId) {
        var list = new Container(title);
        var parentElement = document.getElementById(parentElementId);
        list.addToDOM(parentElement);
    }

    return {
        createList : createList
    }

}());

todoListModule.createList('My list', 'listHolder');


