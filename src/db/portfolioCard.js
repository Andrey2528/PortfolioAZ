import i18next from '@/i18n';
import img1 from '@/assets/portfolioIMG/portfolioImg1.png';
import img2 from '@/assets/portfolioIMG/portfolioImg2.png';
import img3 from '@/assets/portfolioIMG/portfolioImg3.png';
import img4 from '@/assets/portfolioIMG/portfolioImg4.png';
import img5 from '@/assets/portfolioIMG/portfolioImg5.png';
import img6 from '@/assets/portfolioIMG/portfolioImg6.png';
import img7 from '@/assets/portfolioIMG/portfolioImg7.png';
import img8 from '@/assets/portfolioIMG/portfolioImg8.png';
import img9 from '@/assets/portfolioIMG/portfolioImg9.png';
import img10 from '@/assets/portfolioIMG/portfolioImg10.png';

export const portfolioCard = [
    {
        id: 10,
        title: i18next.t('portfolioCard.title10'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img10,
    },
    {
        id: 9,
        title: i18next.t('portfolioCard.title9'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img9,
    },
    {
        id: 8,
        title: i18next.t('portfolioCard.title8'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img8,
    },
    {
        id: 7,
        title: i18next.t('portfolioCard.title7'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img7,
    },
    {
        id: 6,
        title: i18next.t('portfolioCard.title6'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img6,
    },
    {
        id: 5,
        title: i18next.t('portfolioCard.title5'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img5,
    },
    {
        id: 4,
        title: i18next.t('portfolioCard.title4'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img4,
    },
    {
        id: 3,
        title: i18next.t('portfolioCard.title3'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img3,
    },
    {
        id: 2,
        title: i18next.t('portfolioCard.title2'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        img: img2,
    },
    {
        id: 1,
        title: i18next.t('portfolioCard.title1'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2023',
        design: '-',
        role: i18next.t('portfolioCard.role1'),
        tag: 'HTML, CSS, SCSS, PHP, JS, jQuery, BEM methodology, SEO optimization and customization, Sending messages from the form in Telegram and to e-mail',
        platform: i18next.t('portfolioCard.platform1'),
        type: i18next.t('portfolioCard.type3'),
        url: 'http://sketch2site.com',
        img: img1,
    },
];

export default portfolioCard;
