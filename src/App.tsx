import { ReactLenis } from "lenis/react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Clubs from "./pages/Clubs";
import Membership from "./pages/Membership";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "story" | "clubs" | "membership">("home");

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "story":
        return <OurStory onNavigate={setCurrentPage} />;
      case "clubs":
        return <Clubs onNavigate={setCurrentPage} />;
      case "membership":
        return <Membership onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ReactLenis root>
      <div className="min-h-screen">
        <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
        {renderPage()}
      </div>
    </ReactLenis>
  );
}
