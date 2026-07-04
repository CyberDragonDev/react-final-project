# Paradise Nursery - E-Commerce Plant Shop

Welcome to **Paradise Nursery**, your local destination for all your plant needs! This web application is an interactive e-commerce platform designed for plant lovers to browse a premium collection of indoor and outdoor green companions, manage a shopping cart in real-time, and experience a seamless checkout flow.

---

## Live Demo & Repository Links

*   **Deployed Application:** [View Paradise Nursery Live on GitHub Pages](https://cyberdragondev.github.io/react-final-project/)
*   **GitHub Repository:** [https://github.com/CyberDragonDev/react-final-project](https://github.com/CyberDragonDev/react-final-project)

---

## About the Company

At Paradise Nursery, where green dreams come alive, our mission is to provide you with the highest quality indoor and outdoor plants, carefully cultivated to bring life, fresh air, and tranquility into your home. 

Whether you are a seasoned plant parent or just starting your gardening journey, our team of experts is here to provide you with top-tier advice and healthy companions for your space.

---

## Features Implemented (Grading Criteria Met)

### Landing Page
*   **Immersive Visuals:** Full-screen landing page with a responsive background image managed via CSS.
*   **Company Overview:** Features an integrated statement detailing our mission and history.
*   **Call to Action:** A prominent "Get Started" button that transitions instantly to the store view.

### Product List Page
*   **Extensive Catalog:** Displays exactly 18 unique plants distributed evenly across three distinct categories (*Flowers*, *Houseplants*, and *Outdoor Plants*).
*   **Card Attributes:** Every plant item showcases a custom thumbnail image, its specific name, and formatted pricing.
*   **Dynamic Cart System:** Real-time state updates using Redux. The "Add to Cart" button instantly increments the navigation badge and automatically disables itself (turning grey) once selected to prevent duplication.

### Cart Item Page
*   **Dynamic Item Tracking:** Automatically displays the cumulative total of plants in the basket and calculates the precise dollar expenditure formatted to 2 decimal places.
*   **Detailed Breakdown:** Lists every unique plant variant with its thumbnail, name, unit price, operational controls, and line-item subtotal.
*   **Granular Adjustments:** Fully working `+` (increment) and `-` (decrement) quantity buttons. Reducing an item's volume to zero automatically handles structural removal from the global store.
*   **Actionable Routing:** Includes a "Continue Shopping" link to return to the catalog and a functional "Checkout" prompt indicating developmental progression ("Coming Soon").

### State Management Architecture
*   **Global Store Configuration:** Built entirely on top of **Redux Toolkit** (`@reduxjs/toolkit` and `react-redux`).
*   **Centralized Actions:** Driven by a modular `CartSlice.jsx` containing declarative slice reducers for handling immutable push arrays and index sorting.

---

## Tech Stack & Dependencies

*   **Framework:** React (Vite-powered environment)
*   **State Architecture:** Redux Toolkit (`CartSlice`)
*   **Styling:** Modular CSS & Inline JSX Styles
*   **Icons & Assets:** Standard Web Typography & Unsplash Collections
*   **Deployment:** GitHub Pages Pipeline (`gh-pages`)

---
