// Q5: JavaScript Functions vs Classes

// --- 1. FUNCTION EXAMPLE ---
// Functions are reusable blocks of code designed to perform a specific action.
function calculateArea(length, width) {
  return length * width;
}
console.log('Function Output (Area):', calculateArea(5, 10));


// --- 2. CLASS EXAMPLE ---
// A Class is a blueprint (template) for creating multiple objects with shared properties and methods.
class Student {
  // Constructor initializes properties for each object
  constructor(name, rollNo, branch) {
    this.name = name;
    this.rollNo = rollNo;
    this.branch = branch;
  }

  // Common method shared across all instances
  getDetails() {
    return `Student: ${this.name} | Roll No: ${this.rollNo} | Branch: ${this.branch}`;
  }
}

// Creating multiple objects (instances) from the same class blueprint
const student1 = new Student("Alice", 101, "CSE");
const student2 = new Student("Bob", 102, "ECE");
const student3 = new Student("Charlie", 103, "IT");

console.log('\nClass Objects:');
console.log(student1.getDetails());
console.log(student2.getDetails());
console.log(student3.getDetails());