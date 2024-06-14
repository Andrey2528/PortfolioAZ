import { useTranslation } from 'react-i18next';
import '@/styles/partials/_footer.scss';
import { socialImg } from '@/api/db/socialImg';
import { v4 as uuidv4 } from 'uuid';
import socialLinks from '@/api/db/socialLinks';

const Footer = () => {
    const socialLinksDb = socialLinks.map((item) => ({ link: item.link }));

    const socialImgDb = socialImg.map((item, index) => (
        <li key={uuidv4()} className="footer__item">
            <div className="footer__img-wrapper">
                <a
                    href={socialLinksDb[index].link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={item.img} alt="" />
                </a>
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
