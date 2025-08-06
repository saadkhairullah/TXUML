# TXUML - Texas Underground Mine Locator

TXUML (Texas Underground Mine Locator) is a modern web application designed to help users explore underground and surface mine data across Texas. It provides an interactive map using Mapbox GL with clickable mine markers and contextual overlays. Users can drop pins on the map to calculate and view proximity risk scores.

---

## 🔧 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript, Server Actions)
- **Frontend**:
  - React 19
  - Tailwind CSS
  - Mapbox GL JS for interactive mapping
- **Backend**:
  - MongoDB via Mongoose for data storage
  - JWT-based authentication using `jsonwebtoken`
- **Other Tools**:
  - Axios for API calls
  - bcryptjs for password hashing
  - React Hot Toast for alerts and notifications

---

## 🚀 Features

- 🔐 **User Authentication**: Register/Login flow with JWT support.
- 🗺️ **Interactive Map**: 
  - Centered and bounded within Texas
  - Displays mine zones and localities as polygon layers
  - Loads mine markers with custom icons
  - Clickable pins that show detailed popup information
- 📍 **Pin Drop & Risk Calculation**:
  - Click anywhere on the map to drop a pin
  - Automatically calculates a "risk score" based on nearby mines
- 🌙 **Dynamic Theming**: Light/dark mode toggle for map styling

---
# 🛠️ Getting Started

## ❗Prerequisite

Please make sure you have Node.js v18 or higher installed, for installation guide visit https://nodejs.org/en

## 1. Clone the repo
```bash
git clone https://github.com/your-username/TXUML.git
cd TXUML/tx-uml
```
---
## 2. Install dependencies
```bash
npm install
```
## 3. Fill in the values in the .env.example file, then rename to .env
```bash
MONGO_URI=
TOKEN_SECRET=
DOMAIN=http://localhost:3000
EMAIL=
PASSWORD=
NEXT_PUBLIC_MAPBOX_API_KEY=
```
### 🔐 For developer keys, contact Saad Khairullah, project owner.

## 4. Run the development server
```bash
npm run dev
```


