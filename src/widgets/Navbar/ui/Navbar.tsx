import {cx} from '@linaria/core';
import {styled} from '@linaria/react';
import type {FC, ReactNode} from 'react';
import {useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

// import {LoginModal} from 'features/AuthByUsername';
import {LoginModal} from 'features/AuthByUsername';
import {Button, ButtonKind} from 'shared/ui';
import * as styles from './Navbar.styles';

const NavbarStyled = styled.section`
	width: 100%;
	height: var(--navbar-hight);
	background-color: var(--inverted-bg-color);
	align-items: center;
	padding: 20px;
	display: flex;
`
interface NavbarProps {
	children?: ReactNode,
	className?: string,
}
const Navbar: FC<NavbarProps> = ({children, className}) => {
	const {t} = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

	const onCloseModal = useCallback((): void => {
		setIsAuthModal(false);
	}, []);
	const onShowModal = useCallback((): void => {
		setIsAuthModal(true);
	}, []);

	return (
		<NavbarStyled className={cx(className)}>
			{children}
			<Button
				theme={ButtonKind.CLEAR_INVERTED}
				className={cx(styles.links)}
				onClick={onShowModal}
			>
				{t('Input')}
			</Button>
			<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
		</NavbarStyled>
	);
};

export default Navbar;
