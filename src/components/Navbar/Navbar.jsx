// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <ul className="flex font-medium mr-6 justify-end text-gray-500">
//                 <li className="ml-6">
//                     <a
//                         href="#projects"
//                         className="link relative pb-1 hover:text-tBlue"
//                     >
//                         Projects
//                     </a>
//                 </li>
//                 <li className="ml-6">
//                     <a
//                         href="#skills"
//                         className="link relative pb-1 hover:text-tBlue"
//                     >
//                         Skills
//                     </a>
//                 </li>
//                 <li className="ml-6">
//                     <a
//                         href="#contact"
//                         className="link relative pb-1 hover:text-tBlue"
//                     >
//                         Contact
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//     );
// };

// export default Navbar;

import { useState } from 'react';
import { MenuRounded } from '@mui/icons-material';
import { CloseRounded } from '@mui/icons-material';
import './Navbar.css'

const Navbar = () => {
    const [showNavlist, setShowNavlist] = useState(false);

    const toggleNavlist = () => setShowNavlist(!showNavlist);

    return (
        <nav className="center nav">
            <ul className={`nav__list ${showNavlist ? 'flex' : null}`}>
                <li className="nav__list-item ml-6 flex">
                    <a href="#projects" onClick={toggleNavlist} className="link link--nav">Projects</a>
                </li>
                <li className="nav__list-item ml-6 flex">
                    <a href="#skills" onClick={toggleNavlist} className="link link--nav">Skills</a>
                </li>
                <li className="nav__list-item ml-6 flex">
                    <a href="#contact" onClick={toggleNavlist} className="link link--nav">Contact</a>
                </li>
            </ul>
            <button type='button' onClick={toggleNavlist} className='btn btn--icon nav__hamburger hidden' aria-label='toggle navigation'>
                {showNavlist ? <CloseRounded /> : <MenuRounded />}
            </button>
        </nav>
    );
};

export default Navbar;