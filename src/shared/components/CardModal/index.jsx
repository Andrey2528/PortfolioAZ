import '@/styles/index.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Modal = ({ onClose, card }) => {
    const { t } = useTranslation();
    if (!card) return null;

    const {
        id,
        title,
        subTitle,
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
    const roleArray = role ? role.split(',').map((role) => role.trim()) : [];

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
            <p></p>
        );

    const roleList =
        roleArray.length > 0 ? (
            <ul className="modal__list">
                {roleArray.map((item, index) => (
                    <li key={index} className="modal__item">
                        <p className="modal__list navbar__nav__link">{item}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p></p>
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
                        ×
                    </span>
                    <h2 className="modal__title card__title">{title}</h2>
                    <p className="modal__desc card__desc">{subTitle}</p>

                    <div className="modal__row-border">
                        <p className="card__number card__desc">
                            {t('modal.ID')}:{' '}
                        </p>
                        <p className="navbar__nav__link">{id}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number card__desc">
                            {t('modal.Year')}:{' '}
                        </p>
                        <p className="navbar__nav__link">{year}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number card__desc">
                            {t('modal.Design')}:{' '}
                        </p>
                        <p className="navbar__nav__link">{design}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number card__desc">
                            {t('modal.Role')}:{' '}
                        </p>
                        {roleList}
                    </div>
                    <div className="modal__row-border modall__row-tag">
                        <p className="card__number card__desc">
                            {t('modal.Tags')}:
                        </p>
                        {tagsList}
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number card__desc">
                            {t('modal.Platform')}:{' '}
                        </p>
                        <p className="navbar__nav__link">{platform}</p>
                    </div>
                    <div className="modal__row-border">
                        <p className="card__number card__desc">
                            {t('modal.Type')}:{' '}
                        </p>
                        <p className="navbar__nav__link">{type}</p>
                    </div>
                    {url && (
                        <div className="modal__row-border">
                            <p className="card__number card__desc">
                                {t('modal.URL')}:{' '}
                            </p>
                            <p className="navbar__nav__link">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="navbar__nav__link"
                                >
                                    {url}
                                </a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
