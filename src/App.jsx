import "./App.css";
import { CustomCursor } from "./Components/CustomCursor";
import { NavBar } from "./Components/NavBar";
import { Banner } from "./Components/Banner";
import { About } from "./Components/About";
import { Statement } from "./Components/Statement";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <NavBar />
      <Banner />
      <About />
      <Statement />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
