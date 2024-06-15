import { useState } from 'react';
import Modal from '@/shared/components/CardModal';
import PortfolioCard from './PortfolioCard';
import { portfolioCard } from '@/api/db/portfolioCard';

const CardWrapper = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const openModal = (card) => {
        setSelectedCard(card);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="container">
            <div className="card__list">
                {portfolioCard.map((item) => (
                    <PortfolioCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        subTitle={item.subTitle}
                        number={item.id}
                        img={item.img}
                        year={item.year}
                        design={item.design}
                        role={item.role}
                        tag={item.tag}
                        platform={item.platform}
                        type={item.type}
                        url={item.url}
                        openModal={() => openModal(item)}
                    />
                ))}
            </div>
            {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}
        </div>
    );
};

export default CardWrapper;
