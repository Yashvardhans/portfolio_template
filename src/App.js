import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
