import React from 'react';

import './index.css';


import backgroundImage from '../../assets/fundoheader-min.jpg'
import talicasaLogo from '../../assets/talicasa-logo.jpeg';

const BackgroundSection = () => {

    return (
        <section className="background-container">
            <img className="backgroundImage" src={backgroundImage} alt="main-logo" />
            <img src={talicasaLogo} className="backgroundWaterMark" />
        </section>
    );
}

export default BackgroundSection;