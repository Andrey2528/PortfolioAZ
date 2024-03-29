import { useTranslation } from 'react-i18next';
import socailLinks from '@/db/socialLinks';

const InfoPage = () => {
    const socialLinksDb = socailLinks.map((item, index) => {
        return (
            <li className="info__item">
                <p className="info__text" key={item.id}>
                    {item.title}
                    {item.link}
                </p>
            </li>
        );
    });

    const { t } = useTranslation();
    return (
        <section className="info">
            <div className="container">
                <div className="info__row">
                    <div className="info__column">
                        <h6 className="info__title">
                            {t('InfoPage.titleLocation')}
                        </h6>
                        <p className="info__text">{t('InfoPage.location')}</p>
                    </div>
                    <div className="info__column">
                        <h6 className="info__title">
                            {t('InfoPage.titleContact')}
                        </h6>
                        <ul className="info__list">{socialLinksDb}</ul>
                    </div>
                    <div className="info__column">
                        <p className="info__subtitle">
                            {t('InfoPage.description1')}
                        </p>
                        <p className="info__description info__text">
                            {t('InfoPage.description2')}
                        </p>
                        <p className="info__description info__text">
                            {t('InfoPage.description2')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InfoPage;
