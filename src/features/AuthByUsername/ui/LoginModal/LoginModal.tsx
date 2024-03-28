import type {FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import {Modal} from 'shared/ui/Modal';
import LoginForm from '../LoginForm/LoginForm';

interface LoginModalProps {
	children?: never,
	className?: string,
	isOpen: boolean,
	onClose: () => void,
}
const LoginModal: FC<LoginModalProps> = ({className, isOpen, onClose}) => {
	return (
		<Modal
			className={classNames('', {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<LoginForm />
		</Modal>
	);
};
export default LoginModal;
