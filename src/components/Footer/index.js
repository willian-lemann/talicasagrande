import React from 'react';

import './index.css';

import bancoBrasilLogo from '../../assets/partners/banco-brasil.jpg';
import caixaLogo from '../../assets/partners/caixa.jpg';
import banrisulogo from '../../assets/partners/banrisul.jpg';

import {
    FiLinkedin,
    FiInstagram,
    FiFacebook
} from 'react-icons/fi';

import { FaHeart } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer-container" >
            <div className="top-container">
                <section className="social-container">
                    <span>Sigam-nos em nossas Redes Sociais</span>
                    <ul>
                        <li> <FiInstagram onClick={() => window.open('https://instagram.com/tali.casa')} size={70} color='#7159c1' /></li>
                        <li> <FiFacebook onClick={() => window.open('https://www.facebook.com/tali.casa')} size={70} color='#7159c1' /></li>
                    </ul>
                </section>

                <section className="partners-container">
                    <span>Bancos parceiros</span>
                    <ul>
                        <li>
                            <img src={bancoBrasilLogo} />
                        </li>
                        <li>
                            <img src={caixaLogo} />
                        </li>
                        <li>
                            <img src={banrisulogo} />
                        </li>
                    </ul>
                </section>
            </div>

            <section className="madeBy-container">
                <span>
                    Made with love
                    <FaHeart size={20} color="red" className="heartIcon" />
                    by
                    <a onClick={() => window.open('https://www.linkedin.com/in/willian-lemann')}>Willian Lemann</a>
                </span>
            </section>
        </footer >
    );
}

export default Footer;
