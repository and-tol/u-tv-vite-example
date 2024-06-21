import {css} from '@linaria/core';

export const gap = '.5rem';

export const switcher = {
	position: 'absolute',
	bottom: '20px',
	display: 'flex',
	justifyContent: 'center',
	width: '100%',
};

export const Sidebar = {
	height: 'calc(100vh - var(--navbar-hight))',
	width: 'var(--sidebar-width)',
	backgroundColor: 'var(--inverted-bg-color)',
	position: 'relative',
	transition: 'width 0.3s',
	display: 'flex',
	flexDirection: 'column',
	gap,
	paddingInlineStart: '1rem',
};

export const collapseBtn = css`
	position: absolute;
	right: -27px;
	bottom: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const background = {
	backgroundColor: 'var(--bg-color)',
	color: 'var(--primary-color)',
	border: 'none',
};

export const backgroundInverted = {
	backgroundColor: 'var(--inverted-bg-color)',
	color: 'var(--inverted-primary-color)',
	border: 'none',
};

export const MainLink = css`
	margin-inline-end: 1rem;
`;

// const nav = {
// 	display: 'flex',
// 	flexDirection: 'column',
// 	gap: gap,
// };

// export const navItem = {
// 	margin-box: '10px',
// 	display: 'flex',
// 	alignItems: 'center',
// 	gap: gap,
// };
export const navItem = css`
	padding-block: 10px;
	display: flex;
	align-items: center;
	gap: ${gap};
`;

export const icon = css`
	fill: var(--primary-color);
`;

// export const link = {
// 	textDecoration: 'none',

// 	'&:hover': {
// 		color: 'var(--secondary-color)',
// 	},
// };
export const link = css`
	text-decoration: none;

	hover: {
		color: 'var(--secondary-color)';
	}
`;

export const collapsed = {
	width: 'var(--sidebar-width-collapsed)',
};
export const switchers = {
	flexDirection: 'column',
	alignItems: 'center',
};

export const navItemText = {
	opacity: 0,
	transition: 'opacity 0.2s',
	width: 0,
};
