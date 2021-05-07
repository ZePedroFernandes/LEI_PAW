import { Admin, TechSupport, User } from './Person';
import { Student, Person } from './Student';

const person1 = new Admin("Ze", 19);
const person2 = new TechSupport("Ze", 19);
const person3 = new User("Ze", 19);

console.log(person1.role);
console.log(person2.role);
console.log(person3.role);

