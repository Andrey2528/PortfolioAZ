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
        fallbackLng: ["en", "ru", "ua"], // порядок відображення замовчуваних мов
        detection: { order: ["cookie"], cache: ["cookie"] },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    "logo": "Andrey Zhukov",
                    navMenu: {
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
                    }

                },
            },
            uk: {
                translation: {
                    "Logo": "Андрій Жуков",
                    navMenu: {
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
                    }
                },
            },
            ru: {
                translation: {
                    "Logo": "Андрей Жуков",
                    navMenu: {
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
                    }
                },
            },
        },
    });

export default i18n;
