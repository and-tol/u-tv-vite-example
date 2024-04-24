import type {ChangeEvent, FC, InputHTMLAttributes} from 'react';
import {memo, useEffect, useRef, useState} from 'react';
import {styled} from '@linaria/react';

const InputWrapperStyled = styled.div`
	display: flex;
`;
const LabelStyled = styled.label`
	margin-inline-end: 5px;
`;
const CaretWrapperStyled = styled.div`
	flex-grow: 1;
	position: relative;
`;
const CaretStyled = styled.span`
	position: absolute;
	height: 3px;
	width: 9px;
	background-color: var(--primary-color);
	bottom: 0;
	left: 0;
	animation: blink 0.7s forwards infinite;

	@keyframes blink {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 0.01;
		}

		100% {
			opacity: 1;
		}
	}
`;

const InputStyled = styled.input`
	background-color: transparent;
	border: none;
	outline: none;
	width: 100%;
	caret-color: transparent;
	color: var(--primary-color);

	/*
  text-shadow: 0 0 0 var(--primary-color);
	*/

	&:focus {
		outline: none;
	}
`;

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface InputProps extends HTMLInputProps {
	children?: never;
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	type?: string;
	label?: string;
	autofocus?: boolean;
}
const Input: FC<InputProps> = memo(
	({
		className = '',
		value = '',
		onChange,
		type = 'text',
		label = '',
		autofocus = false,
		...otherProps
	}) => {
		const ref = useRef<HTMLInputElement>(null);
		const [isFocused, setIsFocused] = useState<boolean>(false);
		const [caretPosition, setCaretPosition] = useState<number>(0);

		useEffect(() => {
			if (autofocus) {
				setIsFocused(true);
				ref.current?.focus();
			}
		}, [autofocus]);

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
			onChange?.(e.target.value);
			setCaretPosition(e.target.value.length);
		};
		const onBlur = (): void => {
			setIsFocused(false);
		};
		const onFocus = (): void => {
			setIsFocused(true);
		};
		// eslint-disable-next-line
		const onSelect = (e: any): void => {
			// eslint-disable-next-line
			setCaretPosition(e?.target?.selectionStart! || 0);
		};

		return (
			<InputWrapperStyled>
				{label && <LabelStyled>{`${label}>`}</LabelStyled>}
				<CaretWrapperStyled>
					<InputStyled
						ref={ref}
						type={type}
						value={value}
						onChange={onChangeHandler}
						className={className}
						onFocus={onFocus}
						onBlur={onBlur}
						onSelect={onSelect}
						{...otherProps}
					/>
					{isFocused && <CaretStyled style={{left: `${caretPosition * 9}px`}} />}
				</CaretWrapperStyled>
			</InputWrapperStyled>
		);
	}
);
export default Input;
