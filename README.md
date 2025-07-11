# Amazon Clone - A Full-Stack React.js Project

A full-stack Amazon clone built with a mobile-first, responsive design using React, Express.js, and Firebase. The frontend is deployed on Netlify, and the backend is deployed on Render.

---

## 🚀 Live Demo
- **Frontend (Netlify):** [https://samuel-amazon-clone-deploy.netlify.app/]
- **Backend API (Render):** [https://amazon-backend-deploy-wd9j.onrender.com]

---

## Features
- **Mobile-First & Responsive Design**: Seamless experience across devices.
- **User Authentication**: Sign up and log in with Firebase.
- **Home Page**: Browse product categories and featured products.
- **Product Details**: View detailed information about each product.
- **Cart System**: Add/remove products to/from your shopping cart.
- **Order Summary**: See a summary of selected items in the cart.
- **Payment Integration**: Stripe for real (demo) transactions.
- **Protected Routes**: Secure pages for authenticated users only.
- **Loading Animations**: Smooth user experience with spinners.

---

## 🗂️ Folder Structure
```
amazon-clone/
├── public/                # Static files (index.html, favicon, etc.)
├── src/
│   ├── API/               # Axios setup and API endpoints
│   ├── Assets/            # Images and static assets
│   ├── components/        # Reusable UI components
│   ├── Pages/             # Main app pages (Auth, Cart, Orders, etc.)
│   ├── Utility/           # Helpers (Firebase config, Reducer, etc.)
│   ├── App.js             # Main app component
│   ├── App.css            # Global styles
│   ├── index.js           # Entry point
│   └── Router.js          # App routing
├── functions/             # (If using Firebase functions)
├── package.json           # Project metadata and scripts
├── firebase.json          # Firebase config
└── README.md              # Project documentation

Amazon-Backend-Deploy/     # Express.js backend (deployed on Render)
```

---

## 🛠️ Technology Stack
- **Frontend:** React, JavaScript, CSS Modules
- **Backend:** Express.js (for payment and API proxy)
- **Authentication:** Firebase
- **API:** FakeStoreAPI (product data)
- **Deployment:** Netlify (frontend), Render (backend)
- **Payment:** Stripe

---

## 🏁 Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/samuelAemro12/amazon-clone
```
### 2. Install dependencies
```bash
cd amazon-clone
npm install
```
### 3. Start the development server
```bash
npm start
```

---

## 📦 Main Dependencies
- react, react-dom, react-router-dom
- firebase
- axios
- react-spinners
- react-responsive-carousel
- numeral
- @mui/material, @emotion/react, @emotion/styled
- @stripe/react-stripe-js, @stripe/stripe-js

---

## ✨ Author
Samuel Aemro Melese  
[GitHub](https://github.com/samuelAemro12/)  
Email: samuelaemrowork12@gmail.com

---

## ℹ️ Acknowledgments
This project was a learning experience in full-stack development, focusing on authentication, product display, shopping cart, and responsive design. Product data is provided by FakeStoreAPI. Special thanks to the React and Express.js documentation and the open-source community.

---

## 📄 License
This project is for educational purposes only and is not affiliated with Amazon.