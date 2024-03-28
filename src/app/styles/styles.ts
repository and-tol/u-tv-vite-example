import {css} from '@linaria/core';

import {reset, global, common, light, dark} from './index';

css`
	:global() {
		${reset}
		${global}
		${common}
			
		.light {
			${light}
		}
		.dark {
			${dark}
		}
	}
`;
