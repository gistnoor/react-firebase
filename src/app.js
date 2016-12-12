import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './components/App';




ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} />
    </Router>
    , document.getElementById('app'));


// Router.run(routes, Router.HistoryLocation, Root => 
//     React.render(<Root />, document.getElementById('app')));
