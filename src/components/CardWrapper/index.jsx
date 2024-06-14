import PortfolioCard from './PortfolioCard';
import { portfolioCard } from '@/api/db/portfolioCard';

const CardWrapper = () => {
    return (
        <div className="container">
            <div className="card__list">
                {portfolioCard.map((item) => (
                    <PortfolioCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        subTitle={item.subTitle}
                        number={item.id + 1}
                        img={item.img}
                        year={item.year}
                        design={item.design}
                        role={item.role}
                        tag={item.tag}
                        platform={item.platform}
                        type={item.type}
                        url={item.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardWrapper;
