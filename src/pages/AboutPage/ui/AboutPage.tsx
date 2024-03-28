import type {FC} from 'react';
import {useTranslation} from 'react-i18next';

const AboutPage: FC = () => {
	const {t, ready} = useTranslation('about', {useSuspense: false});

	if (!ready) return <div>...loading!</div>;

	return (
		<>
			<div>{t('About Page')}</div>
		</>
	);
};

export default AboutPage;
