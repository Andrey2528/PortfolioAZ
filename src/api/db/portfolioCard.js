import i18next from '@/i18n';
import img1 from '@/assets/images/portfolioIMG/portfolioImg1.png'; //8
import img3 from '@/assets/images/portfolioIMG/portfolioImg3.png'; //7
import img4 from '@/assets/images/portfolioIMG/portfolioImg4.png'; //1
import img5 from '@/assets/images/portfolioIMG/portfolioImg5.png'; //3
import img6 from '@/assets/images/portfolioIMG/portfolioImg6.png'; //6
import img7 from '@/assets/images/portfolioIMG/portfolioImg7.png'; //5
import img8 from '@/assets/images/portfolioIMG/portfolioImg8.png'; //2
import img9 from '@/assets/images/portfolioIMG/portfolioImg9.png'; //6

export const portfolioCard = [
    {
        id: 8,
        title: i18next.t('portfolioCard.title8'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2023',
        design: '-',
        role: i18next.t('portfolioCard.role1'),
        tag:
            'HTML' +
            ',' +
            'CSS' +
            ',' +
            'JS' +
            ',' +
            'jQuery' +
            ',' +
            'BEM' +
            ',' +
            'SEO',
        platform: i18next.t('portfolioCard.platform1'),
        type: i18next.t('portfolioCard.type3'),
        url: 'http://sketch2site.com',
        img: img1,
    },

    {
        id: 7,
        title:
            i18next.t('portfolioCard.title7') +
            ' ' +
            i18next.t('portfolioCard.old'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2023',
        design: '-',
        role:
            i18next.t('portfolioCard.role1') +
            ',' +
            i18next.t('portfolioCard.role2'),
        tag:
            'HTML' +
            ',' +
            'CSS' +
            ',' +
            'PHP' +
            ',' +
            'WordPress' +
            ',' +
            'JS' +
            ',' +
            'jQuery' +
            ',' +
            'BEM' +
            ',' +
            'SEO',
        platform: i18next.t('portfolioCard.platform2'),
        type: i18next.t('portfolioCard.type1'),
        url: 'http://batumikarting.ge',
        img: img3,
    },
    {
        id: 6,
        title: i18next.t('portfolioCard.title6'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2022',
        design: '-',
        role:
            i18next.t('portfolioCard.role1') +
            ',' +
            i18next.t('portfolioCard.role3') +
            ',' +
            i18next.t('portfolioCard.role4'),
        tag:
            'HTML' + ',' + 'SCSS' + ',' + 'JS' + ',' + 'React.js' + ',' + 'BEM',
        platform: i18next.t('portfolioCard.platform2'),
        type: i18next.t('portfolioCard.type2'),
        img: img9,
    },
    {
        id: 5,
        title: i18next.t('portfolioCard.title5'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2022',
        design: '-',
        role:
            i18next.t('portfolioCard.role1') +
            ',' +
            i18next.t('portfolioCard.role3') +
            ',' +
            i18next.t('portfolioCard.role4'),
        tag:
            'HTML' +
            ',' +
            'CSS' +
            ',' +
            'PHP' +
            ',' +
            'WordPress' +
            ',' +
            'JS' +
            ',' +
            'jQuery' +
            ',' +
            'BEM' +
            ',' +
            'SEO',
        platform: i18next.t('portfolioCard.platform2'),
        type: i18next.t('portfolioCard.type3'),
        img: img7,
    },
    {
        id: 4,
        title: i18next.t('portfolioCard.title4'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2022',
        design: '-',
        role:
            i18next.t('portfolioCard.role1') +
            ',' +
            i18next.t('portfolioCard.role3'),
        tag: 'HTML' + ',' + 'CSS' + ',' + 'JS' + ',' + 'jQuery' + ',' + 'BEM',
        platform: i18next.t('portfolioCard.platform2'),
        type: i18next.t('portfolioCard.type2'),
        img: img6,
    },
    {
        id: 3,
        title: i18next.t('portfolioCard.title3'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2022',
        design: '-',
        role:
            i18next.t('portfolioCard.role1') +
            ',' +
            i18next.t('portfolioCard.role3') +
            ',' +
            i18next.t('portfolioCard.role4'),
        tag:
            'HTML' +
            ',' +
            'CSS' +
            ',' +
            'JS' +
            ',' +
            'jQuery' +
            ',' +
            'BEM' +
            ',' +
            'SEO',
        platform: i18next.t('portfolioCard.platform2'),
        type: i18next.t('portfolioCard.type3'),
        img: img5,
    },
    {
        id: 2,
        title: i18next.t('portfolioCard.title2'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2019',
        design: '-',
        role: i18next.t('portfolioCard.role1'),
        tag: 'HTML' + ',' + 'CSS' + ',' + 'JS' + ',' + 'jQuery' + ',' + 'BEM',
        platform: i18next.t('portfolioCard.platform2'),
        type: i18next.t('portfolioCard.type2'),
        img: img8,
    },
    {
        id: 1,
        title: i18next.t('portfolioCard.title1'),
        subTitle: i18next.t('portfolioCard.subTitle'),
        year: '2019',
        design: '-',
        role: i18next.t('portfolioCard.role1'),
        tag: 'HTML' + ',' + 'CSS',
        platform: i18next.t('portfolioCard.platform1'),
        type: i18next.t('portfolioCard.type2'),
        img: img4,
    },
];

export default portfolioCard;
