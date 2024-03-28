import {css, cx} from '@linaria/core';
import {styled} from '@linaria/react';
import {startTransition, type FC} from 'react';
import {useTranslation} from 'react-i18next';

import {Button} from 'shared/ui';
import {ButtonTheme} from 'shared/ui/Button/ui/Button';

const LanguageSwitcherStyled = styled.div`
	display: flex;
	gap: 8px;
	align-items: flex-start;

	button {
		transition: color 0.2s;
		color: var(--primary-color);
		text-transform: capitalize;

		&:hover {
			color: var(--secondary-color);
		}
	}
`;

const column = css`
	flex-direction: column;
`;

interface LanguageSwitcherProps {
	children?: never;
	className?: string;
	isColumn?: boolean;
}
const LanguageSwitcher: FC<LanguageSwitcherProps> = ({isColumn = false, className}) => {
	const {i18n} = useTranslation();

	const toggleLanguage = (lang: string): void => {
		startTransition(() => {
			/* eslint-disable @typescript-eslint/no-floating-promises */
			i18n.changeLanguage(lang);
		});
	};

	/*
	const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
	const getUserLanguage = () => window.navigator.userLanguage || window.navigator.language;
	window.navigator.language works for most of the modern browsers but to be on the safe side adding window.navigator.userLanguage
	https://github.com/prajun7/react-till-now/blob/main/src/modules/I18n/index.ts#L1
*/
	return (
		<LanguageSwitcherStyled className={cx(isColumn && column, className)}>
			<Button
				onClick={() => {
					toggleLanguage('en');
				}}
				theme={ButtonTheme.CLEAR}
			>
				{/* eslint-disable i18next/no-literal-string */}
				en
			</Button>
			<Button
				onClick={() => {
					toggleLanguage('ru');
				}}
				theme={ButtonTheme.CLEAR}
			>
				{/* eslint-disable i18next/no-literal-string */}
				ru
			</Button>
		</LanguageSwitcherStyled>
	);
};
export default LanguageSwitcher;
