import home from './home';
import login from './login';
import movie from './movie';
import nav from './nav';

import config from './../config';

const TranslationsArray = [home, login, movie, nav];
const finalTranslations = {};

const supportedLang = config.supportedLang;

supportedLang.map(locale => {
    finalTranslations[locale] = {}
});

TranslationsArray.forEach(translationBlock => {
    supportedLang.forEach(lang => {
        finalTranslations[lang] = {
            ...finalTranslations[lang],
            ...translationBlock[lang]
        }
    });
});


export default finalTranslations;
