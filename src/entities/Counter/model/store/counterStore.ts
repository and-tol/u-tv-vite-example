import type {CounterStoreSchema} from 'entities/Counter';
import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

const useCounterStore = create<CounterStoreSchema>()(
	devtools(
		(set) => ({
			count: 0,
			controls: {
				increment: () => set((state) => ({count: state.count + 1}), false, 'increment'),
				decrement: () => set((state) => ({count: state.count - 1}), false, 'decrement'),
			},
		}),
		{name: 'CounterStore', store: 'CounterStore'}
	)
);

export default useCounterStore;
