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
                    <a href="#experiences" onClick={toggleNavlist} className="link link--nav">Experiences</a>
                </li>
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