import Header from './components/Header/Header';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import './App.css';

const App = () => {
  return (
    <div className='app font-poppins leading-normal'>
      <Header />

      <main className='mx-auto my-0 p-4'>
        <About />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
      </main>

    </div>
  )
}

export default App;