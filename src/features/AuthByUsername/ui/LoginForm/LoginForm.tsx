import {cx} from '@linaria/core';
import {styled} from '@linaria/react';
import type {FC} from 'react';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';

import {loginByUsername, setPassword, setUsername, useLoginStore} from 'features/AuthByUsername';
import {LoginStore} from 'features/AuthByUsername/model/types/LoginSchema';
import {Button, Input, Text, TextTheme} from 'shared/ui';
import {ButtonTheme} from 'shared/ui/Button/ui/Button';
import {useShallow} from 'zustand/react/shallow';
import * as styles from './LoginForm.styles';

const LoginFormStyled = styled.div`
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	gap: 0.5rem;
	width: 100%;
`;

interface LoginFormProps {
	children?: never;
	className?: string;
}

const onChangeUsername = (value: string): void => {
	setUsername(value);
};
const onChangePassword = (value: string): void => {
	setPassword(value);
};

const LoginForm: FC<LoginFormProps> = memo(({className}) => {
	const {t} = useTranslation();
	const {username, password, isLoading, error} = useLoginStore(
		useShallow((state: LoginStore) => ({
			username: state.username,
			password: state.password,
			isLoading: state.isLoading,
			error: state.error,
		}))
	);

	const onLoginClick = (): void => {
		loginByUsername({username, password});
	}; // ? useCallback

	return (
		<LoginFormStyled className={cx(className)}>
			<Text title={t('Authorisation form')} />
			{error && <Text theme={TextTheme.ERROR} text={error} />}
			<Input
				label={t('Input Username')}
				type="text"
				className={styles.input}
				onChange={onChangeUsername}
				value={username}
				autofocus
			/>
			<Input
				label={t('Input Password')}
				type="text"
				className={styles.input}
				onChange={onChangePassword}
				value={password}
			/>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={styles.loginBtn}
				onClick={onLoginClick}
				disabled={isLoading}
			>
				{t('Enter')}
			</Button>
		</LoginFormStyled>
	);
});
export default LoginForm;
