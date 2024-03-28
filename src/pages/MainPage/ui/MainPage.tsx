import {Counter} from 'entities/Counter';
import type {FC} from 'react';
import {useTranslation} from 'react-i18next';

interface MainPageProps {
	children?: never;
}
const MainPage: FC<MainPageProps> = () => {
	const {t} = useTranslation('main');
	
	return (
		<div>
			{t('Main Page')}
			<Counter />
		</div>
	);
};

export default MainPage;
