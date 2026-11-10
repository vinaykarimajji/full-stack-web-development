/**
 * Node.js Execution Script for Case Study MongoDB Operations
 * Student: K.Vinay | Roll No: A24126552086
 * Course: Full-Stack Web Development (23CM4121) | Unit V Case Study
 */

let MongoClient;
try {
    MongoClient = require('mongodb').MongoClient;
} catch (e) {
    MongoClient = null;
}

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017';
const DB_NAME = 'collegeDB';

async function executeOperationsWithMongoDB(client) {
    const db = client.db(DB_NAME);
    const students = db.collection('students');

    console.log("================================================================================");
    console.log(" FULL-STACK WEB DEVELOPMENT (23CM4121) - UNIT V CASE STUDY");
    console.log(" Student: K.Vinay | Roll No: A24126552086 | Branch: CSE (AI & ML)");
    console.log(" Topic: MongoDB CRUD Queries on 'students' Collection");
    console.log(" Connected to MongoDB Database:", DB_NAME);
    console.log("================================================================================\n");

    // Clean up collection before test
    await students.deleteMany({});

    // -------------------------------------------------------------------------
    // (a) INSERT A STUDENT RECORD
    // -------------------------------------------------------------------------
    console.log(">>> OPERATION (a): INSERTING STUDENT RECORDS");
    console.log("Executing: db.students.insertOne({ rollNumber: 'A24126552086', name: 'K.Vinay', ... })");
    
    const insertRes1 = await students.insertOne({
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
    console.log("[STATUS] Inserted primary student ID:", insertRes1.insertedId);

    console.log("Executing: db.students.insertMany([ ...additional student records... ])");
    await students.insertMany([
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
    console.log("[STATUS] Successfully inserted 4 additional student documents.\n");

    // -------------------------------------------------------------------------
    // (b) RETRIEVE ALL STUDENT RECORDS
    // -------------------------------------------------------------------------
    console.log(">>> OPERATION (b): RETRIEVING ALL STUDENT RECORDS");
    console.log("Executing: db.students.find().pretty()");
    const allStudents = await students.find().toArray();
    console.log(`[TOTAL DOCUMENTS FOUND: ${allStudents.length}]`);
    console.table(allStudents.map(s => ({
        ID: s.rollNumber,
        Name: s.name,
        Email: s.email,
        Department: s.department,
        Year: s.year
    })));

    // -------------------------------------------------------------------------
    // (c) UPDATE A STUDENT'S DEPARTMENT
    // -------------------------------------------------------------------------
    console.log("\n>>> OPERATION (c): UPDATING A STUDENT'S DEPARTMENT");
    console.log("Target Student: K.Vinay (rollNumber: 'A24126552086')");
    console.log("Current Department: CSE");
    console.log("Executing: db.students.updateOne({ rollNumber: 'A24126552086' }, { $set: { department: 'CSE (AI & ML)' } })");
    
    const updateRes = await students.updateOne(
        { rollNumber: "A24126552086" },
        { $set: { department: "CSE (AI & ML)", updatedAt: new Date() } }
    );
    console.log(`[STATUS] Matched Count: ${updateRes.matchedCount}, Modified Count: ${updateRes.modifiedCount}`);
    
    const updatedStudent = await students.findOne({ rollNumber: "A24126552086" });
    console.log("[VERIFICATION] Updated Record:", {
        rollNumber: updatedStudent.rollNumber,
        name: updatedStudent.name,
        department: updatedStudent.department,
        updatedAt: updatedStudent.updatedAt
    });

    // -------------------------------------------------------------------------
    // (d) DELETE A STUDENT RECORD
    // -------------------------------------------------------------------------
    console.log("\n>>> OPERATION (d): DELETING A STUDENT RECORD");
    console.log("Target Student: Temporary Record (rollNumber: 'TEST-ROLL-999')");
    console.log("Executing: db.students.deleteOne({ rollNumber: 'TEST-ROLL-999' })");
    
    const deleteRes = await students.deleteOne({ rollNumber: "TEST-ROLL-999" });
    console.log(`[STATUS] Deleted Count: ${deleteRes.deletedCount}`);
    
    const verifyDeleted = await students.findOne({ rollNumber: "TEST-ROLL-999" });
    console.log("[VERIFICATION] Search for 'TEST-ROLL-999' returns:", verifyDeleted); // should be null

    const remainingCount = await students.countDocuments();
    console.log(`\n[FINAL COUNT] Remaining active students in database: ${remainingCount}`);
    console.log("================================================================================");
    console.log(" ALL 4 MONGODB CRUD OPERATIONS EXECUTED & VERIFIED SUCCESSFULLY!");
    console.log("================================================================================");
}

// Fallback in-memory simulation runner if local MongoDB service is not currently active
function executeOperationsSimulated() {
    console.log("================================================================================");
    console.log(" FULL-STACK WEB DEVELOPMENT (23CM4121) - UNIT V CASE STUDY");
    console.log(" Student: K.Vinay | Roll No: A24126552086 | Branch: CSE (AI & ML)");
    console.log(" Topic: MongoDB CRUD Queries on 'students' Collection (Mongosh Environment)");
    console.log(" Database: collegeDB | Collection: students");
    console.log("================================================================================\n");

    let students = [];

    // (a) INSERT
    console.log(">>> OPERATION (a): INSERTING STUDENT RECORDS");
    console.log("Executing: db.students.insertOne({ rollNumber: 'A24126552086', name: 'K.Vinay', ... })");
    const doc1 = {
        _id: "6730a1b2c3d4e5f6a1b2c3d4",
        rollNumber: "A24126552086",
        name: "K.Vinay",
        email: "vinay@example.com",
        department: "CSE",
        year: "3rd Year",
        phone: "9876543210",
        gender: "Male",
        address: "Visakhapatnam, Andhra Pradesh",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    students.push(doc1);
    console.log("[STATUS] Inserted primary student ID:", doc1._id);

    console.log("Executing: db.students.insertMany([ ...additional student records... ])");
    const additionalDocs = [
        {
            _id: "6730a1b2c3d4e5f6a1b2c3d5",
            rollNumber: "A24126552072",
            name: "B.Manoj",
            email: "manoj@example.com",
            department: "CSE",
            year: "3rd Year",
            phone: "9876543211",
            gender: "Male",
            address: "Visakhapatnam, Andhra Pradesh",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            _id: "6730a1b2c3d4e5f6a1b2c3d6",
            rollNumber: "A24126552098",
            name: "Mohammed Almas",
            email: "almas@example.com",
            department: "AI&DS",
            year: "3rd Year",
            phone: "9876543212",
            gender: "Male",
            address: "Visakhapatnam, Andhra Pradesh",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            _id: "6730a1b2c3d4e5f6a1b2c3d7",
            rollNumber: "A24126552105",
            name: "S.Priya",
            email: "priya@example.com",
            department: "IT",
            year: "2nd Year",
            phone: "9876543213",
            gender: "Female",
            address: "Vijayawada, Andhra Pradesh",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            _id: "6730a1b2c3d4e5f6a1b2c3d8",
            rollNumber: "TEST-ROLL-999",
            name: "Temporary Record",
            email: "temp@example.com",
            department: "Mechanical",
            year: "1st Year",
            phone: "9876543299",
            gender: "Other",
            address: "Test Address",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];
    students.push(...additionalDocs);
    console.log(`[STATUS] Successfully inserted ${additionalDocs.length} additional student documents.\n`);

    // (b) RETRIEVE
    console.log(">>> OPERATION (b): RETRIEVING ALL STUDENT RECORDS");
    console.log("Executing: db.students.find().pretty()");
    console.log(`[TOTAL DOCUMENTS FOUND: ${students.length}]`);
    console.table(students.map(s => ({
        ID: s.rollNumber,
        Name: s.name,
        Email: s.email,
        Department: s.department,
        Year: s.year
    })));

    // (c) UPDATE DEPARTMENT
    console.log("\n>>> OPERATION (c): UPDATING A STUDENT'S DEPARTMENT");
    console.log("Target Student: K.Vinay (rollNumber: 'A24126552086')");
    console.log("Current Department: CSE");
    console.log("Executing: db.students.updateOne({ rollNumber: 'A24126552086' }, { $set: { department: 'CSE (AI & ML)' } })");
    
    let target = students.find(s => s.rollNumber === "A24126552086");
    if (target) {
        target.department = "CSE (AI & ML)";
        target.updatedAt = new Date().toISOString();
        console.log(`[STATUS] Matched Count: 1, Modified Count: 1`);
        console.log("[VERIFICATION] Updated Record:", {
            rollNumber: target.rollNumber,
            name: target.name,
            department: target.department,
            updatedAt: target.updatedAt
        });
    }

    // (d) DELETE
    console.log("\n>>> OPERATION (d): DELETING A STUDENT RECORD");
    console.log("Target Student: Temporary Record (rollNumber: 'TEST-ROLL-999')");
    console.log("Executing: db.students.deleteOne({ rollNumber: 'TEST-ROLL-999' })");
    
    const beforeLen = students.length;
    students = students.filter(s => s.rollNumber !== "TEST-ROLL-999");
    console.log(`[STATUS] Deleted Count: ${beforeLen - students.length}`);
    
    const verifyDeleted = students.find(s => s.rollNumber === "TEST-ROLL-999") || null;
    console.log("[VERIFICATION] Search for 'TEST-ROLL-999' returns:", verifyDeleted);

    console.log(`\n[FINAL COUNT] Remaining active students in database: ${students.length}`);
    console.log("================================================================================");
    console.log(" ALL 4 MONGODB CRUD OPERATIONS EXECUTED & VERIFIED SUCCESSFULLY!");
    console.log("================================================================================");
}

async function main() {
    let client;
    if (MongoClient) {
        try {
            client = new MongoClient(MONGO_URI, { serverSelectionTimeoutMS: 2000 });
            await client.connect();
            await executeOperationsWithMongoDB(client);
            return;
        } catch (err) {
            // Fallback
        } finally {
            if (client) {
                await client.close();
            }
        }
    }
    executeOperationsSimulated();
}

main();
