// ==============================================================================
// Course: Full-Stack Web Development (23CM4121) - Unit V Case Study
// Student: K.Vinay | Roll No: A24126552086
// Topic: Write MongoDB queries to perform operations on a students collection:
//        (a) Insert a student record
//        (b) Retrieve all student records
//        (c) Update a student's department
//        (d) Delete a student record
// Database: collegeDB | Collection: students
// ==============================================================================

// 1. Switch to / Create the database
use collegeDB;

// ==============================================================================
// (a) INSERT A STUDENT RECORD
// ==============================================================================

// Insert a single primary student record (K.Vinay)
db.students.insertOne({
    rollNumber: "A24126552086",
    name: "K.Vinay",
    email: "vinay@example.com",
    department: "CSE",
    year: "3rd Year",
    phone: "9876543210",
    gender: "Male",
    address: "Visakhapatnam, Andhra Pradesh",
    createdAt: new Date(),
    updatedAt: new Date()
});

// Insert additional student records to demonstrate multi-document storage
db.students.insertMany([
    {
        rollNumber: "A24126552072",
        name: "B.Manoj",
        email: "manoj@example.com",
        department: "CSE",
        year: "3rd Year",
        phone: "9876543211",
        gender: "Male",
        address: "Visakhapatnam, Andhra Pradesh",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        rollNumber: "A24126552098",
        name: "Mohammed Almas",
        email: "almas@example.com",
        department: "AI&DS",
        year: "3rd Year",
        phone: "9876543212",
        gender: "Male",
        address: "Visakhapatnam, Andhra Pradesh",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        rollNumber: "A24126552105",
        name: "S.Priya",
        email: "priya@example.com",
        department: "IT",
        year: "2nd Year",
        phone: "9876543213",
        gender: "Female",
        address: "Vijayawada, Andhra Pradesh",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        rollNumber: "TEST-ROLL-999",
        name: "Temporary Record",
        email: "temp@example.com",
        department: "Mechanical",
        year: "1st Year",
        phone: "9876543299",
        gender: "Other",
        address: "Test Address",
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

// ==============================================================================
// (b) RETRIEVE ALL STUDENT RECORDS
// ==============================================================================

// Retrieve all students stored in the collection
db.students.find().pretty();

// Retrieve a specific student using rollNumber
db.students.findOne({ rollNumber: "A24126552086" });

// Retrieve students filtered by department
db.students.find({ department: "CSE" }).pretty();

// Total count of student documents
db.students.countDocuments();

// ==============================================================================
// (c) UPDATE A STUDENT'S DEPARTMENT
// ==============================================================================

// Update student K.Vinay's department from 'CSE' to 'CSE (AI & ML)'
db.students.updateOne(
    { rollNumber: "A24126552086" },
    {
        $set: {
            department: "CSE (AI & ML)",
            updatedAt: new Date()
        }
    }
);

// Verify the update by retrieving the modified student record
db.students.findOne({ rollNumber: "A24126552086" });

// ==============================================================================
// (d) DELETE A STUDENT RECORD
// ==============================================================================

// Delete the temporary student record using rollNumber
db.students.deleteOne({ rollNumber: "TEST-ROLL-999" });

// Verify that the record was deleted successfully (should return null)
db.students.findOne({ rollNumber: "TEST-ROLL-999" });

// ==============================================================================
// ADDITIONAL EXTENSION: INDEXING & PERFORMANCE
// ==============================================================================

// Create unique index on rollNumber to prevent duplicates and speed up lookup
db.students.createIndex({ rollNumber: 1 }, { unique: true });

// Check index performance (Execution Stats: IXSCAN stage)
db.students.find({ rollNumber: "A24126552086" }).explain("executionStats");
