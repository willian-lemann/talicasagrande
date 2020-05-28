import React from 'react';

import './index.css';

import foto1 from '../../assets/foto1.jpeg';

const ProductsSection = () => {
    return (
        <section className="products-container">
            <strong>Modelos de Casas</strong>
            <hr className="divisorProductsSection"/>
            <div className="products-grid">
                <ul>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                    <li><img src={foto1} alt="" /> </li>
                </ul>
            </div>
        </section>
    );
}

export default ProductsSection;