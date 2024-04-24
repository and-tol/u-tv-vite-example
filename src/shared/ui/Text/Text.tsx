import {LinariaClassName, css, cx} from '@linaria/core';
import {styled} from '@linaria/react';
import type {FC} from 'react';

const TextElement = styled.div``;
const Title = styled.p`
	font: var(--font-l);
	color: var(--primary-color);
	margin-block-end: 1rem;
	font-weight: 600;
`;
const TextBody = styled.p`
	font: var(--font-m);
	color: var(--secondary-color);
`;

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

interface TextProps {
	children?: never;
	title?: string;
	text?: string;
	theme?: TextTheme;
}
const Text: FC<TextProps> = ({title, text, theme = TextTheme.PRIMARY}) => {
	let textThemeTitle: LinariaClassName;
	let textThemeTextBody: LinariaClassName;
	switch (theme) {
		case TextTheme.ERROR:
			textThemeTitle = css`
				color: var(--error-color-light);
			`;
			textThemeTextBody = css`
				color: var(--error-color-dark);
			`;
			break;

		default:
			textThemeTitle = css``;
			textThemeTextBody = css``;
			break;
	}
console.log(4,theme)
console.log(5,cx(textThemeTitle))
	return (
		<>
			<TextElement>
				{title && <Title className={cx(textThemeTitle)}>{title}</Title>}
				{text && <TextBody className={cx(textThemeTextBody)}>{text}</TextBody>}
			</TextElement>
		</>
	);
};

export default Text;
