const CardModal = ({ isOpen, data, onClose }) => {
    return (
        <>
            {isOpen && (
                <div className="modal-overlay" onClick={onClose}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <span className="close-btn" onClick={onClose}>
                            &times;
                        </span>
                        <h2>{data.id}</h2>
                        <p>{data.title}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardModal;
