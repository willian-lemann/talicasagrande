import React from 'react';

import './index.css';
import whatsappLogo from '../../assets/icons/whatsapp-logo.png';

import {
    FiPhone,
    FiMail,
    FiMapPin
} from 'react-icons/fi';

function ContactSection() {
    return (
        <section className="contact-container">
            <div className="title-content">
                <strong>Contato</strong>
                <hr className="divisorContactSection" />
            </div>
            <section className="contact-content">

                <div className="icons-container">
                    <section className="contact-icons">
                        <FiMapPin size={50} />
                    </section>
                    <section className="icons-content">
                        <p>Rua Martinho Lutero, 1390, Formoza - Alvorada RS</p>
                        <p>Av. Delmar Rocha Barbosa, 261, Parque Santa Fé - Porto Alegre RS</p>
                    </section>
                </div>

                <div className="icons-container">
                    <section className="contact-icons">
                        <FiPhone size={40} />
                    </section>
                    <section className="icons-content">
                        <p>51 3447-6222</p>
                        <div className="icon-whatsapp">
                            <p>51 99690-8855</p> <img src={whatsappLogo} />
                        </div>
                        <p>51 99723-0445</p>
                    </section>
                </div>

                <div className="icons-container">
                    <section className="contact-icons">
                        <FiMail size={40} />
                    </section>
                    <section className="icons-content">
                        <p>jucicasaspre@hotmail.com</p>
                        <p>jlcorretora@hotmail.com</p>
                    </section>
                </div>
            </section>
        </section>
    );
}

export default ContactSection;