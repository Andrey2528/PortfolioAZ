import PortfolioCard from './PortfolioCard';
import { portfolioCard } from '@/db/portfolioCard';

const CardWrapper = () => {
    const CardFromDb = portfolioCard.map((item, index) => {
        const id = index + 1;
        return (
            <PortfolioCard
                key={id}
                id={`${id}`}
                title={item.title}
                subTitle={item.subTitle}
                number={`${id}`}
                img={item.img}
                year={item.year}
                design={item.design}
                role={item.role}
                tag={item.tag}
                platform={item.platform}
                type={item.type}
                url={item.url}
            />
        );
    });

    return (
        <div className="container">
            <div className="card__wrapper">{CardFromDb}</div>
        </div>
    );
};

export default CardWrapper;
