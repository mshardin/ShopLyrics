require("normalize.css/normalize.css");
require("styles/App.css");

var logo = require("../images/logo.svg");

import React from "react";
import { Link } from "react-router";
import { Nav, NavItem, Grid, Row, Col, Button } from "react-bootstrap";

import Header from "./Header";
import ProductList from "./ProductList";

import products from "../data/products";

class Products extends React.Component {
	constructor() {
		super();
		this.state = {
			activeNavLink: 1,
			activeSocialLink: 1
		};
	}
    render() {
    	// console.log(this.props.location.query.style);
	    return (
		    <div>
		    	<Header pathname={this.props.location.pathname} />
		    	<Row style={{ margin: "85px 0 0px 0", background: "rgba(0,0,0,0.01)" }}>
		    		<ProductList products={products} />
		    	</Row>
		    	<div className="yButtonTextStep pull-right">
			    	<Button 
			    		bsStyle="default"
			    		bsSize="large"
			    		className="yButton"
			    	>
			    		Customize Your Shirt
			    	</Button>
			    	<p 
			    		className="text-center"
			    		style={{
			    			color: "#424242"
			    		}}
			    	>
			    		Go To Step 2
			    	</p>
		    	</div>
		    </div>
	    );
    }
}

Products.defaultProps = {
};

export default Products;