import {css} from '@linaria/core';
import {stylesVariables} from './stylesVariables';

export const global = `
		:root {
			--font-size-base: ${stylesVariables.default.fontSizes['24']};
			--font-size-m: ${stylesVariables.default.fontSizes['16']};
			--font-line-m: ${stylesVariables.default.space['24']};
			--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);
			--font-size-l: var(--font-size-base);
			--font-line-l: 32px;
			--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);
			--font-size-xl: ${stylesVariables.default.fontSizes['32']};
			--font-line-xl: ${stylesVariables.default.fontSizes['48']};
			--font-xl: var(--font-size-xl) / var(--font-line-xl) var(--font-family-main);
			--rem: var(--font-size-base);

			--font-family-main: ${stylesVariables.default.fonts.primary};

			/* Sizes */
			--navbar-hight: 50px;
			--sidebar-width: 300px;
			--sidebar-width-collapsed: 80px;

			/* z-index */
			--modal-z-index: 10;

			/* Colors */
			--overlay-color: rgb(0 0 0 / 60%);

		}
`;
