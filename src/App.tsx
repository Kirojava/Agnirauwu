import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Committees from './components/Committees';
import Messages from './components/Messages';
import Venue from './components/Venue';
import Registration from './components/Registration';
import Contact from './components/Contact';
import MatrixRain from './components/MatrixRain';
import Navigation from './components/Navigation';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'committees', 'messages', 'venue', 'registration', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-100 bg-black">
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100"
        style={{ backgroundImage: 'url("/images/background.jpg")', backgroundAttachment: 'fixed' }}
      />
      <div className="fixed inset-0 z-0 bg-black/10" />
      <div className="relative z-10">
        <MatrixRain />
        <Navigation activeSection={activeSection} />
        <Hero />
        <About />
        <Committees />
        <Messages />
        <Venue />
        <Registration />
        <Contact />
      </div>
    </div>
  );
}

export default App;
