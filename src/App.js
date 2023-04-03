import "./styles/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";
import Tools from "./Tools";
import { ContactForm } from "./ContactForm";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Tools />
        <ContactForm />
      </div>
    </div>
  );
}
