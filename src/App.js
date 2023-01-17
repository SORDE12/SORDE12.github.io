import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import SocialLinks from "./Components/SocialLinks";
import Skills from "./Components/skills/Skills";
import Gitstats from "./Components/Gitstats/Gitstats";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Skills/>
      <Gitstats />
    
    </div>
  );
}

export default App;
