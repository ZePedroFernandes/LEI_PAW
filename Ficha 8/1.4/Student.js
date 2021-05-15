var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, age) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.age = age;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.isAdult = function () {
        return this.age >= 18;
    };
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + ' you are ' + (person.isAdult() ? 'an Adult' : 'underage');
}
var user = new Student("Jane", "M.", "User", 18);
console.log(greeter(user));
