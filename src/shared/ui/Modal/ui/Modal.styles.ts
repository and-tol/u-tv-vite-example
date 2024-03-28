// .Modal {
// 	position: fixed;
// 	inset: 0;
// 	opacity: 0;
// 	pointer-events: none;
// 	z-index: -1;
// 	color: var(--primary-color);
// }

import {css} from '@linaria/core';


export const opened = css`
	pointer-events: auto;
	opacity: 1;
	z-index: var(--modal-z-index);

	.content {
		transform: scale(1);
	}
`

export const isClosing = css` 
	.content {
		transform: scale(0.2);
	}
`
