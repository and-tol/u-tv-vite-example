import {Decorator} from '@storybook/react';
// FIXME: Need common styles
// import 'app/styles/index.scss';
import React from 'react';

const StoreDecorator: Decorator = (Story, store) => <Story {...store} />;
export default StoreDecorator;
