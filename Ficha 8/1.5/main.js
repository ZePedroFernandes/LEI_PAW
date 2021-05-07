"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var person1 = new Person_1.Admin("Ze", 19);
var person2 = new Person_1.TechSupport("Ze", 19);
var person3 = new Person_1.User("Ze", 19);
console.log(person1.role);
console.log(person2.role);
console.log(person3.role);
