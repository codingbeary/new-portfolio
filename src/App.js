import "./styles/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
