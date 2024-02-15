import { themeDB } from '@/db/theme';

const ThemeToggle = ({ setThemes, theme }) => {
    const themesList = themeDB.map((el) => (
        <div
            key={el.id}
            onClick={() => {
                setThemes(el.value);
            }}
        >
            <p
                className={`navbar__nav__link ${el.value === theme ? 'active_li' : 'navbar__nav__link'}`}
            >
                {el.title}
            </p>
        </div>
    ));

    return <div>{themesList}</div>;
};

export default ThemeToggle;
