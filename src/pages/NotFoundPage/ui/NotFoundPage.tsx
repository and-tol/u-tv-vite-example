import type {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {styled} from '@linaria/react';
import {cx} from '@linaria/core';

const NotFoundPageStyled = styled.div`
	display: flex;
	justify-self: center;
	align-items: center;
	font: var(--font-l);
`

interface NotFoundPageProps {
	children?: never,
	className?: string,
}
const NotFoundPage: FC<NotFoundPageProps> = ({className}) => {
	const {t} = useTranslation();
	
	return (<NotFoundPageStyled className={cx(className)}>
		{t('Page Not Found')}
	</NotFoundPageStyled>);
};
export default NotFoundPage;
