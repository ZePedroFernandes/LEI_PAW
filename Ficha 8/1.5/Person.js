"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.User = exports.TechSupport = exports.Admin = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    Person.prototype.sayMyRole = function () {
        console.log("Role: " + this.role);
    };
    return Person;
}());
exports.Person = Person;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age) {
        return _super.call(this, name, age, 'Admin') || this;
    }
    return Admin;
}(Person));
exports.Admin = Admin;
var TechSupport = /** @class */ (function (_super) {
    __extends(TechSupport, _super);
    function TechSupport(name, age) {
        return _super.call(this, name, age, 'TechSupport') || this;
    }
    return TechSupport;
}(Person));
exports.TechSupport = TechSupport;
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(name, age) {
        return _super.call(this, name, age, 'User') || this;
    }
    return User;
}(Person));
exports.User = User;
