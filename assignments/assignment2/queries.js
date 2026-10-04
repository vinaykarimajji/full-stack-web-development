// MongoDB Shell Script: queries.js
// Database: collegeDB | Collection: students
// Assignment 2: Student Database Management System

// 1. Switch to collegeDB database
usecollegeDB;

// 2. Insert initial student records
db.students.insertMany([
  { rollNo: "23CM001", name: "Ravi Kumar", branch: "CSE-AIML", year: 3, marks: 85, email: "ravi@example.com" },
  { rollNo: "23CM002", name: "Priya Sharma", branch: "CSE", year: 3, marks: 92, email: "priya@example.com" },
  { rollNo: "23CM003", name: "Ananya Verma", branch: "IT", year: 2, marks: 78, email: "ananya@example.com" },
  { rollNo: "23CM004", name: "Kiran Patel", branch: "ECE", year: 4, marks: 45, email: "kiran@example.com" },
  { rollNo: "23CM005", name: "Suresh Reddy", branch: "CSE-AIML", year: 3, marks: 68, email: "suresh@example.com" },
  { rollNo: "23CM006", name: "Sneha Nair", branch: "CSE", year: 2, marks: 88, email: "sneha@example.com" },
  { rollNo: "23CM007", name: "Ramesh Rao", branch: "CSE", year: 3, marks: 95, email: "ramesh@example.com" },
  { rollNo: "23CM008", name: "Vikram Das", branch: "IT", year: 1, marks: 48, email: "vikram@example.com" }
]);

// 3. Display all students
print("\n--- 1. All Students ---");
db.students.find().pretty();

// 4. Display students belonging to a particular branch
print("\n--- 2. Students in CSE-AIML Branch ---");
db.students.find({ branch: "CSE-AIML" }).pretty();

// 5. Display students who scored more than 75 marks
print("\n--- 3. Students Scoring More than 75 Marks ---");
db.students.find({ marks: { $gt: 75 } }).pretty();

// 6. Search for a student using rollNo
print("\n--- 4. Search Student by rollNo (23CM001) ---");
db.students.findOne({ rollNo: "23CM001" });

// 7. Search students based on condition (year = 3 AND marks >= 80)
print("\n--- 5. Year 3 Students with Marks >= 80 ---");
db.students.find({ year: 3, marks: { $gte: 80 } }).pretty();

// 8. Update marks of a particular student
print("\n--- 6. Update Marks for rollNo 23CM001 to 92 ---");
db.students.updateOne(
  { rollNo: "23CM001" },
  { $set: { marks: 92 } }
);

// 9. Update another field (email)
print("\n--- 7. Update Email for rollNo 23CM003 ---");
db.students.updateOne(
  { rollNo: "23CM003" },
  { $set: { email: "ananya.official@example.com" } }
);

// 10. Delete a student record using rollNo
print("\n--- 8. Delete Student Record (23CM005) ---");
db.students.deleteOne({ rollNo: "23CM005" });

// 11. Display students in descending order of marks
print("\n--- 9. Students in Descending Order of Marks ---");
db.students.find().sort({ marks: -1 }).pretty();

// 12. Create a unique index on rollNo
print("\n--- 10. Create Unique Index on rollNo ---");
db.students.createIndex({ rollNo: 1 }, { unique: true });

// 13. Demonstrate Index Performance (Execution Statistics)
print("\n--- 11. Index Performance (IXSCAN vs COLLSCAN) ---");
db.students.find({ rollNo: "23CM007" }).explain("executionStats");

// 14. Real-Time Extension Queries ⭐
print("\n--- Real-Time Extension Queries ---");

// Extension A: Students scoring above 80
print("\n[Extension A] Students Scoring Above 80:");
db.students.find({ marks: { $gt: 80 } }).pretty();

// Extension B: Students scoring below 50
print("\n[Extension B] Students Scoring Below 50:");
db.students.find({ marks: { $lt: 50 } }).pretty();

// Extension C: Highest-scoring student (Topper)
print("\n[Extension C] Highest-Scoring Student:");
db.students.find().sort({ marks: -1 }).limit(1).pretty();

// Extension D: Students belonging to IT branch
print("\n[Extension D] Students in IT Branch:");
db.students.find({ branch: "IT" }).pretty();

// Extension E: Students sorted ascending by marks
print("\n[Extension E] Students Sorted by Marks (Ascending):");
db.students.find().sort({ marks: 1 }).pretty();