import {LinariaClassName} from '@linaria/core';

export const combineStyles = (...styles: LinariaClassName[]): string => {
	return styles.join(' ');
};
