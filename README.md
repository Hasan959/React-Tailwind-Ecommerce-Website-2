<div align="center">

# <span style="color: #FF0000; font-weight: bold; text-shadow: 0 0 10px #FF5555;">🌟 Live Demo: [Live Site](https://react-tailwind-ecommerce-website-2.vercel.app/) 🌟</span>

[![Live Demo](https://img.shields.io/badge/%F0%9F%94%A5_LIVE_DEMO-Click_to_Explore!-FF0000?style=for-the-badge&logo=vercel&logoColor=white)](https://react-tailwind-ecommerce-website-2.vercel.app/)

> **🔥 Click above and dive into the full interactive experience!**  
> Search | Add to Cart | Animations | Mobile-Friendly — **All Live!**
</div>

[![React](https://img.shields.io/badge/React-19.2-brightgreen)](https://reactjs.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4.1-blue)](https://tailwindcss.com/) [![Vite](https://img.shields.io/badge/Vite-v7.2.2-orange)](https://vitejs.dev/) 

A modern, responsive e-commerce website built with React and Tailwind CSS. This project showcases a complete shopping experience with product listings, cart functionality, search, filters, and smooth animations. It's designed for performance and mobile-first responsiveness, perfect for learning or as a starter template.

![Screenshot](https://github.com/Hasan959/React-Tailwind-Ecommerce-Website-2/blob/main/Screenshot%202025-10-21%20052916.png?raw=true) <!-- Replace with actual screenshot URL -->

## ✨ Features

- **Product Catalog**: Dynamic product grid with search, category, and price filtering.
- **Product Details**: Individual product pages with images, descriptions, pricing, and add-to-cart.
- **Shopping Cart**: Add/remove items, quantity management, total calculation, and persistence with localStorage.
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS.
- **Smooth Animations**: Framer Motion for hover effects and transitions (if integrated).
- **Routing**: React Router for seamless navigation between home, products, cart, and detail pages.
- **State Management**: Context API for cart and user state.
- **Fast Loading**: Optimized with Vite bundler for quick development and builds.

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.2.0 | UI Framework |
| Tailwind CSS | v4.1 | Styling & Utility Classes |
| React Router | 7.9.6 | Navigation |
| Axios | 1.13.2 | API Requests |
| Vite | 5.0.0 | Build Tool |

## 📦 Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Hasan959/React-Tailwind-Ecommerce-Website-2.git
   cd React-Tailwind-Ecommerce-Website-2
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in Browser:**
   Visit `http://localhost:5173` (or the port shown in terminal).

## 🚀 Usage

### Development
- Edit files in `src/` (e.g., `components/ProductCard.jsx` for product display).
- Changes auto-reload with Vite's HMR (Hot Module Replacement).
- Test cart: Add products, check localStorage persistence.

### Building for Production
```bash
npm run build
# or
yarn build
```
Output in `dist/` folder. Deploy to Vercel/Netlify.

### API Integration
- Current setup uses Fake Store API (`https://fakestoreapi.com/products`).
- Replace in `src/services/api.js` for custom backend:
  ```js
  export const fetchProducts = () => axios.get('/api/products');
  ```

### Customization
- **Themes:** Edit `tailwind.config.js` for colors.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation Bar
│   ├── ProductCard.jsx     # Product Display Card
│   ├── Cart.jsx            # Shopping Cart
│   └── Footer.jsx          # Footer
├── pages/
│   ├── Home.jsx            # Landing Page
│   ├── Products.jsx        # Product List
│   ├── SingleProduct.jsx   # Product Detail
│   ├── Cart.jsx            # Cart Page
│   └── About.jsx           # About Page
├── context/
│   └── CartContext.jsx     # Cart State Management
├── services/
│   └── api.js              # API Calls
├── utils/
│   └── helpers.js          # Utility Functions
├── App.jsx                 # Main App with Router
├── index.css               # Global Styles
└── main.jsx                # Entry Point
```
  
## 🎨 Customization Guide
### Tailwind Config
``` js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colours: {
        primary: '#EF4444',  // Red for buttons
      },
    },
  },
};
```

##  Dependencies Use

"dependencies": {
    "@clerk/clerk-react": "^5.49.1",
    "@tailwindcss/vite": "^4.1.13",
    "axios": "^1.12.2",
    "lottie-react": "^2.4.1",
    "lucide-react": "^0.544.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router": "^7.9.4",
    "react-scroll-to-top": "^3.1.0",
    "react-slick": "^0.31.0",
    "react-toastify": "^11.0.5",
    "slick-carousel": "^1.8.1",
    "tailwindcss": "^4.1.13"
  },




  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.3",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }




### Adding New Components
1. Create `src/components/NewComponent.jsx`.
2. Import in relevant page: `import NewComponent from './NewComponent';`.
3. Use: `<NewComponent />`.

### Performance Tips
- Use `React.memo` for product cards to avoid re-renders.
- Lazy load images with `loading="lazy"`.
- Optimise bundle with Vite's `vite.config.js`.

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/add-filter`.
3. Commit changes: `git commit -m "Add product filter"`.
4. Push: `git push origin feature/add-filter`.
5. Open a Pull Request.

## Contact & Social

- **Developer:** Hasan Mahmud  
- **GitHub:** [@Hasan959](https://github.com/Hasan959)  
- **LinkedIn:** [![LinkedIn](https://img.shields.io/badge/Connect%20on%20LinkedIn-0077B5?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/hasan-mahmud-14abb8170/)  
- **Email:** hasanmahmud.biddut@gmail.com  
- **Live Demo:** [Live Site](https://react-tailwind-ecommerce-website-2.vercel.app/)  

