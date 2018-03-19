import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import IndexPage from './routes/Login/login';
import HomePage from './components/Count'
import Test from './components/Test'
import Home from './routes/Home/home'

function RouterConfig({ history }) {
	return (
		<Router history={history}>
			<TransitionGroup style={styles.routeBox}>
		    	<CSSTransition classNames="fade" timeout={3000}>
					<Switch>
						<Route path="/" exact component={IndexPage} />
						<Route path="/count" exact component={HomePage} />
						<Route path="/test" exact component={Test} />
						<Route path="/home" exact component={Home} />
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
