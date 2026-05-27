# 🛒 E-Shop: Professional E-Commerce Website

A modern, high-performance, and responsive E-Commerce application built with **React**, **Vite**, and **Tailwind CSS**. This project features a complete shopping experience from product browsing to a mock checkout and order history tracking.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-FF4B4B?style=for-the-badge&logo=lucide&logoColor=white)

## ✨ Features

-   **🛍️ Product Showcase:** Dynamic product grid with categories, pricing, and descriptions.
-   **🛒 Advanced Shopping Cart:**
    -   Add/Remove products in real-time.
    -   Dynamic quantity adjustments.
    -   Live subtotal and total calculations.
-   **💳 Professional Checkout:**
    -   Shipping information form with validation.
    -   Mock secure payment gateway interface.
    -   Loading states for a realistic transaction feel.
-   **📜 Order History:** Persistent dashboard to track all successful purchases.
-   **💾 Persistent State:** Data is saved in `localStorage`, so your cart and orders survive page refreshes.
-   **📱 Fully Responsive:** Optimized for Mobile, Tablet, and Desktop screens.

## 🛠️ Tech Stack

-   **Frontend:** React.js (Functional Components & Hooks)
-   **Build Tool:** Vite (Ultra-fast HMR)
-   **Styling:** Tailwind CSS (Utility-first CSS)
-   **Icons:** Lucide-React
-   **Routing:** React Router DOM v6
-   **State Management:** React Context API

## 🚀 Getting Started

Follow these steps to get a local copy up and running:

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/faizafaisal786/internship-task-4.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd internship-task-4
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Visit `http://localhost:5173` to see the app in action!

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (ProductCard, Grid, etc.)
├── context/        # Global state management (Cart & Orders)
├── data/           # Mock product database (JSON)
├── pages/          # Main application views (Home, Cart, Checkout, Orders)
├── App.jsx         # Main routing and layout configuration
└── main.jsx        # Entry point
```

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

**Built with ❤️ for a professional internship showcase.**
