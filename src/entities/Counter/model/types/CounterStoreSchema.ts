export interface CounterStoreSchema {
	count: number;
	controls: {
		increment: () => void;
		decrement: () => void;
	};
}
