import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDeteactor from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend)
    .use(LanguageDeteactor)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: "/aserts/i18n/{{ns}}/{{lng}}.json"
        },
        fallbacking:"en",
        debug:false,
        ns:["common", "dashboard","safetyTalk","projectTable"],

        interpolation:{
            escapeValue:false,
            formatSeparator:",",
        },
        react:{
            wait:true,
        },
    });

    export default i18n;