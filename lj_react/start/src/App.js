import React from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';
import Header from './components/Header';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/home" component={Home} exact />
				<Route path="/list" component={List} />
				<Redirect to="/home" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
