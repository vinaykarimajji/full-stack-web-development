# EDUNEXUS – Student Management System

A full-stack web application designed to manage student records through a centralized institutional dashboard, developed as part of the **Full-Stack Web Development (23CM4121) Unit V Case Study**.

---

## Student Details

- **Student Name:** K.Vinay
- **Roll Number:** A24126552086
- **Branch:** Computer Science & Engineering (AI & ML)
- **Year / Semester:** 3rd Year – 1st Semester
- **Institution:** Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam
- **Course Title:** Full-Stack Web Development (23CM4121)
- **Faculty / Guide:** P. Santosh Kumar

---

## Case Study Topic & Core Objectives

**Topic:**  
Write MongoDB queries to perform the following operations on a `students` collection:
1. **(a) Insert a student record**
2. **(b) Retrieve all student records**
3. **(c) Update a student's department**
4. **(d) Delete a student record**

The application realizes these operations through:
1. **MongoDB Shell (`mongosh`) Scripts** for direct database administration.
2. **Express.js REST API** with Mongoose models for server-side persistence.
3. **Modern React Dashboard** (Vite + CSS + Lucide Icons) for seamless user interaction.

---

## Technologies Used

### Frontend
- **React.js (v18)**: Component-driven UI architecture.
- **Vite**: Ultra-fast frontend build tool and dev server.
- **Axios**: HTTP client for asynchronous REST API communication.
- **Lucide React**: Vector icons for dashboards, actions, and status indicators.
- **Custom Responsive CSS**: Dark/light themed dashboard interface.

### Backend
- **Node.js**: Asynchronous JavaScript runtime environment.
- **Express.js**: Lightweight web server framework providing REST endpoints.
- **Mongoose (ODM)**: Schema-based solution for MongoDB validation and query building.
- **CORS & Dotenv**: Cross-Origin Resource Sharing middleware and environment management.

### Database
- **MongoDB Atlas / Local MongoDB**: Cloud-hosted / local document database.
- **Database:** `collegeDB`
- **Collection:** `students`

---

## System Architecture

```text
               +----------------------------------+
               |        REACT FRONTEND (Vite)     |
               |  - Institutional Dashboard       |
               |  - Student Directory & Search    |
               |  - Add/Edit/View Modals          |
               +-----------------+----------------+
                                 |
                            Axios / HTTP
                            (JSON Body)
                                 |
                                 v
               +-----------------+----------------+
               |     NODE.JS + EXPRESS BACKEND    |
               |  - REST Endpoints (/api/students)|
               |  - Input Validation & Error Log  |
               |  - Mongoose Middleware           |
               +-----------------+----------------+
                                 |
                             Mongoose
                             (TCP / IP)
                                 |
                                 v
               +-----------------+----------------+
               |          MONGODB ATLAS           |
               |  - Database: collegeDB           |
               |  - Collection: students          |
               |  - BSON Document Storage         |
               +----------------------------------+
```

---

## Database Design & Document Model

Each student is stored as a BSON document in the `students` collection:

```json
{
  "_id": "6730a1b2c3d4e5f6a1b2c3d4",
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

## REST API Endpoints

| Method | Endpoint | Description | Case Study Operation |
|---|---|---|---|
| **POST** | `/api/students` | Register a new student record | **(a) Insert student** |
| **GET** | `/api/students` | Retrieve all registered students | **(b) Retrieve all** |
| **GET** | `/api/students/:id` | Retrieve single student by ID | Retrieval extension |
| **PUT** | `/api/students/:id` | Update department or profile | **(c) Update department** |
| **DELETE** | `/api/students/:id` | Remove student record | **(d) Delete student** |

---

## Setup and Local Installation

### 1. Backend Setup

```bash
cd "case_study/Student-Management-System/backend"
npm install
```

Create a `.env` file:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/collegeDB
```

Start the server:
```bash
npm run dev
# or: node server.js
```

### 2. Frontend Setup

```bash
cd "case_study/Student-Management-System/frontend"
npm install
```

Create a `.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:
```bash
npm run dev
```

Visit the application at: `http://localhost:5173`

---

## Systematic Debugging Scenario (Case Study Requirement)

### Problem Statement
*In a deployed Student Management System, records are successfully added to MongoDB, but after an update operation, the user interface fails to display the modified department.*

### Diagnostic Steps
1. **Network Tab Inspection**: Check if HTTP `PUT` request was sent with status code `200 OK`.
2. **Async React State Refresh**: Ensure that after `await updateStudent(id, data)`, the frontend immediately calls `await fetchStudents()` to re-populate state.
3. **Database Document Verification**: Inspect MongoDB directly using `db.students.findOne({ rollNumber: "A24126552086" })` to verify if the field is changed on the server.
4. **Conflict & Validation Check**: Verify if Mongoose unique indexing returned `11000` duplicate key errors.
