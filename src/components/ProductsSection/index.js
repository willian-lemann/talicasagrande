import React from 'react';

import './index.css';

import foto2 from '../../assets/foto2.jpg';
import foto3 from '../../assets/foto3.jpg';
import foto4 from '../../assets/foto4.jpg';
import foto5 from '../../assets/foto5.jpg';
import foto6 from '../../assets/foto6.jpg';
import foto7 from '../../assets/foto7.jpg';

const ProductsSection = () => {
    return (
        <section className="products-container">
            <strong>Modelos de Casas</strong>
            <hr className="divisorProductsSection" />
            <div className="products-grid">
                <ul>
                    <li><img src={foto2} alt="" /> </li>
                    <li><img src={foto3} alt="" /> </li>
                    <li><img src={foto4} alt="" /> </li>
                    <li><img src={foto5} alt="" /> </li>
                    <li><img src={foto6} alt="" /> </li>
                    <li><img src={foto7} alt="" /> </li>
                </ul>
            </div>
        </section>
    );
}

export default ProductsSection;