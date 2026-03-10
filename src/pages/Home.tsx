import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import ElevateSection from "../components/ElevateSection";
import MeetThePros from "../components/MeetThePros";
import ClubAmenities from "../components/ClubAmenities";
import ParallaxImageSection from "../components/ParallaxImageSection";
import BecomeAMemberSection from "../components/BecomeAMemberSection";
import Footer from "../components/Footer";

interface HomeProps {
  onNavigate: (page: "home" | "story" | "clubs" | "membership") => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  return (
    <>
      <Hero />
      <LatestNews />
      <ElevateSection />
      <MeetThePros />
      <ClubAmenities />
      <ParallaxImageSection />
      <BecomeAMemberSection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  );
};

export default Home;
