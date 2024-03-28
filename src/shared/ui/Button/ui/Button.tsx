import type {ButtonHTMLAttributes, FC, ReactNode} from 'react';

import {LinariaClassName, css, cx} from '@linaria/core';
import {styled} from '@linaria/react';

import * as styles from './Button.styles';

interface ButtonStyledProps extends React.HTMLAttributes<HTMLButtonElement> {
	buttonKind?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	theme?: string;
}
const ButtonStyled = styled.button<ButtonStyledProps>`
	${styles.Button};
`;

export const enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}
export const enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
}
const Button: FC<ButtonProps> = (props) => {
	const {className, children, theme, square = false, size = ButtonSize.M, ...rest} = props;
	
	let btnKind: LinariaClassName;
	switch (theme) {
		case ButtonTheme.CLEAR: 
			btnKind = css`${styles.clear}`;
			break;
		case ButtonTheme.CLEAR_INVERTED:
			btnKind = css`${styles.clearInverted}`;
			break;
		case ButtonTheme.BACKGROUND:
			btnKind = css`${styles.background}`;
			break;
		case ButtonTheme.OUTLINE:
			btnKind = css`${styles.outline}`;
			break;
		case ButtonTheme.BACKGROUND_INVERTED:
			btnKind = css`${styles.backgroundInverted}`;
			break;
	
		default:
			btnKind = css`${styles.outline}`;
			break;
	}

	let sizeBtn: LinariaClassName;
	let squareBtn: LinariaClassName;
	if (square && size) {
		switch (size) {
			case ButtonSize.L:
				sizeBtn = square ? css`${styles.square_size_l}` : css`${styles.size_l}`;
				break
			case ButtonSize.XL:
				sizeBtn = square ? css`${ styles.square_size_xl }` : css`${ styles.size_xl }`
				break;
					
			default: /* M */
				sizeBtn = square ? css`${ styles.square_size_m }` : css`${ styles.size_m }`
				break;
		}
		
	} else if (square) {
		squareBtn = square && css`${ styles.square }`;
	}
	
	return (
		<ButtonStyled type="button" className={cx(btnKind, squareBtn, sizeBtn, className) } {...rest}>
			{children}
		</ButtonStyled>
	);
};

export default Button;
