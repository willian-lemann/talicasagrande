import React from 'react';

import './index.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


import BackgroundSection from '../../components/BackgroundSection';
import ProductsSection from '../../components/ProductsSection';
import AboutSection from '../../components/AboutSection';
import ContactSection from '../../components/ContactSection';
import MapContainer from '../../components/MapContainer';

function Dashboard() {

    return (
        <div className="dashboard-container">
            <Header />
            <BackgroundSection />
            <ProductsSection />
            <AboutSection />
            <ContactSection />
            <MapContainer />
            <Footer />
        </div >
    );
}

export default Dashboard;
