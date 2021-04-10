"use strict";

function Person(first, age) {
    this.firstName = first;
    this.age = age;
}

var person1 = new Person("Pedro", 12)
var person2 = new Person("Paulo", 15)

console.log(person1)
console.log(person2)

Person.prototype.nationality = "PT"

console.log(person1)
console.log(person2)
console.log(person1.nationality)
console.log(person2.nationality)

Person.prototype.evaluateAge = function () {
    if (this.age <= 12) {
        return "criança";
    } else if (this.age <= 21) {
        return "adolescente";
    } else {
        return "idoso";
    }
}

console.log(person1.evaluateAge())
console.log(person2.evaluateAge())