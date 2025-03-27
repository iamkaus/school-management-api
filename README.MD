# School Management API

## 📌 Overview

This API allows users to **add schools** and **retrieve a list of schools sorted by proximity** to a given location. Built with **Node.js, Express, and MySQL**.

## 🚀 Features

- **Add a school** with name, address, latitude, and longitude.
- **List schools** sorted by distance from a user's location.
- **Input validation** to ensure data consistency.
- **Deployed API** (https://school-management-api.com).
- **Postman collection available** for testing.

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-repo/school-management-api.git
cd school-management-api
```

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Configure Environment Variables**

Create a `.env` file in the root directory and add:

```env
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=school_management
PORT=5000
```

### **4️⃣ Set Up MySQL Database**

```sql
CREATE DATABASE school_management;
USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

### **5️⃣ Start the Server**

```bash
npm start
```

By default, the server runs on `http://localhost:5000/`.

---

## 📌 API Documentation

### **1️⃣ Add a School**

- **Endpoint:** `POST /api/v1/school/addSchool`
- **Payload (JSON):**

  ```json
  {
    "name": "ABC School",
    "address": "123 Main St",
    "latitude": 40.7128,
    "longitude": -74.0060
  }

  ```

- **Response:**

  ```json
  {
    "message": "School added successfully"
  }
  ```

### **2️⃣ List Schools**

- **Endpoint:** `GET /api/v1/schoo/listSchools`
- **Query Parameters:**
  - `latitude` (required)
  - `longitude` (required)
- **Example Request:**

  ```http
  GET /listSchools?latitude=40.7128&longitude=-74.0060
  ```

- **Response:**

  ```json
  [
    {
      "id": 1,
      "name": "ABC School",
      "address": "123 Main St",
      "latitude": 40.7128,
      "longitude": -74.0060,
      "distance": 0.0
    }
  ]
  ```

---

## 📌 Deployment (Optional)

To deploy on **Railway, Render, or AWS**, follow their deployment guides.

---

## 🛠️ Useful Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start the server |
| `npm run dev` | Start server in development mode (nodemon) |
| `node scripts/clearDB.js` | Clear all records in `schools` table |

---

## 🤝 Contributing

Feel free to **fork this repo** and submit pull requests. Suggestions and improvements are welcome!

---

## 📜 License

This project is licensed under the **MIT License**.
