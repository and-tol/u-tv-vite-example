declare module '*.scss' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}
declare module '*.module.css';

// declare module '*.scss' {
//     const content: Record<string, string>;
//     export default content;
// }

declare module '*.svg' {
	import type React from 'react';
	const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

// declare module "*.svg" {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

/* eslint-disable @typescript-eslint/naming-convention */
declare const __IS_DEV__: boolean;


