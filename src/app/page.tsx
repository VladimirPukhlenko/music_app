import AppDescription from "@/components/AppDescription";
import FistScreenGradientBg from "@/components/FistScreenGradientBg";
import Footer from "@/components/Footer";
import Player from "@/components/Player";
import StationList from "@/components/StationList";

const Home = () => {
  return (
    <main className="flex flex-col text-white bg-black">
      <div className="relative min-h-screen  w-full mx-auto flex flex-col lg:flex-row  justify-between items-center gap-12 p-10 md:p-24">
        <FistScreenGradientBg />
        <AppDescription />
        <Player />
      </div>
      <div className="min-h-screen flex items-baseline">
        <StationList />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
