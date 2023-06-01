import "./index.css";
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Experience from './components/Experience/Experience.js';
import Project from './components/Projects/Project.js';
import Footer from './components/Footer/Footer.js';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}
