import React from 'react';

import { Link, animateScroll } from 'react-scroll';
import Logo from '../../assets/logo.png';

import './index.css';


const Header = () => {
    const goToCart = () => {

    };

    return (
        <header className="header-container">
            <nav>
                <div className="img-container">
                    <img src={Logo} alt="Logotype" />
                </div>
                <ul>
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

