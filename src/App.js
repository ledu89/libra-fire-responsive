import Expirience from "./components/Expirience";
import Footer from "./components/Footer";
import HomeHero from "./components/HomeHero";
import ImagesSlider from "./components/ImagesSlider";
import Infos from "./components/Infos";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Spectar from "./components/Spectar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomeHero />
      <Spectar />
      <Expirience />
      <ImagesSlider />
      <Infos />
      <Testimonials />
      <Locations />
      <News />
      <Footer />
    </div>
  );
}

export default App;
