import { useState } from 'react';
import '@/styles/index.scss';

const PortfolioCard = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleCardClick = (index) => {
        setIsExpanded(!isExpanded);
        setSelectedCardIndex(index);
    };

    return (
        <div
            id={props.id}
            className={`card ${isExpanded && selectedCardIndex === props.id ? 'expanded' : ''}`}
            onClick={() => handleCardClick(props.id)}
        >
            <h3 className="card__title">{props.title}</h3>
            <div className="card__row">
                <p className="card__desc">{props.subTitle}</p>
                <span className="card__number card__desc">{props.number}</span>
                {isExpanded && selectedCardIndex === props.id && (
                    <p className="card__desc">{props.subTitle}</p>
                )}
            </div>
            <div className="card__miniature">
                <img src={props.img} alt="" className="card__img" />
            </div>
            {isExpanded && selectedCardIndex === props.id && (
                <div className="card__expanded-content">
                    <div className="card__img"></div>
                    <div className="card__column">
                        <p>{props.title}</p>
                        <p>{props.subTitle}</p>
                        <ul className="card__list">
                            <li className="card__item">
                                <p>ID {props.id}</p>
                            </li>
                            <li className="card__item">
                                <p>YEAR {props.year}</p>
                            </li>
                            <li className="card__item">
                                <p>ROLE {props.role}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortfolioCard;
