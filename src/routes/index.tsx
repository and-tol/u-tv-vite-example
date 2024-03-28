import {createFileRoute} from '@tanstack/react-router';

import {MainPage} from 'pages/MainPage';
import PageLoader from 'widgets/PageLoader/PageLoader';

export const Route = createFileRoute('/')({
	component: Index,
	beforeLoad: () => PageLoader,
});

function Index() {
	return <MainPage />;
}
