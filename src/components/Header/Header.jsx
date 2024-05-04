import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
   <header className='header center fixed top-0 left-0 right-0 mx-auto my-0 justify-between z-50 opacity-95 rounded-lg'>
        <h3>
            <a href="#" className='link font-bold'>AO.</a>
        </h3>
        <Navbar />
   </header>
  );
};

export default Header;
