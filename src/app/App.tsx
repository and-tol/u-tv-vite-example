import type {FC} from 'react';
import {Suspense} from 'react';

import {styled} from '@linaria/react';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';

import './styles/styles';
// import AppRouter from './providers/router/ui/AppRouter';

const Content = styled.main`
	display: flex;
`


const App: FC = () => {
	// const {theme} = useTheme();
	
	return (
		<div className="app">

			<Suspense fallback="">
				<Navbar />
				<Content className="content-page">
					<Sidebar />
				</Content>
			</Suspense>
		</div>
	);
};
export default App;
