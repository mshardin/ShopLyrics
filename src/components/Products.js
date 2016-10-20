require("normalize.css/normalize.css");
require("styles/App.css");

var logo = require("../images/logo.svg");

import React from "react";
import { Link } from "react-router";
import { Nav, NavItem, Grid, Row, Col, Button } from "react-bootstrap";

import Header from "./Header";
import ProductList from "./ProductList";
import SpecialPreview from "./SpecialPreview";

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
	    return (
		    <div>
		    	<Header pathname={this.props.location.pathname} />
		    	<SpecialPreview />
		    	<Row style={{ margin: "85px 0 0px 0", background: "rgba(0,0,0,0.01)" }}>
		    		<h1 className="text-center" style={{padding:"0px 0 50px 0", color:"#424242"}}>Featured</h1>
		    		<ProductList products={products} style={this.props.location.query.style} />

		    		<div className="yButtonTextStep pull-right">
				    	<Button 
				    		bsStyle="default"
				    		bsSize="large"
				    		className="yButton"
				    	>
				    		Customize Your Apparel
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
		    	</Row>
		    </div>
	    );
    }
}

Products.defaultProps = {
};

export default Products;