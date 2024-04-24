import {cx} from '@linaria/core';
import {styled} from '@linaria/react';
import {useState, type FC} from 'react';
import {useTranslation} from 'react-i18next';

import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import {RoutePath} from 'shared/config/routConfig/routConfig';
import {Button, ButtonSize, ButtonTheme, ThemeSwitcher} from 'shared/ui';
import AppLink, {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import LanguageSwitcher from 'shared/ui/LanguageSwitcher/ui/LanguageSwitcher';

import * as styles from './Sidebar.stiles';


const SidebarStyled = styled.aside`
	height: calc(100vh - var(--navbar-hight));
	width: var(--sidebar-width);
	background-color: var(--inverted-bg-color);
	position: relative;
	transition: width 0.3s;
	display: flex;
	flex-direction: column;
	gap: ${styles.gap};
	padding-inline-start: 1rem;
	
	&[data-collapsed='true'] {
		width: var(--sidebar-width-collapsed);
	}
`;
const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: ${styles.gap};
`
const NavItemText = styled.span`
	[data-collapsed='true'] & {
		opacity: 0;
		transition: opacity 0.2s;
		width: 0;
		height: 0;
	}
`
const Switchers = styled.div`
		[data-collapsed='true'] & {
		/* When sidebar is collapsed */
		flex-direction: column;
		align-items: center;
	}
`

interface SidebarProps {
	children?: never;
	className?: string;
}
const Sidebar: FC<SidebarProps> = ({className = ''}) => {
	const {t} = useTranslation();
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const onToggle = (): void => {
		setCollapsed((prev) => !prev);
	};
	
	return (
		<SidebarStyled
			data-testid="sidebar"
			className={className}
			data-collapsed={collapsed}
		>
			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cx(styles.collapseBtn)}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>

			<Nav className={cx(styles.MainLink)}>
				<AppLink
					to={RoutePath.main}
					theme={AppLinkTheme.PRIMARY}
					className={cx(styles.navItem, styles.link)}
				>
					{/* <MainIcon className={cx(styles.icon)} /> */}
					<MainIcon />
					<NavItemText>{t('Main')}</NavItemText>
				</AppLink>
				<AppLink
					to={RoutePath.about}
					theme={AppLinkTheme.PRIMARY}
					className={cx(styles.navItem, styles.link)}
				>
					{/* <AboutIcon className={cx(styles.icon)} /> */}
					<AboutIcon />
					<NavItemText>{t('About')}</NavItemText>
				</AppLink>
			</Nav>

			<Switchers>
				<ThemeSwitcher />
				<LanguageSwitcher isColumn={collapsed} />
			</Switchers>
		</SidebarStyled>
	);
};
export default Sidebar;
