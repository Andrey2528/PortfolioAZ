import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import Modal from '@/shared/components/CardModal';
import { portfolioCard } from '@/api/db/portfolioCard';

const CardWrapper = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const openModal = (card) => {
        setSelectedCard(card);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                        number={item.id + 1}
                        img={item.img}
                        openModal={() => openModal(item)}
                    />
                ))}
            </div>
            {isModalOpen && <Modal onClose={closeModal} card={selectedCard} />}
        </div>
    );
};

export default CardWrapper;
