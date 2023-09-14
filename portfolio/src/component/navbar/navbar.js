import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo_mine.png';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import Menu from '../../assets/menu.png';


const Navbar = () => {
    const [showMenu, setShowmenu] = useState(false)
    return (
        <nav className='navbar'>
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="contactMe" className="desktopMenuImg" />
                Contact Me
            </button>


            <img src={Menu} alt="Menu" className='mobmenu' onClick={()=>setShowmenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowmenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowmenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowmenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowmenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}  className="listItem" onClick={()=>setShowmenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar