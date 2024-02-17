import '@/styles/index.scss';

const PortfolioCard = ({
    id,
    title,
    subTitle,
    number,
    img,
    year,
    role,
    design,
    tag,
    platform,
    type,
    url,
    onClick,
}) => {
    const handleCardClick = () => {
        onClick &&
            onClick({
                id,
                title,
                subTitle,
                number,
                img,
                year,
                role,
                design,
                tag,
                platform,
                type,
                url,
            });
    };

    return (
        <div id={id} className={`card`} onClick={handleCardClick}>
            <h3 className="card__title">{title}</h3>
            <div className="card__row">
                <p className="card__desc">{subTitle}</p>
                <span className="card__number card__desc">{number}</span>
            </div>
            <div className="card__miniature">
                <img src={img} alt="" className="card__img" />
            </div>
        </div>
    );
};

export default PortfolioCard;
