import {StateCreator, StoreApi, UseBoundStore, create} from 'zustand';
import {devtools} from 'zustand/middleware';
// import {immer} from 'zustand/middleware/immer';
/*
The createWithEqualityFn function is a function that creates a store with a given state creator function and name. 
It uses the createWithEqualityFn function from the zustand/traditional module to create the store. 
The createWithEqualityFn function takes two arguments: the state creator function and an equality function. 
The equality function is used to determine if the state has changed and trigger re-renders. 
In this codebase, the equalityFn function is used as the equality function.
*/
import {createWithEqualityFn} from 'zustand/traditional';

export const equalityFn = <T>(a: T, b: T): boolean => JSON.stringify(a) === JSON.stringify(b);

/**
 * Creates a store with the given state creator function and name.
 *
 * @param {StateCreator<T>} fn - The state creator function.
 * @param {string} name - The name of the store.
 * @return {UseBoundStore<StoreApi<T>>} The created store.
 */
export const createStore = <T>(fn: StateCreator<T>, name: string): UseBoundStore<StoreApi<T>> => {
	if (process.env.NODE_ENV !== 'production') {
		return createWithEqualityFn(devtools(fn, {name}), equalityFn);
	}

	return create(fn);
};
