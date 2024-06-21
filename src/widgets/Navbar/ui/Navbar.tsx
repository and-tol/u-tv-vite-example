import {cx} from '@linaria/core';
import {styled} from '@linaria/react';
import type {FC, ReactNode} from 'react';
import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {LoginModal} from 'features/AuthByUsername';
import {Button, ButtonTheme} from 'shared/ui';
import * as styles from './Navbar.styles';
import {getUserAuthData, logoutUser} from 'entities/User';

const NavbarStyled = styled.section`
	width: 100%;
	height: var(--navbar-hight);
	background-color: var(--inverted-bg-color);
	align-items: center;
	padding: 20px;
	display: flex;
`;
interface NavbarProps {
	children?: ReactNode;
	className?: string;
}
const Navbar: FC<NavbarProps> = ({children, className}) => {
	const {t} = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
	const {id, username} = getUserAuthData();

	const onCloseModal = useCallback((): void => {
		setIsAuthModal(false);
	}, []);
	const onShowModal = useCallback((): void => {
		setIsAuthModal(true);
	}, []);
	const onLogout = useCallback((): void => {
		logoutUser();
		setIsAuthModal(false);
	}, []);

	console.log(!Boolean(id.length || username.length))
	
	return (
		<NavbarStyled className={cx(className)}>
			{children}
			{!Boolean(id.length || username.length) ? (
				<Button theme={ButtonTheme.CLEAR_INVERTED} className={cx(styles.links)} onClick={onShowModal}>
					{t('Input')}
				</Button>
			) : (
				<Button theme={ButtonTheme.CLEAR_INVERTED} className={cx(styles.links)} onClick={onLogout}>
					{t('Logout')}
				</Button>
			)}
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</NavbarStyled>
	);
};

export default Navbar;
