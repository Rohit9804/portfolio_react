import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Resume from './components/resume/resume';
import Portfolio from './components/portfolio/portfolio';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contacts/contact';

function App() {
  return (
    <>
    <Sidebar />
    <main className="main">
     <Home />
     <About />
     <Resume />
     <Portfolio />
     <Contact />
    </main>
    </>
  );
}

export default App;
