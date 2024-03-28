import type {FC} from 'react';
import {cx} from '@linaria/core';
import {styled} from '@linaria/react';

import Loader from 'shared/ui/Loader/Loader';


const PageLoaderStyled = styled.div`
		min-height:calc(100vh - var(--navbar-hight));
	display: flex;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
`

interface PageLoaderProps {
	children?: never,
	className?: string,
}
const PageLoader: FC<PageLoaderProps> = ({className = ''}) => {
	return (
		<PageLoaderStyled className={cx(className)}>
			<Loader />
		</PageLoaderStyled>
	);
};
export default PageLoader;
