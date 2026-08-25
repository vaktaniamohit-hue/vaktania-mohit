# ⚡ VOLT Athletic Footwear

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-black.svg?style=flat)](LICENSE)

A high-performance, editorial sports footwear and sneaker e-commerce platform engineered for runners, athletes, and sneaker collectors. Designed with a monochrome brutalist aesthetic, high-contrast typography, interactive product views, multi-tier checkout simulation, and comprehensive catalog filtering.

---

## ✨ Features

### 👟 Complete Footwear Catalog & Navigation
- **30+ Precision Footwear Models**: Spanning Road Racing, Marathon Super-Shoes, Court Basketball, Gym/Cross-Training, All-Weather Trail Running, and Lifestyle Streetwear.
- **Deep Multi-Facet Filtering**: Filter by Gender (Men, Women, Unisex, Kids), Sport Category, Price Range, UK Shoe Size (UK 6 – UK 12), Colorway, Drop Height, Cushioning Profile, and In-Stock availability.
- **Instant Search Modal**: Keyword search across all models, categories, and colorways with trending search chips and keyboard shortcuts (`ESC` / `⌘K`).

### 🔬 Interactive Product Detail View
- **Multi-Angle Gallery**: High-resolution angle views (lateral, medial, outsole tread, upper mesh).
- **Dynamic Colorway Switcher**: Real-time image updating for each colorway.
- **Interactive Sizing Tool**: UK to US, EU, and Foot Length (CM) conversion chart with an interactive fit guide.
- **Shoe Specification Matrix**: Weight (grams), Heel-to-Toe Drop (mm), Cushioning Foam, Outsole Compound, and Carbon/Nylon plate status.
- **Customer Reviews & Ratings Breakdown**: Community feedback, verified buyer badges, and rating distribution bars.

### 🛍️ Cart & Checkout Engine
- **Slide-Over Quick Cart & Dedicated Cart Page**: Real-time quantity adjustments, item removals, and save-for-later actions.
- **Free Express Delivery Meter**: Dynamic progress bar calculating threshold towards free courier dispatch.
- **Promotional Code Engine**: Automatic discount calculation for coupons (e.g. `VOLT10`, `PROATHLETE`, `RUN2025`).
- **3-Step Checkout Flow**:
  1. **Address Form**: Auto-detects Indian states/cities by PIN code.
  2. **Shipping Options**: BlueDart Express Air (Next-Day) and standard road logistics.
  3. **Payment Methods**: Realistically simulated UPI (Google Pay, PhonePe, Paytm, CRED), Credit/Debit Cards, Netbanking, and Cash on Delivery (COD).
- **Order Confirmation & Receipt Generation**: Complete invoice breakdown with printable/downloadable summary.

### 📦 Order Tracking & Store Locator
- **Live Order Tracking**: Interactive shipment progress timeline from warehouse packaging to final hub delivery.
- **Flagship Experience Centers**: Store locator directory covering key locations (Mumbai Bandra, Bengaluru Indiranagar, Delhi Connaught Place, Hyderabad Jubilee Hills) with operating hours and directions.

### ⚡ VOLT Pro Club & Account Portal
- **Membership Tiers**: Bronze, Silver, Gold, and Elite Black Pass perks, early access to limited sneaker drops, and free returns.
- **Account Dashboard**: Order history logs, saved delivery addresses, wishlist items, and member status.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)

---

## 📁 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── cart/             # Slide-over cart drawer & mini-cart widgets
│   │   ├── common/           # Navigation bar, Footer, Search modal, Auth modal
│   │   └── product/          # ProductCard, FilterSidebar, ReviewList, QuickView
│   ├── context/
│   │   └── StoreContext.tsx  # Global state for cart, wishlist, auth & checkout
│   ├── data/
│   │   ├── products.ts       # Detailed catalog database with specifications
│   │   └── stores.ts         # Retail stores and experience center locations
│   ├── types/
│   │   └── index.ts          # Comprehensive TypeScript interface definitions
│   ├── views/
│   │   ├── HomeView.tsx              # Hero banners, featured drops & tech highlights
│   │   ├── ShopView.tsx              # Catalog browsing with sorting & filters
│   │   ├── ProductDetailView.tsx     # Full specifications & color/size selector
│   │   ├── CartView.tsx              # Full cart page with promo discount engine
│   │   ├── CheckoutView.tsx          # Multi-step checkout with Indian payment methods
│   │   ├── OrderConfirmationView.tsx # Order summary & confirmation ticket
│   │   ├── OrderTrackingView.tsx     # Real-time shipment tracking status
│   │   ├── WishlistView.tsx          # Saved shoes & quick move-to-cart
│   │   ├── MembershipView.tsx        # VOLT Club loyalty tiers & VIP perks
│   │   ├── StoresView.tsx            # Retail store directory & contact info
│   │   ├── AccountView.tsx           # User profile & past order archive
│   │   ├── AboutView.tsx             # Brand heritage, engineering philosophy
│   │   └── ContactView.tsx           # Athlete support & inquiry form
│   ├── App.tsx               # Main application container & view router
│   ├── index.css             # Tailwind CSS entrypoint
│   └── main.tsx              # React DOM mounting
├── public/                   # Static assets & icons
├── metadata.json             # Application metadata configuration
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript compiler settings
└── vite.config.ts            # Vite build configuration
