import "./styles/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Work from "./Work";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Work />
      </div>
    </div>
  );
}
