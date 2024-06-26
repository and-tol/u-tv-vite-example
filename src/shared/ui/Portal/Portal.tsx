import type {FC, ReactNode} from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
	children: ReactNode;
	element?: HTMLElement;
}
const Portal: FC<PortalProps> = ({children, element = document.body}) => {
	return createPortal(children, element);
};
export default Portal;
