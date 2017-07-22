import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from 'reducers/index';
import './css/common.less';
import 'antd/dist/antd.less'
import Page1 from './components/Page1/index';
import Page2 from './components/Page2/index';

class Application extends Component {
    render () {
        return (
            <div>
                <div className="header">
                    <Link to="page1">page1</Link>
                    <Link to="page2">page2</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Application}>
                <IndexRoute component={Page1}/>
                <Route path="page1" component={Page1}></Route>
                <Route path="page2" component={Page2}></Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));