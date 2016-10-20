import "core-js/fn/object/assign";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import App from "./components/App";
import Index from "./components/Index";
import Products from "./components/Products";
import ProductDisplay from "./components/ProductDisplay";
import SpecialDisplay from "./components/SpecialDisplay";

const routes = (
	<Router history={ browserHistory } >
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="products" component={Products} />
			<Route path="/product/:slug" component={ProductDisplay} />
			<Route path="/special/:slug" component={SpecialDisplay} />
		</Route>
	</Router>
);

// Render the main component into the dom
ReactDOM.render(routes, document.getElementById("app"));
