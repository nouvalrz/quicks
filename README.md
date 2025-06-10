# Quicks – Frontend Challenge Submission

This is a frontend challenge submission. The goal was to create a pixel-perfect, interactive UI for a tool called **Quicks**, which consists of two main features:

- **Messaging**
- **To Do List**

The design reference was provided in Figma and included both a **Foundation** and **Bonus Round** section.

**IMPORTANT** : Please refer to the **Local Development** section below if you'd like to run this project on your machine.

---

## 🔗 Live Demo

👉 [https://quicks.nouval.site](https://quicks.nouval.site)

---

## 🛠️ Tech Stack

- **TypeScript**
- **React**
- **Zustand** – for state management
- **Tailwind CSS** – for styling
- **json-server** – for mocking API responses
- **Caddy** – as a web server and reverse proxy on a personal VPS

---

## ✅ Features Implemented

- Fully responsive and pixel-perfect UI based on the Figma design
- Smooth, bug-free interactions for both **Messaging** and **To Do List**
- Functional **Bonus Round** features
- Mock API integration using `json-server` to simulate realistic data fetching and delays
- Deployment to a personal VPS using Caddy
- Development script using `concurrently` to run frontend and mock backend together
- Intended 1-second delay on each API response to simulate a loading process.

---

## 📁 Environment Setup

Before running the project, create a `.env` file in the root directory with the following content:

```.env
VITE_BASE_API_URL=http://localhost:4000
```
Note: You can change the port, but make sure to also update it in the `dev` script.

## 🧪 Local Development

To run the project locally:

### Install dependencies
```
npm install
```

### Start both frontend and mock backend
```
npm run dev
```
The dev script uses concurrently to start both:

The Vite development server (frontend)

The json-server mock backend (on port 4000)
