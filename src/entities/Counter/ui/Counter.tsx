import type {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from 'shared/ui';
import {useShallow} from 'zustand/react/shallow';

import {CounterStoreSchema, useCounterStore} from '..';


interface CounterProps {
	children?: never;
	className?: string;
}
const Counter: FC<CounterProps> = () => {
	const {t} = useTranslation();
	const {count: counterValue, controls} = useCounterStore(useShallow((state: CounterStoreSchema) => ({
		count: state.count,
		controls: state.controls,
	})));

	const increment = (): void => {
		controls.increment();
	};
	const decrement = (): void => {
		controls.decrement();
	};
	return (
		<div data-testid="counter-div">
			<h1 data-testid="value-title">{counterValue}</h1>
			<Button onClick={increment} data-testid="increment-btn">
				{t('increment')}
			</Button>
			<Button onClick={decrement} data-testid="decrement-btn">
				{t('decrement')}
			</Button>
		</div>
	);
};
export default Counter;
