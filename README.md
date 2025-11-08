# 💼 LinkedIn Clone — MERN Stack Project

A full-stack LinkedIn-style web app built using **React, Node.js, Express, and MongoDB**.  
Users can **sign up, log in, create posts, like, comment, and delete posts** — all in a secure and responsive UI.

---

## 🚀 Live Links
- **Frontend:** https://linkedin-frontend.vercel.app  
- **Backend:** https://linkedin-backend.onrender.com  

---

## 🛠 Tech Stack
**Frontend:** React, React Router DOM  
**Backend:** Node.js, Express  
**Database:** MongoDB, Mongoose  
**Auth:** JWT, bcryptjs  
**Hosting:** Vercel (Frontend), Render (Backend)

---

## ⚙️ Setup

### Backend
```bash
cd backend
npm install
npm run dev

Create .env:

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=4000

Frontend
cd frontend
npm install
npm start

Create .env:

REACT_APP_API_URL=https://linkedin-backend.onrender.com

