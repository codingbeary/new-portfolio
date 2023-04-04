import "./styles/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import { ContactForm } from "./ContactForm";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
