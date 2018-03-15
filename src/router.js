import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import IndexPage from './components/Login/Login';
import HomePage from './components/Count'
import Test from './components/Test'

function RouterConfig({ history }) {
	return (
		<Router history={history}>
			<TransitionGroup style={styles.routeBox}>
		    	<CSSTransition classNames="fade" timeout={3000}>
					<Switch>
						<Route path="/" exact component={IndexPage} />
						<Route path="/count" exact component={HomePage} />
						<Route path="/Test" exact component={Test} />
					</Switch>
		      </CSSTransition>
			</TransitionGroup>
		</Router>
	);
}

const styles = {}

styles.routeBox={
	width: '100%',
	height: '100%'
}

export default RouterConfig;
