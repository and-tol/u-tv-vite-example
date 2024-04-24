import {css} from '@linaria/core';
// export const Button= css`
// 	padding: 8px 15px;
// `
export const Button = {
	padding: '8px 15px',
};

export const clear = {
	padding: '0',
	margin: '0',
	border: 'none',
	background: 'none',
	outline: 'none',
};

export const clearInverted = {
	...clear,
	color: 'var(--inverted-primary-color)',
};

export const outline = {
	border: '1px solid var(--primary-color)',
	color: 'var(--primary-color)',
	background: 'none',
};

export const background = {
	background: 'var(--bg-color)',
	color: 'var(--primary-color)',
	border: 'none',
};

export const backgroundInverted = {
	backgroundColor: 'var(--inverted-bg-color)',
	color: 'var(--inverted-primary-color)',
	border: 'none',
};

// export const square = css`
// 	padding: .5rem 1rem;
// `;
export const square = {
	padding: '.5rem 1rem',
};

// export const size_m = css`
// 	font-size: var(--font-size-m);
// `;
export const size_m = {
	fontSize: 'var(--font-size-m)',
};

export const size_l = {
	fontSize: 'var(--font-size-l)',
};
// export const size_l = css`
// 	font-size: '1.5rem',
// `;

export const size_xl = {
	fontSize: 'var(--font-size-xl)',
};

export const square_size_m = {
	...square,
	width: 'var(--font-line-m)',
	height: 'var(--font-line-m)',
	...size_m,
};

// export const square_size_l = css`
// 	${square};
// 	width: var(--font-line-l);
// 	height: var(--font-line-l);
// 	${size_l};
// 	font-size: 1.5rem;
// `;
export const square_size_l = {
	...square,
	width: 'var(--font-line-l)',
	height: 'var(--font-line-l)',
	...size_l,
};

// export const square_size_xl = css`
// 	${square};
// 	width: var(--font-line-xl);
// 	height: var(--font-line-xl);
// 	${size_xl}
// `;
export const square_size_xl = {
	...square,
	width: 'var(--font-line-xl)',
	height: 'var(--font-line-xl)',
	...size_xl,
};

export const disabled = css`
	opacity:.5;
	cursor: initial;
`;
