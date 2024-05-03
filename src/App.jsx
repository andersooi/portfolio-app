// import Header from "./components/Header/Header";
// import "./App.css";

// function App() {
//     return (
//         <div className="font-poppins leading-6">
//             <Header />
//             <main className="pt-32">
//                 <h1 className="text-9xl">Hfyhfuyfufu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//                 <h1 className="text-9xl">Hu</h1>
//             </main>
//         </div>
//     );
// }

// export default App;

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