const { MongoClient } = require('mongodb');

// Connection URL and Database
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'collegeDB';

async function main() {
  try {
    await client.connect();
    console.log('Connected to MongoDB successfully.');

    const db = client.db(dbName);
    const students = db.collection('students');

    // 1. Insert at least 5 to 8 student records
    const studentData = [
      { rollNo: "23CM001", name: "Ravi Kumar", branch: "CSE-AIML", year: 3, marks: 85, email: "ravi@example.com" },
      { rollNo: "23CM002", name: "Priya Sharma", branch: "CSE", year: 3, marks: 92, email: "priya@example.com" },
      { rollNo: "23CM003", name: "Ananya Verma", branch: "IT", year: 2, marks: 78, email: "ananya@example.com" },
      { rollNo: "23CM004", name: "Kiran Patel", branch: "ECE", year: 4, marks: 45, email: "kiran@example.com" },
      { rollNo: "23CM005", name: "Suresh Reddy", branch: "CSE-AIML", year: 3, marks: 68, email: "suresh@example.com" },
      { rollNo: "23CM006", name: "Sneha Nair", branch: "CSE", year: 2, marks: 88, email: "sneha@example.com" },
      { rollNo: "23CM007", name: "Ramesh Rao", branch: "CSE", year: 3, marks: 95, email: "ramesh@example.com" }
    ];

    await students.insertMany(studentData);
    console.log('Students inserted successfully.');

    // 2. Display all students
    console.log('\n--- All Students ---');
    console.log(await students.find().toArray());

    // 3. Display students belonging to CSE-AIML
    console.log('\n--- CSE-AIML Branch Students ---');
    console.log(await students.find({ branch: "CSE-AIML" }).toArray());

    // 4. Display students who scored more than 75 marks
    console.log('\n--- Students with Marks > 75 ---');
    console.log(await students.find({ marks: { $gt: 75 } }).toArray());

    // 5. Search for a student using rollNo
    console.log('\n--- Search Student by rollNo (23CM001) ---');
    console.log(await students.findOne({ rollNo: "23CM001" }));

    // 6. Search students based on condition: year = 3 and marks >= 80
    console.log('\n--- Year 3 Students with Marks >= 80 ---');
    console.log(await students.find({ year: 3, marks: { $gte: 80 } }).toArray());

    // 7. Update marks of a particular student
    await students.updateOne({ rollNo: "23CM001" }, { $set: { marks: 92 } });
    console.log('\nUpdated marks for 23CM001 to 92');

    // 8. Update another field (email)
    await students.updateOne({ rollNo: "23CM003" }, { $set: { email: "ananya.official@example.com" } });
    console.log('Updated email for 23CM003');

    // 9. Delete a student record using rollNo
    await students.deleteOne({ rollNo: "23CM005" });
    console.log('\nDeleted student record for 23CM005');

    // 10. Display students in descending order of marks
    console.log('\n--- Students Sorted by Marks (Descending) ---');
    console.log(await students.find().sort({ marks: -1 }).toArray());

    // 11. Create an index on rollNo
    await students.createIndex({ rollNo: 1 }, { unique: true });
    console.log('\nCreated unique index on rollNo');

    // 12. Demonstrate index performance (explain executionStats)
    const stats = await students.find({ rollNo: "23CM007" }).explain("executionStats");
    console.log('\nIndex Search Stage:', stats.queryPlanner.winningPlan.stage);

    // 13. Real-Time Extension Queries
    console.log('\n--- Real-Time Extension Queries ---');
    console.log('Marks > 80:', await students.find({ marks: { $gt: 80 } }).toArray());
    console.log('Marks < 50:', await students.find({ marks: { $lt: 50 } }).toArray());
    console.log('Highest Scorer:', await students.find().sort({ marks: -1 }).limit(1).toArray());
    console.log('IT Branch:', await students.find({ branch: "IT" }).toArray());
    console.log('Sorted Ascending:', await students.find().sort({ marks: 1 }).toArray());

  } catch (err) {
    console.error('Database Error:', err.message);
  } finally {
    await client.close();
    console.log('\nConnection closed.');
  }
}

main();