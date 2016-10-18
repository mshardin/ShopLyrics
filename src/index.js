import "core-js/fn/object/assign";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import App from "./components/App";
import Index from "./components/Index";
import Products from "./components/Products";
import ProductPage from "./components/ProductPage";

const routes = (
	<Router history={ browserHistory } >
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="products" component={Products} />
			<Route path="/product/:slug" component={ProductPage} />
		</Route>
	</Router>
);

// Render the main component into the dom
ReactDOM.render(routes, document.getElementById("app"));
