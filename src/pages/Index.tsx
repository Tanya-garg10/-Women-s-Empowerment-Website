import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GratitudeCounter from "@/components/GratitudeCounter";
import InspirationalWomen from "@/components/InspirationalWomen";
import Timeline from "@/components/Timeline";
import WomenFields from "@/components/WomenFields";
import AppreciationWall from "@/components/AppreciationWall";
import ThankYouCard from "@/components/ThankYouCard";
import QuoteGenerator from "@/components/QuoteGenerator";
import WomenQuiz from "@/components/WomenQuiz";
import MemoryGame from "@/components/MemoryGame";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <div id="about"><AboutSection /></div>
    <div id="counter"><GratitudeCounter /></div>
    <div id="inspirational"><InspirationalWomen /></div>
    <div id="timeline"><Timeline /></div>
    <div id="fields"><WomenFields /></div>
    <div id="appreciation"><AppreciationWall /></div>
    <div id="thankyou"><ThankYouCard /></div>
    <div id="quotes"><QuoteGenerator /></div>
    <div id="quiz"><WomenQuiz /></div>
    <div id="game"><MemoryGame /></div>
    <div id="gallery"><GallerySection /></div>
    <FooterSection />
  </div>
);

export default Index;
