import createRoutes from 'common/routes';
import createStore from 'common/store';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
	Provider,
} from 'react-redux';
import {
	browserHistory,
	Router,
} from 'react-router';
import {
	syncHistoryWithStore,
} from 'react-router-redux';

const store = createStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(history);
const DOMelement = document.getElementById('root');

ReactDOM.render((
	<Provider store={store}>
		<Router
			history={history}
			routes={routes}
		/>
	</Provider>
), DOMelement);