/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type {TestingLibraryMatchers} from '@testing-library/jest-dom/matchers';

// declare global {
// 	namespace jest {
// 		type Matchers<R = void, T = {}> = TestingLibraryMatchers<typeof expect.stringContaining, R>;
// 	}
// }

// declare global {
// 	namespace jest {
// 		interface Matchers<R = void>
// 			extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
// 	}
// }

// type CustomMatchers<R = unknown> = TestingLibraryMatchers<typeof expect.stringContaining, R>;

// declare global {
// 	namespace Vi {
// 		interface Assertion extends CustomMatchers {}
// 		interface AsymmetricMatchersContaining extends CustomMatchers {}
// 	}
// }

// declare global {
//   const suite: typeof import('vitest')['suite']
//   const test: typeof import('vitest')['test']
//   const describe: typeof import('vitest')['describe']
//   const it: typeof import('vitest')['it']
//   const expectTypeOf: typeof import('vitest')['expectTypeOf']
//   const assertType: typeof import('vitest')['assertType']
//   const expect: typeof import('vitest')['expect']
//   const assert: typeof import('vitest')['assert']
//   const vitest: typeof import('vitest')['vitest']
//   const vi: typeof import('vitest')['vitest']
//   const beforeAll: typeof import('vitest')['beforeAll']
//   const afterAll: typeof import('vitest')['afterAll']
//   const beforeEach: typeof import('vitest')['beforeEach']
//   const afterEach: typeof import('vitest')['afterEach']
// }
