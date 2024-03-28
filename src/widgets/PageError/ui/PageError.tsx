import type {FC} from 'react';

import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui';
import {styled} from '@linaria/react';
import {cx} from '@linaria/core';

const PageErrorStyled = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

interface PageErrorProps {
	children?: never;
	className?: string;
}
const PageError: FC<PageErrorProps> = ({className = ''}) => {
	const {t} = useTranslation();
	
	const reloadPage = (): void => {
		location.reload();
	};

	return (
		<PageErrorStyled className={cx(className)}>
			<p>{t('There was an unforeseen error')}</p>
			<Button onClick={reloadPage}>{t(' Refresh page')}</Button>
		</PageErrorStyled>
	);
};
export default PageError;
