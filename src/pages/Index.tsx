import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Banners from "@/components/Banners";
import PopularGames from "@/components/PopularGames";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Banners />
      <PopularGames />
      <Footer />
    </div>
  );
};

export default Index;
