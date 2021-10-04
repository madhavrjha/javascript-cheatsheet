// Console Input-Output

console.log('This is a Log Message');
console.error('This is an Error Message');
console.warn('This is a Warning Message');

// var, let, const
// var may be obsolate in future

// String, Number, Boolean, null, undefined, Symbol

const userName = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const previousJob = null;
let firstSalary,
    expectedHike = undefined;

console.log(typeof userName); // String
console.log(typeof age); // Number
console.log(typeof rating); // Number
console.log(typeof isCool); // Boolean
console.log(typeof previousJob); // Object: JavaScript Error | Null is not Object
console.log(typeof firstSalary); // Undefined
console.log(typeof expectedHike); // Undefined

// String Concatination
console.log('My Name is ' + userName + ' and I am ' + age + ' years old.');

// Template String
console.log(`My Name is ${userName} and I am ${age} years old.`);

// String Properties and Methods

const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());

const keywords = 'technology, computer, it, code, programming, scripting';

console.log(keywords.split(', '));

// Arrays - variable that holds multiple values

const numbers = new Array(9, 8, 2, 3, 6, 1, 0);

console.log(numbers);

const fruits = ['apples', 'oranges', 'peers'];
fruits[3] = 'grapes';

fruits.push('mangoes');
fruits.unshift('strawberries');

fruits.pop();
fruits.shift();

console.log(fruits);
console.log(Array.isArray(fruits));
console.log(Array.isArray(s));

console.log(fruits.indexOf('oranges'));

// Object Literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA',
    },
};

person.email = 'john@gmail.com';

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// Destructuring Object

const {
    firstName,
    lastName,
    address: { city },
} = person;

console.log(firstName, lastName, city);

// Array of Objects

const todos = [
    {
        id: 1,
        text: 'Take out Trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false,
    },
];

console.log(todos);
console.log(todos[0].text);
console.log(todos[1].text);
console.log(todos[2].text);

// Converting Object to JSON

console.log(JSON.stringify(todos));

// Loops

for (let i = 0; i < 11; i++) {
    console.log(`For Loop Number : ${i}`);
}

let i = 0;
while (i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

for (let index = 0; index < todos.length; index++) {
    console.log(`Task ${index + 1} is: `, todos[index].text);
}

for (let todo of todos) {
    console.log(todo.id, todo.text, todo.isCompleted);
}

// Filter, Map and forEach

todos.forEach(function (todo) {
    console.log(todo.text);
});

console.log(
    todos.map(function (todo) {
        return todo.text;
    })
);

const completedToDo = todos
    .filter(function (todo) {
        return todo.isCompleted === true;
    })
    .map(function (todo) {
        return todo.text;
    });

console.log(completedToDo);

// If Else

const x = 10;

if (x === 10) {
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is more than 10');
} else {
    console.log('x is less than 10');
}

// Conditional Operator

const y = 5;

if (x === 10 || y === 6) console.log('either x is 10 or y is 5');
if (x === 10 && y === 5) console.log('x is 10 and y is 5');

// Ternery Operator

const color = x > 10 ? 'red' : 'blue';

console.log(color);

// Switch Case

switch (color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is neither blue nor red');
        break;
}

// Function

function addNums(num1 = 0, num2 = 0) {
    return num1 + num2;
}

console.log(addNums(5, 8));

// Arrow Functions

const todoText = todos.map((todo) =>
    todo.isCompleted
        ? `${todo.text} has been done`
        : `${todo.text} has not been done`
);

console.log(todoText);

// Constructor Function

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;
//     };
// }

// Class

class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Prototype Function

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
};

// Instantiate Object

const person1 = new Person('John', 'Doe', '12-28-1988');
const person2 = new Person('Mary', 'Smith', '3-18-1987');

console.log(person1, person2);

console.log(person1.getFullName(), person2.getBirthYear());
