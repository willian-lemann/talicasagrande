import React from 'react';

import './index.css';

import bancoBrasilLogo from '../../assets/partners/banco-brasil.jpg';
import caixaLogo from '../../assets/partners/caixa.jpg';
import banrisulogo from '../../assets/partners/banrisul.jpg';

import {
    FiHeart,
    FiLinkedin,
    FiInstagram,
    FiFacebook
} from 'react-icons/fi';


const Footer = () => {
    return (
        <footer className="footer-container" >

            <div className="top-footer-container">
                <section className="madeBy-container">
                    <section className="social-container">
                        <span>Sigam-nos em nossas Redes Sociais</span>
                        <div className="social-content">
                            <ul>
                                <li> <FiInstagram onClick={() => window.open('https://instagram.com/tali.casa')} size={50} color='#7159c1' /></li>
                                <li> <FiFacebook onClick={() => window.open('https://www.facebook.com/tali.casa')} size={50} color='#7159c1' /></li>
                            </ul>
                        </div>
                    </section>
                </section>

                <section className="partners-container">
                    <span>Bancos parceiros</span>
                    <div className="partners-content">
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
                    </div>
                </section>
            </div>

            <section className="bottom-footer-container">
                <span>Made with love   <FiHeart size={20} color="red" />  by Willian Lemann
                <FiLinkedin onClick={() => window.open('https://www.linkedin.com/in/willian-lemann')} size={20} color="white" />
                </span>
            </section>
        </footer >
    );
}

export default Footer;
