# Unit V – Full-Stack Web Development Case Study

**Institution:** Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam  
**Department:** Computer Science & Engineering (AI & ML)  
**Course Title:** Full-Stack Web Development  
**Course Code:** 23CM4121  
**Unit:** Unit V – MongoDB, Database Operations and Cloud Deployment  
**Student Name:** K.Vinay  
**Roll Number:** A24126552086  
**Academic Year / Semester:** 3rd Year – 1st Semester (2026–27)  
**Faculty / Guide:** P. Santosh Kumar  
**Project Name:** **EDUNEXUS – Institutional Student Management System**  

---

## Assigned Problem Statement

> **"Write MongoDB queries to perform the following operations on a students collection:  
> (a) Insert a student record  
> (b) Retrieve all student records  
> (c) Update a student's department  
> (d) Delete a student record  
> + MongoDB Aggregation Pipeline Operations"**

---

## Repository Structure

```text
case_study/
├── A24126552086_FSWD_CASESTUDY_DOCUMENTATION.pdf   # 23-Page Comprehensive Case Study Documentation (Navy/Teal Theme)
├── README.md                                       # Top-level case study overview and guide
├── mongoDB_queries/                                # Pure MongoDB Shell scripts & CLI runner
│   ├── queries.js                                  # MongoDB shell (mongosh) queries (a, b, c, d + aggregations)
│   ├── run_mongo_queries.js                        # Node.js automated runner & formatted CLI output
│   └── README.md                                   # MongoDB operations guide & documentation
├── output_screenshots/                             # High-resolution execution evidence (EduNexus Obsidian/Electric Blue)
│   ├── 01_dashboard.png                            # Institutional overview dashboard (Total: 5, Depts: 4)
│   ├── 02_dashboard_2.png                          # Student directory table with search & department filters
│   ├── 03_add_new_student.png                      # Operation (a): Add student modal (K.Vinay, A24126552086)
│   ├── 04_view_student.png                         # Student profile view & credentials card
│   ├── 05_edit_student.png                         # Operation (c): Update department to 'CSE (AI & ML)'
│   ├── 06_delete_student.png                       # Operation (d): Delete confirmation dialog
│   ├── 07_mongodb_queries_terminal.png             # CLI execution of queries (a, b, c, d + aggregations)
│   ├── 08_mongodb_atlas.png                        # MongoDB Atlas Data Explorer showing collegeDB.students
│   └── 09_cloud_deployment.png                    # Multi-cloud deployment status (Vercel & Render)
└── Student-Management-System/                      # Full MERN Stack Web Application (EduNexus)
    ├── backend/                                    # Express.js REST API + Mongoose ODM
    │   ├── models/Student.js                       # Mongoose Schema & validation
    │   ├── routes/studentRoutes.js                 # CRUD API endpoints (/api/students)
    │   ├── server.js                               # Express app initialization & MongoDB Atlas connection
    │   ├── package.json                            # Backend dependencies & start scripts
    │   └── .env.example                            # Configuration template
    ├── frontend/                                   # React 18 + Vite client application
    │   ├── src/                                    # React components, services, and styles
    │   │   ├── components/StudentProfile.jsx       # Student profile view component
    │   │   ├── services/api.js                     # Axios REST API client
    │   │   ├── App.jsx                             # Main dashboard & directory controller
    │   │   └── App.css                             # Obsidian & Electric Blue modern UI styles
    │   ├── index.html                              # HTML5 entrypoint
    │   ├── vite.config.js                          # Vite configuration
    │   ├── package.json                            # Frontend dependencies & build scripts
    │   └── .env.example                            # Frontend environment template
    └── README.md                                   # Student Management System documentation
```

---

## 1. MongoDB Queries (Summary)

### (a) Insert a Student Record
```javascript
use collegeDB;

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
```

### (b) Retrieve All Student Records
```javascript
db.students.find().pretty();
db.students.findOne({ rollNumber: "A24126552086" });
```

### (c) Update a Student's Department
```javascript
db.students.updateOne(
    { rollNumber: "A24126552086" },
    {
        $set: {
            department: "CSE (AI & ML)",
            updatedAt: new Date()
        }
    }
);
```

### (d) Delete a Student Record
```javascript
db.students.deleteOne({ rollNumber: "TEST-ROLL-999" });
```

### (e) MongoDB Aggregation Pipeline Operations
```javascript
// Pipeline 1: Group by department and compute total student enrollment
db.students.aggregate([
    { $group: { _id: "$department", totalStudents: { $sum: 1 } } },
    { $sort: { totalStudents: -1 } }
]);

// Pipeline 2: Filter 3rd Year students, group by department with student names array
db.students.aggregate([
    { $match: { year: "3rd Year" } },
    { $group: { _id: "$department", count: { $sum: 1 }, studentNames: { $push: "$name" } } },
    { $project: { department: "$_id", count: 1, studentNames: 1, _id: 0 } },
    { $sort: { count: -1 } }
]);
```

---

## 2. Quick Execution Guide

### Run MongoDB Queries & Aggregations in Terminal
```bash
cd case_study/mongoDB_queries
node run_mongo_queries.js
```

### Run the EduNexus Web Application Locally
1. **Backend:**
   ```bash
   cd case_study/Student-Management-System/backend
   npm install
   node server.js
   ```
2. **Frontend:**
   ```bash
   cd case_study/Student-Management-System/frontend
   npm install
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 3. Comprehensive Documentation

The complete 23-page institutional documentation is available as:
📄 **[A24126552086_FSWD_CASESTUDY_DOCUMENTATION.pdf](./A24126552086_FSWD_CASESTUDY_DOCUMENTATION.pdf)**
