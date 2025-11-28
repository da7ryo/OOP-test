class Person {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  calcAge() {
    return 2025 - this.birthYear;
  }

  greet() {
    console.log(`Hello, my name is ${this.firstName}`);
  }

  static describe() {
    console.log("This is a class for creating persons");
  }
}

class Student extends Person {
  constructor(firstName, lastName, birthYear, indexNumber) {
    super(firstName, lastName, birthYear);
    this.indexNumber = indexNumber;
  }

  greet() {
    console.log(`Hi, I am Student ${this.firstName}`);
  }

  logIndex() {
    console.log(this.indexNumber);
  }

  calcAge() {
    console.log(
      `Student ${this.firstName} has a ${2025 - this.birthYear} years`
    );
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, birthYear, subject, yearsOfExperience) {
    super(firstName, lastName, birthYear);
    this.yearsOfExperience = yearsOfExperience;
  }
  teach() {
    console.log(`${this.firstName} teaches ${this.subject}`);
  }
}

class ITStudent extends Student {
  constructor(firstName, lastName, birthYear, indexNumber) {
    super(firstName, lastName, birthYear, indexNumber);
    this.programmingLanguages = [];
  }

  learnLanguage(lang) {
    this.programmingLanguages.push(lang);
  }
}

const person1 = new Person("Dario", "Milanovic", 1992);
const person2 = new Person("Ivan", "Pivic", 1985);

const student1 = new Student("Marija", "Milanovic", 1997, 15488);
const student2 = new Student("Jasmin", "Isakovic", 1990, 12547);
const student3 = new Student("Ivica", "Jurcevic", 1978, 21478);
const student4 = new Student("Danijela", "Skelo", 2001, 32546);
const student5 = new ITStudent("Ivan", "Ivic", 2000, 123);

const students = [student1, student2, student3, student4];

console.log(person1);
console.log(person2);
console.log(person1.calcAge());
person2.greet();
Person.describe();
student1.greet();
person1.greet();
student2.calcAge();
console.log(person2.calcAge());
console.log(student1);

console.log(students.map((item) => `${item.firstName} ${item.lastName}`));
console.log(students.filter((item) => 2025 - item.birthYear > 18));

student5.learnLanguage("JavaScript");
student5.learnLanguage("Python");
console.log(student5.programmingLanguages);
