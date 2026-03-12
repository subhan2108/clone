import { ReactLenis } from "lenis/react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BecomeAMemberSection from "./components/BecomeAMemberSection";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Clubs from "./pages/Clubs";
import Membership from "./pages/Membership";

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <BecomeAMemberSection />
          <Footer />
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
}
