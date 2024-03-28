// import {lazy} from 'react';

// export const AboutPageAsync = lazy(async () => await import('./AboutPage'));

import { createLazyFileRoute } from '@tanstack/react-router'
import type {FC} from 'react';
import {useTranslation} from 'react-i18next';

const AboutPage: FC = () => {
	const {t} = useTranslation('about');
	
	return (
		<div>{t('About Page')}</div>
	);
};

export const Route = createLazyFileRoute('/about')({
  component: AboutPage,
})
