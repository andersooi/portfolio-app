import Header from './components/Header/Header';
import About from './components/About/About';
import Experiences from './components/Experiences/Experiences';
import './App.css';

const App = () => {
  return (
    <div className='app font-poppins leading-normal'>
      <Header />

      <main className='mx-auto my-0 p-4'>
        <About />
        <Experiences />
      </main>

    </div>
  )
}

export default App;