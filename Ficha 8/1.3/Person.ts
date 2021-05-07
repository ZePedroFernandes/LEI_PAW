export class Person {
    name: String;
    age: Number;
    role: 'Admin' | 'TechSupport' | 'User';

    constructor(name: String, age: Number, role: 'Admin' | 'TechSupport' | 'User') {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    sayMyRole(): void {
        console.log(`Role: ${this.role}`);

    }
}

export class Admin extends Person {
    constructor(name: String, age: Number) {
        super(name, age, 'Admin');
    }
}

export class TechSupport extends Person {
    constructor(name: String, age: Number) {
        super(name, age, 'TechSupport');
    }
}

export class User extends Person {
    constructor(name: String, age: Number) {
        super(name, age, 'User');
    }
}