import {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

interface UseThemeReturn {
	toggleTheme: () => void;
	theme: Theme;
}
function useTheme(): UseThemeReturn {
	const {theme, setTheme} = useContext(ThemeContext);

	const toggleTheme = (): void => {
		let newTheme: Theme;
		switch (theme) {
			/* eslint-disable */
			case Theme.DARK:
				newTheme = Theme.LIGHT;
				break;
			case Theme.LIGHT:
				newTheme = Theme.DARK;
				break;

			default:
				newTheme = Theme.LIGHT;
		}
		/* eslint-enable */
		setTheme?.(newTheme);
		document.body.className = newTheme; // при изменении темы изменяется класс body, который задается в css файле
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};
	return {toggleTheme, theme};
}
export default useTheme;
