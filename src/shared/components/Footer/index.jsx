import { useTranslation } from 'react-i18next';
import '@/styles/partials/_footer.scss';
import { socialImg } from '@/db/socialImg';
import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
    const socialImgDb = socialImg.map((item) => (
        <li key={uuidv4()} className="footer__item">
            <div className="footer__img-wrapper">
                <img src={item.img} alt="" />
            </div>
        </li>
    ));

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__text">{t('navMenu.logo')}</div>
                    <a
                        href="mailto:Zhukovandrey02@gmail.com"
                        className="footer__mail footer__text"
                    >
                        Zhukovandrey02@gmail.com
                    </a>
                    <ul className="footer__list">{socialImgDb}</ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
