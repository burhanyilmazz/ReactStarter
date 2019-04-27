import React, {useReducer} from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './stores/';

import App from './components/App';

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('chatbot-root')
);
