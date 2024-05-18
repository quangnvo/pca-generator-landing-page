import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ScreenshotBanner from "./components/ScreenshotBanner";
import VideoBanner from "./components/VideoBanner";
import Features from "./components/Features";
import HIRIBanner from "./components/HIRIBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient">
      <div className="container flex flex-col gap-20 md:gap-40">
        <Navbar />
        <Banner />
        <ScreenshotBanner />
        <VideoBanner />
        <Features />
        <HIRIBanner />
        <Footer />
      </div>
    </div >
  );
}
