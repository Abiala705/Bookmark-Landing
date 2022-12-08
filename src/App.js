import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Faqs from "./components/Faqs";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";
import NavBar from "./components/UI/NavBar";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <Download />
      <Faqs />
      <FormSection />
      <Footer />
    </main>
  );
}

export default App;
