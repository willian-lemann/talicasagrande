import React, { useState } from 'react';

import { Link, animateScroll } from 'react-scroll';
import Logo from '../../assets/logo.png';

import './index.css';

import Menu from 'react-hamburger-menu';


const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleMenuClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <header className="header-container">
            <nav>
                <div className="img-container">
                    <Menu
                        className="menu"
                        isOpen={isClicked}
                        menuClicked={() => handleMenuClick()}
                        rotate={0}
                        animationDuration={0.4} />
                    <img src={Logo} alt="Logotype" />
                </div>
                <ul className={isClicked && 'hideMenu'}>
                    <Link to="about-container" smooth={true} className="navlist"> Empresa</Link>
                    <Link className="navlist"> Projetos</Link>
                    <Link to="products-container" smooth={true} className="navlist"> Modelos de Casas</Link>
                    <Link to="contact-container" smooth={true} className="navlist"> Contato</Link>
                </ul>
            </nav>
        </header>
    );
};
//https://api.whatsapp.com/send?phone=5551993562223&text=
//tel: 5133195251

//https://waze.com/ul

export default Header;

