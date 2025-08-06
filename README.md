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

## 📁 Project Structure

