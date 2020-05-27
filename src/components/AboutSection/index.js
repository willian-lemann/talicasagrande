import React from 'react';

import './index.css';

import {
    FiHeart,
    FiTrendingUp,
    FiShield,
    FiAnchor

} from 'react-icons/fi';

const AboutSection = () => {
    return (
        <section className="about-container">
            <section className="title-content">
                <strong>Empresa</strong>
                <hr className="divisorAboutSection" />
                <p>Há 25 anos no ramo, construindo sonhos,
                a Talicasa casas nasceu da parceria de dois escritórios
                comerciais especializados em vendas de casas pré-fabricadas.
                Hoje a Talicasa trabalha com casas de Madeira e Alverania.
                Nós não apenas construimos casas, mas gostamos de enfatizar
                que projetamos idieas, construimos sonhos e realizamos os planos de
            muitas famílias.</p>
            </section>

            <div className="purpose-container">
                <section className="title-purpose-container">
                    <strong>Nosso Propósito</strong>
                    <p>Características que mostram quem somos</p>
                </section>

                <section className="purpose-content">
                    <div className="cards">
                        <FiShield className="icons" size={60} />
                        <strong>Resiliência</strong>
                        <p>Não nos conformamos com o pouco,
                        queremos satisfazer muito nosso cliente e
                        sabemos que devemos nos adaptar a cada situação,
                        evoluindo em todos os aspectos, na ideia, na construção do sonho
                    e na entrega dos planos realizados.</p>
                    </div>

                    <div className="cards">
                        <FiHeart className="icons" size={60} />
                        <strong>Paixão</strong>
                        <p>Encaramos cada projeto como
                        se fosse o primeiro de nossa historia, isso nos torna únicos.
                    Temos paixão naquilo que fazemos.</p>
                    </div>

                    <div className="cards">
                        <FiTrendingUp className="icons" size={60} />
                        <strong>Qualidade</strong>
                        <p>Nos preocupamos com a entrega,
                        nos empenhamos em sempre priorizar o
                        tempo com que as etapas são realizadas
                        sempre se preocupando prestar um serviço
                        exemplar, acreditamos que o otimo é inimigo
                        do bom e que cada etapa deve ser respeitada
                    para que o todo seja entregue de forma eficaz.</p>
                    </div>

                    <div className="cards">
                        <FiAnchor className="icons" size={60} />
                        <strong>Integridade</strong>
                        <p>A Talicasa não trabalha de forma injusta,
                        sabemos que estamos trabalhando com os planos
                        e sonhos de famílias, por isso não pode faltar
                        a nossa integridade com o serviço prestado,
                    do inicio ao fim sempre com a direção de Deus. </p>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default AboutSection;