# MongoDB CRUD Operations on Students Collection

**Course:** Full-Stack Web Development (23CM4121)  
**Unit:** Unit V – MongoDB and Deploying Applications  
**Student Name:** K.Vinay  
**Roll No:** A24126552086  
**Branch:** CSE (AI & ML), 3rd Year  
**Institution:** Anil Neerukonda Institute of Technology & Sciences (ANITS)  

---

## Objective & Topic

Write MongoDB queries to perform the following operations on a `students` collection:
- **(a) Insert a student record**
- **(b) Retrieve all student records**
- **(c) Update a student's department**
- **(d) Delete a student record**

---

## Database & Collection Schema

- **Database:** `collegeDB`
- **Collection:** `students`

### Document Structure

```json
{
  "_id": "ObjectId('6730a1b2c3d4e5f6a1b2c3d4')",
  "rollNumber": "A24126552086",
  "name": "K.Vinay",
  "email": "vinay@example.com",
  "department": "CSE (AI & ML)",
  "year": "3rd Year",
  "phone": "9876543210",
  "gender": "Male",
  "address": "Visakhapatnam, Andhra Pradesh",
  "createdAt": "2026-11-10T14:19:12.854Z",
  "updatedAt": "2026-11-10T14:19:12.854Z"
}
```

---

## MongoDB Shell (`mongosh`) Queries

### (a) Insert a Student Record

```javascript
// 1. Switch to database
use collegeDB;

// 2. Insert primary student record
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

// 3. Batch insert additional student records
db.students.insertMany([
    {
        rollNumber: "A24126552072",
        name: "B.Manoj",
        email: "manoj@example.com",
        department: "CSE",
        year: "3rd Year"
    },
    {
        rollNumber: "A24126552098",
        name: "Mohammed Almas",
        email: "almas@example.com",
        department: "AI&DS",
        year: "3rd Year"
    },
    {
        rollNumber: "A24126552105",
        name: "S.Priya",
        email: "priya@example.com",
        department: "IT",
        year: "2nd Year"
    },
    {
        rollNumber: "TEST-ROLL-999",
        name: "Temporary Record",
        email: "temp@example.com",
        department: "Mechanical",
        year: "1st Year"
    }
]);
```

### (b) Retrieve All Student Records

```javascript
// Retrieve and format all stored students
db.students.find().pretty();

// Retrieve student by roll number
db.students.findOne({ rollNumber: "A24126552086" });

// Retrieve students belonging to CSE department
db.students.find({ department: "CSE" }).pretty();
```

### (c) Update a Student's Department

```javascript
// Update department for student K.Vinay from 'CSE' to 'CSE (AI & ML)'
db.students.updateOne(
    { rollNumber: "A24126552086" },
    {
        $set: {
            department: "CSE (AI & ML)",
            updatedAt: new Date()
        }
    }
);

// Verify the updated document
db.students.findOne({ rollNumber: "A24126552086" });
```

### (d) Delete a Student Record

```javascript
// Delete temporary student record
db.students.deleteOne({ rollNumber: "TEST-ROLL-999" });

// Verify deletion (returns null)
db.students.findOne({ rollNumber: "TEST-ROLL-999" });
```

---

## How to Execute

You can run the queries directly in your terminal using Node.js:

```bash
node run_mongo_queries.js
```

Or execute directly inside MongoDB Shell:

```bash
mongosh < queries.js
```
