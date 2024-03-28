import {FC} from 'react';
// import {classNames} from 'shared/lib/classNames/classNames';

import './Loader.css';
import {cx} from '@linaria/core';

interface LoaderProps {
	children?: never;
	className?: string;
}
const Loader: FC<LoaderProps> = ({className}) => {
	return (
		<div
			// className={classNames('lds-ellipsis', {}, [className])}
			className={cx('lds-ellipsis', className)}
		>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};
export default Loader;
