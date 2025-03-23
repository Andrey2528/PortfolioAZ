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
                        "link2": "Home",
                        "link3": "Information",
                        "link4": "Sertificates",
                        "link5": "English",
                        "link6": "Українська",
                        "link7": "руский",
                    },
                    theme: {
                        "dark" : "Dark mode",
                        "light" : "Light mode",
                    },
                    portfolioCard: {
                        "title1": "Denis Portfolio", //1
                        "title2": "Konstruct", //2
                        "title3": "Fair Partner", //3
                        "title4": "People Tobacco", //4
                        "title5": "Meat Hammer Site",//5
                        "title6": "Manipura", //6
                        "title7": "Batumi Racing Club", //7
                        "title8": "Sketch2Site Development", //8
                        "title8": "Konstruct",
                        "title9": "Sers",
                        "title10": "Biko Butik",
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
                        "old" : "(Old design)",
                        "description10": "Biko Butik - business card website for online shop.", 
                        "description9": "Sers - A website developed on request for a Spanish web development company. Development time - 50 hours.",  
                        "description8": "Sketch2Site Development - A website created for an international web development company.",  
                        "description7": "Batumi Racing Club - A website built for a Georgian karting track, the largest karting track in Europe.",  
                        "description6": "Manipura - A business card website for a yoga center.",  
                        "description5": "Meat Hammer Site - A company where I worked since 2020. This is its corporate website.",  
                        "description4": "People Tobacco - A website for a company that produces hookah tobacco.",  
                        "description3": "Fair Partner - A website for the Polish company Fair Partner. A joint project with Meat Hammer Studio.",  
                        "description2": "Konstruct - A basic website that is a standard part of any portfolio.",  
                        "description1": "Denis Portfolio - A basic website that is a standard part of any portfolio."  

                    },
                    InfoPage:{
                        "titleLocation": "Location",
                        "titleContact": "Contact",
                        "location": "Ivano-Frankivsk, Ukraine",
                        "description1" : "I specialise in front-end development. Being independent, I work with small to large companies, startups, design studios, and creative individuals globally.",
                        "description2" : "With 5+ years of dedicated experience, I have been involved with crafting digital experiences that captivate and engage. I focus on interaction and offer a meticulous approach to detail-oriented development. I genuinely relish bringing ideas to life, transforming them into bespoke, user-friendly and aesthetically pleasing websites.",
                        "description3" : "But above all, my biggest passion is forming strong working relationships and genuine bonds with other like-minded, creative people."
                    },
                    modal: {
                        "ID": "Id",
                        "Year": "Year",
                        "Design": "Design",
                        "Role": "Role",
                        "Tags": "Tags",
                        "Platform": "Platform",
                        "Type": "Type",
                        "URL": "URL",
                    },
                    certificate: {
                        title1: "Blockchain Foundation",
                        title2: "Introduction to ESIO - Non-technical",
                        title3: "Introduction to ESIO - Technical",
                        title4: "ESIO Developer Envirinment Setup",
                        title5: "Marketing IT-product",
                        title6: "Responsive Web Design",
                        title7: "Front End Development Libraries",
                        title8: "Data Visualization",
                        title9: "Legacy JavaScript Algorithms and Data Structures",
                    }
                },
            },
            uk: {
                translation: {
                    navMenu: {
                        "logo": "Андрій Жуков",
                        "link1": "Фронт-енд\n" +
                            "Розробник",
                        "link2": "Головна",
                        "link3": "Інформація",
                        "link4": "Сертифікати",
                        "link5": "English",
                        "link6": "Українська",
                        "link7": "руский",
                    },
                    theme: {
                        "dark" : "Темний режим",
                        "light" : "Світлий режим",
                    },
                    portfolioCard: {
                        "title1": "Denis Portfolio", //1
                        "title2": "Konstruct", //2
                        "title3": "Fair Partner", //3
                        "title4": "People Tobacco", //4
                        "title5": "Meat Hammer Site",//5
                        "title6": "Manipura", //6
                        "title7": "Batumi Racing Club", //7
                        "title8": "Sketch2Site Development", //8
                        "title9": "Sers",
                        "title10": "Biko Butik",
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
                        "old" : "(Старий дизайн)",
                        "description10": "Biko Butik - сайт візитка для інтернет магазину.", 
                        "description9" : "Sers - Сайт виконаний на замовлення іспанської компанії розробки сайтів. Час на розробку - 50 годин. ",
                        "description8" : "Sketch2Site Development - сайт виконаний на замовлення від міжнародної компанії по розробці сайтів. ",
                        "description7" : "Batumi Racing Club - сайт створений для грузинського картодрому - найбільшого картодрому в Європі.",
                        "description6" : "Manipura - сайт візитка для центру йоги. ",
                        "description5" : "Meat Hammer Site - компанія в якій я працював з 2020 року. Саме це є корпоративний сайт.",
                        "description4" : "People Tobacco - сайт для компанії яка виготовляє табак для кальяну. ",
                        "description3" : "Fair Partner - сайт для польскої компанії Fair Partner. Сумістний проект з Meat Hammer Studio",
                        "description2" : "Konstruct - базовий сайт який є в портфоліо у кожного",
                        "description1" : "Denis Portfolio - базовий сайт який є в портфоліо у кожного",
                    },
                    InfoPage:{
                        "titleLocation": "Локація",
                        "titleContact": "Контаки",
                        "location1": "Івано-Франківськ, Україна",
                        "location2": "Херсон, Україна",
                        "description1" : "Я спеціалізуюся на front-end розробці. Будучи незалежним, я працюю з малими та великими компаніями, стартапами, дизайн-студіями та творчими людьми по всьому світу.",
                        "description2" : "Маючи понад 5 роки досвіду, я брав участь у створенні цифрового досвіду, який захоплює та захоплює. Я зосереджуюсь на взаємодії та пропоную ретельний підхід до розробки, орієнтованої на деталі. Мені щиро подобається втілювати ідеї в життя, перетворюючи їх на індивідуальні, зручні та естетично привабливі веб-сайти.",
                        "description3" : "Але, перш за все, моєю найбільшою пристрастю є формування міцних робочих стосунків і справжніх зв’язків з іншими однодумцями, творчими людьми."
                    },
                    modal: {
                        "ID": "Id",
                        "Year": "Рік",
                        "Design": "Дизайн",
                        "Role": "Роль",
                        "Tags": "Тег",
                        "Platform": "Платформа",
                        "Type": "Тип",
                        "URL": "Посилання",
                        "description" : "Опис",
                    },
                    certificate: {
                        title1: "Blockchain Foundation",
                        title2: "Introduction to ESIO - Non-technical",
                        title3: "Introduction to ESIO - Technical",
                        title4: "ESIO Developer Envirinment Setup",
                        title5: "Marketing IT-product",
                        title6: "Responsive Web Design",
                        title7: "Front End Development Libraries",
                        title8: "Data Visualization",
                        title9: "Legacy JavaScript Algorithms and Data Structures",
                    }
                },
            },
            ru: {
                translation: {
                    navMenu: {
                        "logo": "Андрей Жуков",
                        "link1": "Фронт-енд\n" +
                            "Разработчик",
                        "link2": "Главная",
                        "link3": "Информация",
                        "link4": "Сертификати",
                        "link5": "English",
                        "link6": "Українська",
                        "link7": "руский",
                        "link8": "Темный режим",
                        "link9": "Светлый режим",
                        
                    },
                    theme: {
                        "dark" : "Темный режим",
                        "light" : "Светлый режим",
                    },
                    portfolioCard: {
                        "title1": "Denis Portfolio", //1
                        "title2": "Konstruct", //2
                        "title3": "Fair Partner", //3
                        "title4": "People Tobacco", //4
                        "title5": "Meat Hammer Site",//5
                        "title6": "Manipura", //6
                        "title7": "Batumi Racing Club", //7
                        "title8": "Sketch2Site Development", //8
                        "title9": "Sers",
                        "title10": "Biko Butik",
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
                        "old" : "(Старый дизайн)",
                        "description10": "Biko Butik - сайт визитка для онлайн магазина.",  
                        "description9": "Sers - Сайт, разработанный по заказу испанской компании по созданию сайтов. Время разработки – 50 часов.",  
                        "description8": "Sketch2Site Development - Сайт, созданный по заказу международной компании по разработке сайтов.",  
                        "description7": "Batumi Racing Club - Сайт, созданный для грузинского картодрома, самого большого картодрома в Европе.",  
                        "description6": "Manipura - Визитный сайт для центра йоги.",  
                        "description5": "Meat Hammer Site - Компания, в которой я работал с 2020 года. Это её корпоративный сайт.",  
                        "description4": "People Tobacco - Сайт для компании, производящей табак для кальяна.",  
                        "description3": "Fair Partner - Сайт для польской компании Fair Partner. Совместный проект с Meat Hammer Studio.",  
                        "description2": "Konstruct - Базовый сайт, который есть в портфолио у каждого.",  
                        "description1": "Denis Portfolio - Базовый сайт, который есть в портфолио у каждого."  

                    },
                    InfoPage:{
                        "titleLocation": "Локация",
                        "titleContact": "Контакты",
                        "location": "Ивано-Франковск, Украина",
                        "description1" : "Я специализируюсь на фронтенд-разработке. Будучи независимым, я работаю с небольшими и крупными компаниями, стартапами, дизайн-студиями и творческими личностями по всему миру..",
                        "description2" : "Имея более чем 5-летний опыт работы, я занимаюсь созданием цифровых впечатлений, которые увлекают и привлекают. Я фокусируюсь на взаимодействии и предлагаю тщательный подход к разработке, ориентированной на детали. Мне искренне нравится воплощать идеи в жизнь, превращая их в индивидуальные, удобные и эстетически приятные веб-сайты.",
                        "description3" : "Но, прежде всего, моей самой большой страстью является формирование прочных рабочих отношений и подлинных связей с другими творческими людьми-единомышленниками.."
                    },
                    modal: {
                        "ID": "Id",
                        "Year": "Год",
                        "Design": "Дизайн",
                        "Role": "Роль",
                        "Tags": "Тэг",
                        "Platform": "Платформа",
                        "Type": "Тип",
                        "URL": "Ссылка",
                    },
                    certificate: {
                        title1: "Blockchain Foundation",
                        title2: "Introduction to ESIO - Non-technical",
                        title3: "Introduction to ESIO - Technical",
                        title4: "ESIO Developer Envirinment Setup",
                        title5: "Marketing IT-product",
                        title6: "Responsive Web Design",
                        title7: "Front End Development Libraries",
                        title8: "Data Visualization",
                        title9: "Legacy JavaScript Algorithms and Data Structures",
                    }
                },
            },
        },
    });

export default i18n;
