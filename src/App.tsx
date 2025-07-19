import "./App.scss";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
      </main>

      <footer>
        {/* <Footer /> */}
      </footer>
    </div>

  );
}

export default App;
