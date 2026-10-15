import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';
import { ClientAuditBanner } from './components/ClientAuditBanner';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { ShippingReturnsPage } from './pages/ShippingReturnsPage';
import { SizeGuidePage } from './pages/SizeGuidePage';
import { AccountPage } from './pages/AccountPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <StoreProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#111111]">
          {/* Store Owner Audit Ribbon */}
          <ClientAuditBanner />

          {/* Site Navigation Header */}
          <Header onOpenSearch={() => setIsSearchOpen(true)} />

          {/* Main Routing Outlet */}
          <div className="flex-1">
            <Routes>
              {/* 1. Homepage */}
              <Route path="/" element={<HomePage />} />

              {/* 2. All Products */}
              <Route path="/shop" element={<ShopPage />} />

              {/* 3-9. Dynamic Category & Curated Collections */}
              <Route path="/category/:categorySlug" element={<CategoryPage />} />

              {/* 10. Individual Product Page */}
              <Route path="/product/:slug" element={<ProductDetailPage />} />

              {/* 11. Search Results */}
              <Route path="/search" element={<SearchResultsPage />} />

              {/* 12. Shopping Cart */}
              <Route path="/cart" element={<CartPage />} />

              {/* 13. Checkout Prototype */}
              <Route path="/checkout" element={<CheckoutPage />} />

              {/* 14. Wishlist */}
              <Route path="/wishlist" element={<WishlistPage />} />

              {/* 15. About Fashion Martinez */}
              <Route path="/about" element={<AboutPage />} />

              {/* 16. Contact */}
              <Route path="/contact" element={<ContactPage />} />

              {/* 17. FAQ */}
              <Route path="/faq" element={<FaqPage />} />

              {/* 18. Shipping & Returns */}
              <Route path="/shipping-returns" element={<ShippingReturnsPage />} />

              {/* 19. Size Guide */}
              <Route path="/size-guide" element={<SizeGuidePage />} />

              {/* 20. Customer Account */}
              <Route path="/account" element={<AccountPage />} />

              {/* 21. 404 Custom Not Found */}
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          {/* Site Footer */}
          <Footer />

          {/* Interactive Drawers, Modals & Notifications */}
          <CartDrawer />
          <QuickViewModal />
          <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          <Toast />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}
