# 🔁 Zerodha-Clone

A full-stack **trading platform clone** inspired by [Zerodha](https://zerodha.com), built using the **MERN stack** with authentication, dashboards, and live visualizations.

## 🚀 Live Demo
- 🌐 **Landing Page**: [zerodha-clone-frontend-2.onrender.com](https://zerodha-clone-frontend-2.onrender.com)  
- 📊 **Dashboard**: [zerodha-clone-dashboard-2.onrender.com](https://zerodha-clone-dashboard-2.onrender.com)  
- 🧪 **Test Login**  
  `Email`: test1@gmail.com  
  `Password`: test_1

## 🧱 Tech Stack

### ⚙️ Backend
- Node.js, Express.js  
- MongoDB + Mongoose  
- JWT (Authentication)  
- bcrypt, dotenv  

### 🖥️ Frontend (Landing)
- React.js, React Router  
- Axios, Bootstrap  

### 📈 Dashboard
- React.js, React Router  
- Axios, Material UI  
- Recharts (Data Visualization)

## 🔐 Features
- User Authentication with JWT  
- Protected Dashboard  
- Dynamic charts and trading UI  
- Clean modular structure (3-app architecture)

## 🔐 Authentication Flow

1. 📝 **User Registration/Login**
   - The frontend (Landing Page) collects user credentials.
   - Sends the data securely to the backend via Axios.

2. 🔑 **JWT Generation**
   - Backend verifies credentials and generates a **JSON Web Token (JWT)**.
   - The token is sent back to the frontend.

3. 📦 **Token Storage**
   - The frontend stores the JWT (in `localStorage`).

4. 🚪 **Protected Dashboard**
   - All dashboard routes are protected.
   - On access, the JWT is sent in request headers.
   - Backend verifies the token before responding.

5. ✅ **Access Granted**
   - If the token is valid, users can view data, charts, and perform trading actions.

