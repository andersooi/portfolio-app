import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
   <header className='header center mx-auto my-0 justify-between'>
        <h3>
            <a href="#" className='link font-bold'>AO.</a>
        </h3>
        <Navbar />
   </header>
  );
};

export default Header;
