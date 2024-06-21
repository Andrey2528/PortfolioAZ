import { useTranslation } from 'react-i18next';
import socialLinks from '@/api/db/socialLinks';

const InfoPage = () => {
    const { t } = useTranslation();
    const socialLinksDb = socialLinks.map((item, index) => {
        return (
            <li className="info__item">
                <a href={item.link} className="info__text" key={item.id}>
                    {item.title}
                </a>
            </li>
        );
    });

    return (
        <section className="info">
            <div className="container">
                <div className="info__row">
                    <div className="info__column">
                        <h6 className="info__title">
                            {t('InfoPage.titleLocation')}
                        </h6>
                        <p className="info__text info__description">
                            {t('InfoPage.location1')}
                        </p>
                        <p className="info__text">{t('InfoPage.location2')}</p>
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
                    <div className="info__column">
                        <h6 className="info__title">
                            {t('InfoPage.titleContact')}
                        </h6>
                        <ul className="info__list">{socialLinksDb}</ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InfoPage;
