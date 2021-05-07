export class Student {
    fullName: string;

    constructor(public firstName: string,public middleInitial: string,public lastName: string,public age: number) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    isAdult(): boolean {
        return this.age >= 18;
    }
}

export interface Person {
    firstName: string;
    lastName: string;
    isAdult: () => boolean;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName + ' you are ' + (person.isAdult() ? 'an Adult' : 'underage');
}

let user = new Student("Jane", "M.", "User", 18);
console.log(greeter(user));
