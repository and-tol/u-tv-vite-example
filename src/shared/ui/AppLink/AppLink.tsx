import type {FC, ReactNode} from 'react';
import {Link, LinkProps} from '@tanstack/react-router';
import {cx} from '@linaria/core';

import * as styles from './AppLink.styles';

export const enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}

interface AppLinkCustomProps {
	children?: ReactNode;
	className?: string;
	theme: AppLinkTheme;
}

type AppLinkProps = AppLinkCustomProps & LinkProps;

const AppLink: FC<AppLinkProps> = (props) => {
	const {children, className, to, theme, ...restProps} = props;

	return (
		<Link to={to} className={cx(styles.AppLink, styles[theme], className)} {...restProps}>
			{children}
		</Link>
	);
};
export default AppLink;
