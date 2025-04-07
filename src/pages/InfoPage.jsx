import { useTranslation } from 'react-i18next';
import socialLinks from '@/api/db/socialLinks';
import skillsListDB from '@/api/db/skillsList';

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
    const skillsList = skillsListDB.map((item, index) => {
        return (
            <li className="info__item">
                <p className="info__text info_description" key={item.id}>
                    {item.title}
                </p>
            </li>
        );
    });

    return (
        <section className="info">
            <div className="container">
                <div className="info__row">
                    <div className="info__column">
                        <h6 className="info__title">
                            {t('InfoPage.aboutTitle')}
                        </h6>
                        <p className="info__subtitle">
                            {t('InfoPage.aboutSubtitle')}
                        </p>
                        <p className="info__description info__text">
                            {t('InfoPage.aboutText')}
                        </p>
                    </div>
                    <div className="info__column">
                        <h6 className="info__title">
                            {t('InfoPage.skillsTitle')}
                        </h6>
                        <ul className="info__list">{skillsList}</ul>
                    </div>

                    <div className="info__column">
                        <h6 className="info__title">
                            {t('InfoPage.experienceTitle')}
                        </h6>
                        <ul className="info__list">
                            <li className="info__item">
                                <p className="info__description info__text">
                                    {t('InfoPage.experienceText1')}
                                </p>
                            </li>
                            <li className="info__item">
                                <p className="info__description info__text">
                                    {t('InfoPage.experienceText2')}
                                </p>
                            </li>
                            <li className="info__item">
                                <p className="info__description info__text">
                                    {t('InfoPage.experienceText3')}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default InfoPage;
