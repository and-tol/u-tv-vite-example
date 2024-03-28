import type {FC, ReactElement} from 'react';

import {Theme, useTheme} from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonKind} from '..';


interface ThemeSwitcherProps {
	children?: never,
	className?: string,
}
const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
	const {theme, toggleTheme} = useTheme();

	let icon: ReactElement;
	switch (theme) {
	/* eslint-disable */
		case Theme.DARK:
			icon = <DarkIcon />;
			break;
		case Theme.LIGHT:
			icon = <LightIcon />;
			break;

		default:
			icon = <LightIcon />;
			break;
		/* eslint-enable */
	}

	return (
		<Button
			theme={ButtonKind.CLEAR}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			<>{icon}</>
		</Button>
	);
};
export default ThemeSwitcher;
