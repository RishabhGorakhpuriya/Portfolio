import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Project from './Component/Project/Project';
import Skill from './Component/Skill/Skill';
import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
