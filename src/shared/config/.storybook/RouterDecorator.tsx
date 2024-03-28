// import {createRouter, RouterProvider} from '@tanstack/react-router';
// import {Decorator} from '@storybook/react';
// import 'app/styles/index.scss';

// const routes = createRouter({});

// const RouterDecorator: Decorator = (Story) => {
// 	return (
// 		<RouterProvider router={routes}>
// 			<Story />
// 		</RouterProvider>
// 	);
// };

// export default RouterDecorator;

import {
	RouterProvider,
	createFileRoute,
	createMemoryHistory,
	createRootRoute,
	createRouter,
} from '@tanstack/react-router';
import {routeTree} from 'routeTree.gen';

// const rootRoute = createRootRoute();
// const indexRoute = createFileRoute('/')({
// 	component: () => rootRoute,
// });
const memoryHistory = createMemoryHistory({initialEntries: ['/']});
// const routeTree = rootRoute.addChildren([indexRoute]);
const router = createRouter({routeTree, history: memoryHistory});

// @ts-ignore todo maybe soon a better solution for this?
const RouterDecorator: Preview['decorators'][0] = (Story, context) => {
	return (
		<RouterProvider
			router={router}
			defaultComponent={
				() => <Story {...context} />
			}
	/>);
};

export default RouterDecorator;
