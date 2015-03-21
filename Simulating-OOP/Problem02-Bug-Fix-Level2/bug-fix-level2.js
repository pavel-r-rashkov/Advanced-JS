var Person = (function() {
    function Person(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    Person.prototype.__defineGetter__("firstName", function(){
        return this._firstName;
    });

    Person.prototype.__defineSetter__("firstName", function(value){
        return this._firstName = value;
    });

    Person.prototype.__defineGetter__("lastName", function(){
        return this._lastName;
    });

    Person.prototype.__defineSetter__("lastName", function(value){
        return this._lastName = value;
    });

    Person.prototype.__defineGetter__("fullName", function(){
        return this._firstName + " " + this._lastName;
    });

    Person.prototype.__defineSetter__("fullName", function(value){
        var names = value.split(" ");
        this._firstName = names[0];
        this._lastName = names[1];
    });
    
    return Person;
})();

var person = new Person("Peter", "Jackson");
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);

person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);

person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);

