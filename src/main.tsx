// import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
// import App from 'app/App';
import ErrorBoundary from 'app/providers/ErrorBoundry/ui/ErrorBoundry';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import {Theme} from 'app/providers/ThemeProvider';
import {RouterProvider, createRouter} from '@tanstack/react-router';
import { routeTree } from './routeTree.gen'

export const router = createRouter({routeTree})

document.body.className = Theme.LIGHT;

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
		<ErrorBoundary>
			<ThemeProvider>
				<RouterProvider router={router} />
				{/* <App /> */}
			</ThemeProvider>
		</ErrorBoundary>
);
