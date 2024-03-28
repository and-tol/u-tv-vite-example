import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';
import {expect, afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
	cleanup();
});

// import '@testing-library/jest-dom/extend-expect';
// import '@testing-library/jest-dom/vitest'
// vi.mock('zustand'); // to make it works like Jest (auto-mocking)
