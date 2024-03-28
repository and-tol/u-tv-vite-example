import {styled} from '@linaria/react';
import {createRootRoute, Outlet} from '@tanstack/react-router';
import {Suspense} from 'react';
import {Navbar} from 'widgets/Navbar';
import PageLoader from 'widgets/PageLoader/PageLoader';
import {Sidebar} from 'widgets/Sidebar';

import '../app/styles/styles';

const Content = styled.main`
	display: flex;
`;

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="app">
				<Suspense fallback="">
					<Navbar />
					<Content className="content-page">
						<Sidebar />

						<Outlet />
					</Content>
				</Suspense>
			</div>
			{/* <App /> */}
			{/* <TanStackRouterDevtools /> */}
		</>
	),
});
