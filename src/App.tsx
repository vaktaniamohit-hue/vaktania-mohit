import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/ToastContainer';
import { SizeGuideModal } from './components/common/SizeGuideModal';
import { SearchOverlay } from './components/common/SearchOverlay';
import { AuthModal } from './components/common/AuthModal';
import { QuickViewModal } from './components/common/QuickViewModal';
import { CartDrawer } from './components/cart/CartDrawer';

// Views
import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { ProductDetailView } from './views/ProductDetailView';
import { CartView } from './views/CartView';
import { WishlistView } from './views/WishlistView';
import { CheckoutView } from './views/CheckoutView';
import { OrderConfirmationView } from './views/OrderConfirmationView';
import { OrderTrackingView } from './views/OrderTrackingView';
import { AccountView } from './views/AccountView';
import { MembershipView } from './views/MembershipView';
import { StoresView } from './views/StoresView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';

const MainContent: React.FC = () => {
  const { activeView } = useShop();

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />;
      case 'shop':
        return <ShopView />;
      case 'product':
        return <ProductDetailView />;
      case 'cart':
        return <CartView />;
      case 'wishlist':
        return <WishlistView />;
      case 'checkout':
        return <CheckoutView />;
      case 'confirmation':
        return <OrderConfirmationView />;
      case 'tracking':
        return <OrderTrackingView />;
      case 'account':
        return <AccountView />;
      case 'membership':
        return <MembershipView />;
      case 'stores':
        return <StoresView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Global Sticky Navigation */}
      <Header />

      {/* Main Dynamic Viewport */}
      <main className="flex-1">
        {renderActiveView()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <SearchOverlay />
      <AuthModal />
      <QuickViewModal />
      <SizeGuideModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <MainContent />
    </ShopProvider>
  );
}
