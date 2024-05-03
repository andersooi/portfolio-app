import Header from './components/Header/Header';
import About from './components/About/About';
import './App.css';

const App = () => {
  return (
    <div className='app font-poppins leading-normal'>
      <Header />

      <main className='mx-auto my-0'>
        <About />
      </main>

    </div>
  )
}

export default App;