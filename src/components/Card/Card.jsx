const Card = ({ title, description }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`card ${isExpanded ? 'expanded' : ''}`}
            onClick={handleCardClick}
        >
            <h3>{title}</h3>
            {isExpanded && <p>{description}</p>}
        </div>
    );
};

export default Card;
