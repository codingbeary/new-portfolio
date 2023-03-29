import "./styles/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
}
