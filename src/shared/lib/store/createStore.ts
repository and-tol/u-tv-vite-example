import {StateCreator, StoreApi, UseBoundStore, create} from 'zustand';
import {devtools} from 'zustand/middleware';
// import {immer} from 'zustand/middleware/immer';
import {createWithEqualityFn} from 'zustand/traditional';

export const equalityFn = <T>(a: T, b: T): boolean => JSON.stringify(a) === JSON.stringify(b);

export const createStore = <T>(fn: StateCreator<T>, name: string): UseBoundStore<StoreApi<T>> => {
	if (process.env.NODE_ENV !== 'production') {
		return createWithEqualityFn(devtools(fn, {name}), equalityFn);
	}

	return create(fn);
};
