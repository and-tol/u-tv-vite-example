import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

/* eslint-disable */
// i18n.use(initReactI18next).init({
// 	lng: 'en',
// 	fallbackLng: 'en',

// 	// have a common namespace used around the full app
// 	// ns: ['translations'],
// 	// default: 'translations',

// 	debug: false,

// 	interpolation: {
// 		escapeValue: false, // not needed for react!!
// 	},

// 	resources: {en: {translations: {}}},
// });
/* eslint-enable */

// eslint-disable-next-line @typescript-eslint/no-floating-promises
const initializeI18n = async (): Promise<void> => {
	try {
		await i18n.use(initReactI18next).init({
			lng: 'en',
			fallbackLng: 'en',
			debug: false,
			interpolation: {
				escapeValue: false, // not needed for react!!
			},
			resources: {en: {translations: {}}},
		});
	} catch (error) {
		// Handle initialization error here
		console.error('Error initializing i18n:', error);
	}
};

// Вызовите функцию для инициализации i18n
initializeI18n();

export {i18n as i18nforTest};
