import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import ElevateSection from "../components/ElevateSection";
import MeetThePros from "../components/MeetThePros";
import ClubAmenities from "../components/ClubAmenities";
import ParallaxImageSection from "../components/ParallaxImageSection";
import BecomeAMemberSection from "../components/BecomeAMemberSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestNews />
      <ElevateSection />
      <MeetThePros />
      <ClubAmenities />
      <ParallaxImageSection />
      <BecomeAMemberSection />
      <Footer />
    </>
  );
};

export default Home;
