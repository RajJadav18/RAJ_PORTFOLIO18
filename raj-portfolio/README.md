# Raj Jadav — Portfolio (MERN Stack)

A premium, production-grade portfolio website built with the **MERN Stack** (MongoDB, Express, React, Node.js).

---

## ✨ Features

- **Luxury dark aesthetic** with gold accents, animated grid, glow orbs, noise texture
- **Custom cursor** with smooth follower animation
- **Type animation** cycling through roles on the hero
- **Filterable projects** with category badges
- **Contact form** — saves to MongoDB via Express REST API
- **Responsive** — works perfectly on all screen sizes
- **Premium typography** — Syne (display) + DM Sans (body) + Space Mono (code)
- **Smooth hover/transition effects** throughout

---

## 🗂️ Project Structure

```
raj-portfolio/
├── backend/               # Express + MongoDB API
│   ├── models/
│   │   ├── Contact.js     # Contact form submissions
│   │   └── Project.js     # Portfolio projects
│   ├── routes/
│   │   ├── contact.js     # POST /api/contact
│   │   └── projects.js    # GET /api/projects
│   ├── server.js          # Main server entry
│   ├── .env.example       # Environment variables template
│   └── package.json
│
├── frontend/              # React app
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js  # Sticky nav with mobile menu
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js    # Hero, Skills, Featured Projects, CTA
│   │   │   ├── About.js   # Bio, Experience, Education, Certs, Achievements
│   │   │   ├── Projects.js # Filterable project grid
│   │   │   └── Contact.js  # Form + contact info
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css      # Global design system (CSS variables, utilities)
│   └── package.json
│
└── package.json           # Root scripts (concurrently)
```

---

## 🚀 Quick Start

### 1. Prerequisites
- **Node.js** v18+ — https://nodejs.org
- **MongoDB** (local or Atlas) — https://mongodb.com
- **npm** or **yarn**

### 2. Clone / Download & Install

```bash
# From the project root
npm run install-all
```

Or manually:
```bash
# Install root deps
npm install

# Install backend deps
cd backend && npm install

# Install frontend deps
cd ../frontend && npm install
```

### 3. Configure Environment

```bash
# Copy env template
cp backend/.env.example backend/.env
```

Edit `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/raj_portfolio
CLIENT_URL=http://localhost:3000
```

> **MongoDB Atlas** (cloud): Replace `MONGO_URI` with your Atlas connection string.
> Get one free at https://cloud.mongodb.com

### 4. Run Development Servers

```bash
# Run both frontend + backend simultaneously
npm run dev
```

Or separately:
```bash
# Terminal 1 — Backend (http://localhost:5000)
npm run start:backend

# Terminal 2 — Frontend (http://localhost:3000)
npm run start:frontend
```

### 5. Open in Browser

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api/health

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Server health check |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/featured` | Get featured projects |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages (admin) |

### Contact form payload:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Collaboration",
  "message": "Hello Raj, I'd love to work with you..."
}
```

---

## 🌐 Deployment

### Frontend — Vercel / Netlify
```bash
cd frontend && npm run build
# Deploy the build/ folder
```

### Backend — Railway / Render / Heroku
- Set environment variables in your platform dashboard
- Point `MONGO_URI` to your Atlas cluster

### Environment variables for production:
```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/raj_portfolio
CLIENT_URL=https://your-frontend-domain.com
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--bg-primary` | `#06060d` (deep navy black) |
| `--accent-gold` | `#c9a84c` (luxury gold) |
| `--accent-cyan` | `#00d4ff` (electric cyan) |
| `--font-display` | Syne (headings) |
| `--font-body` | DM Sans (body) |
| `--font-mono` | Space Mono (code/labels) |

---

## 📱 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, Skills, Featured Projects, CTA |
| About | `/about` | Bio, Work Experience, Education, Certifications, Achievements |
| Projects | `/projects` | Filterable project grid by category |
| Contact | `/contact` | Contact form + info panel |

---

## 🛠️ Tech Stack

**Frontend**
- React 18
- React Router v6
- Framer Motion (animations)
- React Type Animation
- React Icons
- React Toastify
- Axios

**Backend**
- Node.js
- Express.js
- Mongoose (ODM)
- MongoDB

---

## 📬 Contact

**Raj Jadav**
- 📧 rajjadav0607@gmail.com
- 📱 +91 7990358080
- 🔗 [linkedin.com/in/rajjadav18](https://www.linkedin.com/in/rajjadav18)
- 📍 Rajkot, Gujarat, India
