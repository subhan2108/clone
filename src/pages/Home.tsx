import Hero from "../components/Hero";
import LatestNews from "../components/LatestNews";
import ElevateSection from "../components/ElevateSection";
import MeetThePros from "../components/MeetThePros";
import ClubAmenities from "../components/ClubAmenities";
import ParallaxImageSection from "../components/ParallaxImageSection";
const Home = () => {
  return (
    <>
      <Hero />
      <LatestNews />
      <ElevateSection />
      {/* <MeetThePros /> */}
      <ClubAmenities />
      <ParallaxImageSection />
    </>
  );
};

export default Home;
