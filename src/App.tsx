import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EditorialGrid from './components/EditorialGrid';
import ProductStrip from './components/ProductStrip';
import CampaignBanner from './components/CampaignBanner';
import TripleVideoSection from './components/TripleVideoSection';
import BrandStorySplitSection from './components/BrandStorySplitSection';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="section-content bg-ivory">
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <EditorialGrid />
                <ProductStrip />
                <CampaignBanner />
                <GallerySection />
                <VideoSection />
                <TripleVideoSection />
                <BrandStorySplitSection />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Hero />
                <LoginPage />
              </>
            }
          />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
