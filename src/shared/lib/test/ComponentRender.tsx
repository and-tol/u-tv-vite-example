import type {RenderResult} from '@testing-library/react';
import {render} from '@testing-library/react';
import type {ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';
// import {MemoryRouter} from 'react-router-dom';
import {Route, Router, RouterProvider} from '@tanstack/react-router';
import {i18nforTest} from 'shared/config/i18n/i18nforTest';
import {createMemoryHistory, createRouter} from '@tanstack/react-router';
import ReactDOM from 'react-dom';
import React from 'react';

const memoryHistory = createMemoryHistory({
	initialEntries: ['/'], // Set your initial URL here
});
const router = createRouter({
	// ... your route configuration
	history: memoryHistory,

});

// ReactDOM.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

type CustomRouterProps = {
	routes: Route[];
};

// const createCustomRouter = ({routes}: CustomRouterProps) => {
// 	const router = new Router({
// 		routes,

// 		initialEntries: ['/'],
// 	});

// 	return <Route path="/" element={<router.Component />} />;
// };

export interface componentRenderOptions {
	route?: string;
}
function ComponentRender(component: ReactNode, options: componentRenderOptions = {}): RenderResult {
	const {route = '/'} = options;

	return render(
		// <MemoryRouter initialEntries={[route]}>
		// 	<I18nextProvider i18n={i18nforTest}>{component}</I18nextProvider>
		// </MemoryRouter>,
		// <div initialEntries={[route]}>
		<RouterProvider router={router}>
			<I18nextProvider i18n={i18nforTest}>{component}</I18nextProvider>
		</RouterProvider>
		// </div>
	);
}

export default ComponentRender;
