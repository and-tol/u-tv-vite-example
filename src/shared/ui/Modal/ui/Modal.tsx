import {useCallback, useEffect, useRef, useState, type FC, type ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {styled} from '@linaria/react';
import {css, cx} from '@linaria/core';

import Portal from 'shared/ui/Portal/Portal';
// import cls from './Modal.module.scss';
import * as styles from './Modal.styles';

const ModalStyled = styled.div`
	position: fixed;
	inset: 0;
	opacity: 0;
	pointer-events: none;
	z-index: -1;
	color: var(--primary-color);


	&[data-open='true'] {
		pointer-events: auto;
		opacity: 1;
		z-index: var(--modal-z-index);
	}
`;
const Overlay = styled.div`
	width: 100%;
	height: 100%;
	background-color: var(--overlay-color);
	display: grid;
	place-items: center;
`;
const Content = styled.div`
	padding: 20px;
	border-radius: 0.75rem;
	background-color: var(--bg-color);
	transition: 0.3s transform ease-in-out;
	transform: scale(0.5);
	max-width: 60%;
	
	[data-close='true'] & {
			transform: scale(0.2);
	}
	[data-open='true'] & {
		transform: scale(1);
	}
`;

interface ModalProps {
	children?: ReactNode;
	className?: string;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}
const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = ({children, className, isOpen, onClose, lazy}) => {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	// const mods: Record<string, boolean> = {
	// 	[cls.opened]: isOpen,
	// 	[cls.isClosing]: isClosing,
	// };
	const mods = cx(isOpen && styles.opened, isClosing && styles.isClosing, className);


	const closeHandler = useCallback((): void => {
		if (onClose) {
			setIsClosing(true);

			timerRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, ANIMATION_DELAY);
		}
	}, [onClose]);

	const onContentClick = (e: React.MouseEvent): void => {
		e.stopPropagation();
	};

	const onKeyDown = useCallback(
		(e: KeyboardEvent): void => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<ModalStyled
				data-close={isClosing} data-open={isOpen}
				// className={classNames(cls.Modal, mods, [className])}
				className={cx(className)}
			>
				<Overlay onClick={closeHandler} role="button">
					<Content onClick={onContentClick} role="button">
						{children}
					</Content>
				</Overlay>
			</ModalStyled>
		</Portal>
	);
};
export default Modal;
