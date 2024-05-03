// import Navbar from "../Navbar/Navbar";

// const Header = () => {
//     return (
//         <header
//             className="h-32 max-w-full w-full px-4 sm:px-10 md:px-20 lg:px-44 flex justify-between 
//         items-center fixed top-0 left-0 right-0 bg-gray-50 bg-opacity-95 transition-all duration-300"
//         >
//             <h3 className="text-tBlue font-extrabold text-2xl">
//                 <a href="#" className="link">
//                     AO.
//                 </a>
//             </h3>
//             <Navbar />
//         </header>
//     );
// };

// export default Header;

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
