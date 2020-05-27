import React from 'react';

import './index.css';

import backgroundImage from '../../assets/fundoheader-min.jpg'

const ProductsSection = () => {
    return (
        <section className="products-container">
            <strong>Modelos de Casas</strong>
            <hr className="divisorProductsSection"/>
            <div className="products-grid">
                <ul>
                    <li><img src={backgroundImage} alt="" /> </li>
                    <li><img src={backgroundImage} alt="" /> </li>
                    <li><img src={backgroundImage} alt="" /> </li>
                    <li><img src={backgroundImage} alt="" /> </li>
                    <li><img src={backgroundImage} alt="" /> </li>
                    <li><img src={backgroundImage} alt="" /> </li>
                    <li><img src={backgroundImage} alt="" /> </li>
                    <li><img src={backgroundImage} alt="" /> </li>
                </ul>
            </div>
        </section>
    );
}

export default ProductsSection;