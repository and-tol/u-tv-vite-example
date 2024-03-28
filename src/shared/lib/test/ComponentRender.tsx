import type {RenderResult} from '@testing-library/react';
import {render} from '@testing-library/react';
import type {ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';
import {MemoryRouter} from 'react-router-dom';
import {i18nforTest} from 'shared/config/i18n/i18nforTest';

export interface componentRenderOptions {
	route?: string,
}
function ComponentRender (component: ReactNode, options: componentRenderOptions = {}): RenderResult {
	const {route = '/'} = options;

	return render(
		<MemoryRouter initialEntries={[route]}>
			<I18nextProvider i18n={i18nforTest}>{component}</I18nextProvider>
		</MemoryRouter>,
	);
}

export default ComponentRender;
