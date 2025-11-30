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
}

class Teacher extends Person {
  constructor(firstName, lastName, birthYear, subject, yearsOfExperience) {
    super(firstName, lastName, birthYear);
    this.subject = subject;
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

  greet() {
    console.log(
      `Hi, I am ITstudent ${this.firstName} and I know ${this.programmingLanguages.length} languages`
    );
  }
}

class School {
  constructor(name) {
    this.name = name;
    this.people = [];
  }

  addPerson(per) {
    this.people.push(per);
  }

  listStudents() {
    return this.people.filter((p) => p instanceof Student);
  }

  listTeachers() {
    return this.people.filter((p) => p instanceof Teacher);
  }

  findPerson(name) {
    return this.people.find((p) => p.firstName === name);
  }
}

function processPeople(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const currentPerson = arr[i];
    callback(currentPerson);
  }
}

function anounce(currentPerson) {
  console.log(
    `${currentPerson.firstName} is ${currentPerson.calcAge()} years old`
  );
}

function rewardPerson(currentPerson) {
  if (currentPerson.calcAge() > 18) {
    console.log("Recives a gift");
  }
}

// Persons

const person1 = new Person("Dario", "Milanovic", 1992);
const person2 = new Person("Ivan", "Pivic", 1985);

console.log(person1);
console.log(person2);
console.log(person1.calcAge());
person2.greet();
Person.describe();
person1.greet();
console.log(person2.calcAge());

// Students

const student1 = new Student("Marija", "Milanovic", 1997, 15488);
const student2 = new Student("Jasmin", "Isakovic", 1990, 12547);
const student3 = new Student("Ivica", "Jurcevic", 1978, 21478);
const student4 = new Student("Danijela", "Skelo", 2001, 32546);
const student5 = new ITStudent("Ivan", "Ivic", 2000, 123);
const students = [student1, student2, student3, student4];

// Teachers

const teacher1 = new Teacher("Matija", "Lukic", 1980, "History", 10);
const teacher2 = new Teacher("Petra", "Previsic", 1975, "Art", 7);
const teacher3 = new Teacher("Martina", "Boskovic", 1978, "Math", 15);

student1.greet();
student2.calcAge();
console.log(student1);
console.log(students.map((item) => `${item.firstName} ${item.lastName}`));
console.log(students.filter((item) => 2025 - item.birthYear > 18));
student5.learnLanguage("JavaScript");
student5.learnLanguage("Python");
console.log(student5.programmingLanguages);
students.push(student5);

processPeople(students, anounce);

processPeople(students, rewardPerson);

const school = new School("Gymnasium");

school.addPerson(student1);
school.addPerson(student2);
school.addPerson(student3);
school.addPerson(student4);
school.addPerson(student5);
school.addPerson(person1);
school.addPerson(person2);
school.addPerson(teacher1);
school.addPerson(teacher2);
school.addPerson(teacher3);
console.log(school);
console.log(school.listStudents());
console.log(school.listTeachers());
