import '@/styles/index.scss';
import { useEffect } from 'react';

const Modal = ({ onClose, card }) => {
    if (!card) return null;

    const {
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
    } = card;

    const tagsArray = tag ? tag.split(',').map((tag) => tag.trim()) : [];

    const tagsList =
        tagsArray.length > 0 ? (
            <ul className="modal__list">
                {tagsArray.map((item, index) => (
                    <li key={index} className="modal__item">
                        <p className="modal__list navbar__nav__link">{item}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No tags available</p>
        );

    // Функції для блокування і розблокування скролу
    const lockScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const unlockScroll = () => {
        document.body.style.overflow = '';
    };
    useEffect(() => {
        lockScroll(); // Заблокувати скрол при відкритті модалки
        return () => {
            unlockScroll(); // Розблокувати скрол при закритті модалки
        };
    }, []);

    return (
        <div className="modal">
            <div className="modal__content">
                <img src={img} alt={title} />

                <div className="modal__column">
                    <span className="modal__close" onClick={onClose}>
                        -
                    </span>
                    <h2 className="modal__title card__title">{title}</h2>
                    <p className="modal__desc card__desc">{subTitle}</p>

                    <div className="modal__row-border">
                        <p className="card__number">ID: </p>
                        <p className="navbar__nav__link">{id}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number">Year: </p>
                        <p className="navbar__nav__link">{year}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number">Design: </p>
                        <p className="navbar__nav__link">{design}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number">Role: </p>
                        <p className="navbar__nav__link">{role}</p>
                    </div>
                    <div className="modal__row-border modall__row-tag">
                        <p className="card__number">Tags:</p>
                        {tagsList}
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number">Platform: </p>
                        <p className="navbar__nav__link">{platform}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number">Type: </p>
                        <p className="navbar__nav__link">{type}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number">URL: </p>
                        <p className="navbar__nav__link">{url}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
