// import * as zustand from 'zustand';
// import {act} from '@testing-library/react';
// import {vi} from 'vitest';

// async function loadZustand() {
// 	const {create: actualCreate, createStore: actualCreateStore} = await vi.importActual<
// 		typeof zustand
// 	>('zustand');

// 	// a variable to hold reset functions for all stores declared in the app
// 	const storeResetFns = new Set<() => void>();

// 	// when creating a store, we get its initial state, create a reset function and add it to the set
// 	const create = (<T>() => {
// 		console.info('zustand create mock');

// 		return (stateCreator: zustand.StateCreator<T>) => {
// 			const store = actualCreate(stateCreator);
// 			const initialState = store.getState();
// 			storeResetFns.add(() => {
// 				store.setState(initialState, true);
// 			});
// 			return store;
// 		};
// 	}) as typeof zustand.create;

// 	// createStore with a similar implementation for consistency
// 	const createStore = (<T>(stateCreator: zustand.StateCreator<T>) => {
// 		console.info('zustand createStore mock');

// 		const store = actualCreateStore(stateCreator);
// 		const initialState = store.getState();
// 		storeResetFns.add(() => {
// 			store.setState(initialState, true);
// 		});
// 		return store;
// 	}) as typeof zustand.createStore;

// 	// reset all stores after each test run
// 	afterEach(() => {
// 		act(() => {
// 			storeResetFns.forEach((resetFn) => {
// 				resetFn();
// 			});
// 		});
// 	});

// 	return {create, createStore};
// }

// export default loadZustand;
