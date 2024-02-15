import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        lng: Cookies.get("language") || "en",
        fallbackLng: ["en", "uk", "ru",],
        detection: { order: ["cookie"], cache: ["cookie"] },
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    navMenu: {
                        "logo": "Andrey Zhukov",
                        "link1": "Front-end\n" +
                            "Developer",
                        "link2": "Information",
                        "link3": "Projects",
                        "link4": "English",
                        "link5": "Українська",
                        "link6": "руский",
                    },
                    theme: {
                        "dark" : "Dark mode",
                        "light" : "Light mode",
                    },
                    portfolioCard: {
                        "title1": "Sketch2Site Development",
                        "title2": "Sketch2Site Development",
                        "title3": "Batumi Racing Club",
                        "title4": "Denis Portfolio",
                        "title5": "Fair Partner",
                        "title6": "People Tobacco",
                        "title7": "Meat Hammer Site",
                        "title8": "Konstruct",
                        "title9": "Manipura",
                        "title10": "Sketch2Site Development",
                        "subTitle": "Web-site",
                        "role1": "Developer",
                        "role2": "Designer",
                        "role3": "Project manager",
                        "role4": "Team lead",
                        "platform1": "Static site",
                        "platform2": "Adaptive site",
                        "type1": "Market place",
                        "type2": "Landing",
                        "type3": "Multi page",
                    },
                    InfoPage:{
                        "titleLocation": "Локація",
                        "titleContact": "Контаки",
                        "location": "Івано-Франківськ, Україна",
                        "description1" : "Я спеціалізуюся на front-end розробці. Будучи незалежним, я працюю з малими та великими компаніями, стартапами, дизайн-студіями та творчими людьми по всьому світу.",
                        "description2" : "Маючи понад 3 роки досвіду, я брав участь у створенні цифрового досвіду, який захоплює та захоплює. Я зосереджуюсь на взаємодії та пропоную ретельний підхід до розробки, орієнтованої на деталі. Мені щиро подобається втілювати ідеї в життя, перетворюючи їх на індивідуальні, зручні та естетично привабливі веб-сайти.",
                        "description3" : "Але, перш за все, моєю найбільшою пристрастю є формування міцних робочих стосунків і справжніх зв’язків з іншими однодумцями, творчими людьми."
                    }
                },
            },
            uk: {
                translation: {
                    navMenu: {
                        "logo": "Андрій Жуков",
                        "link1": "Фронт-енд\n" +
                            "Розробник",
                        "link2": "Інформація",
                        "link3": "Проєкти",
                        "link4": "English",
                        "link5": "Українська",
                        "link6": "руский",
                    },
                    theme: {
                        "dark" : "Темний режим",
                        "light" : "Світлий режим",
                    },
                    portfolioCard: {
                        "title1": "Sketch2Site Development",
                        "title2": "Sketch2Site Development",
                        "title3": "Batumi Racing Club",
                        "title4": "Denis Portfolio",
                        "title5": "Fair Partner",
                        "title6": "People Tobacco",
                        "title7": "Meat Hammer Site",
                        "title8": "Konstruct",
                        "title9": "Manipura",
                        "title10": "Sketch2Site Development",
                        "subTitle": "Веб-сайт",
                        "role1": "Розробник",
                        "role2": "Дизайнер",
                        "role3": "Менеджер проекту",
                        "role4": "Керівник команди",
                        "platform1": "Статичний сайт",
                        "platform2": "Адаптивний сайт",
                        "type1": "Магазин",
                        "type2": "Односторінковий сайт",
                        "type3": "Багато сторінковий сайт",
                    },
                    InfoPage:{
                        "titleLocation": "Location",
                        "titleContact": "Contact",
                        "location": "Ivano-Frankivsk, Ukraine",
                        "description1" : "I specialise in front-end development. Being independent, I work with small to large companies, startups, design studios, and creative individuals globally.",
                        "description2" : "With 3+ years of dedicated experience, I have been involved with crafting digital experiences that captivate and engage. I focus on interaction and offer a meticulous approach to detail-oriented development. I genuinely relish bringing ideas to life, transforming them into bespoke, user-friendly and aesthetically pleasing websites.",
                        "description3" : "But above all, my biggest passion is forming strong working relationships and genuine bonds with other like-minded, creative people."
                    }
                },
            },
            ru: {
                translation: {
                    navMenu: {
                        "logo": "Андрей Жуков",
                        "link1": "Фронт-енд\n" +
                            "Разработчик",
                        "link2": "Информация",
                        "link3": "Проекти",
                        "link4": "English",
                        "link5": "Українська",
                        "link6": "руский",
                        "link7": "Темный режим",
                        "link8": "Светлый режим",
                    },
                    theme: {
                        "dark" : "Темный режим",
                        "light" : "Светлый режим",
                    },
                    portfolioCard: {
                        "title1": "Sketch2Site Development",
                        "title2": "Sketch2Site Development",
                        "title3": "Batumi Racing Club",
                        "title4": "Denis Portfolio",
                        "title5": "Fair Partner",
                        "title6": "People Tobacco",
                        "title7": "Meat Hammer Site",
                        "title8": "Konstruct",
                        "title9": "Manipura",
                        "title10": "Sketch2Site Development",
                        "subTitle": "Веб-сайт",
                        "role1": "Разработчик",
                        "role2": "Дизайнер",
                        "role3": "Менеджер проекту",
                        "role4": "Руководитель команды",
                        "platform1": "Статичный сайт",
                        "platform2": "Адаптивный сайт",
                        "type1": "Магазин",
                        "type2": "Одностраничный сайт",
                        "type3": "Многостраничный сайт",
                    },
                    InfoPage:{
                        "titleLocation": "Локация",
                        "titleContact": "Контакты",
                        "location": "Ивано-Франковск, Украина",
                        "description1" : "Я специализируюсь на фронтенд-разработке. Будучи независимым, я работаю с небольшими и крупными компаниями, стартапами, дизайн-студиями и творческими личностями по всему миру..",
                        "description2" : "Имея более чем 3-летний опыт работы, я занимаюсь созданием цифровых впечатлений, которые увлекают и привлекают. Я фокусируюсь на взаимодействии и предлагаю тщательный подход к разработке, ориентированной на детали. Мне искренне нравится воплощать идеи в жизнь, превращая их в индивидуальные, удобные и эстетически приятные веб-сайты.",
                        "description3" : "Но, прежде всего, моей самой большой страстью является формирование прочных рабочих отношений и подлинных связей с другими творческими людьми-единомышленниками.."
                    }
                },
            },
        },
    });

export default i18n;
