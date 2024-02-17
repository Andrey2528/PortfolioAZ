import { useState } from 'react';
import CardModal from '@/shared/components/CardModal';
import PortfolioCard from '@/components/CardWrapper/PortfolioCard';

const ModalLogic = () => {
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleElementClick = (data) => {
        setModalData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <PortfolioCard onClick={handleElementClick} />

            <CardModal
                isOpen={isModalOpen}
                data={modalData}
                onClose={closeModal}
            />
        </div>
    );
};

export default ModalLogic;
