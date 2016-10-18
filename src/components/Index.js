require("normalize.css/normalize.css");
require("styles/App.css");

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import React from "react";
import { Link } from "react-router";
import { Nav, NavItem, Grid, Row, Col, Button } from "react-bootstrap";

import Header from "./Header";
import ProductPreview from "./ProductPreview";

class Index extends React.Component {
	constructor() {
		super();
		this.state = {
			activeNavLink: 1,
			activeSocialLink: 1
		};
	}
    handleNavSelect(selectedKey) {
  		this.setState({ activeNavLink: selectedKey });
  	}
  	handleSocialSelect(selectedKey) {
  		this.setState({ activeSocialLink: selectedKey });
  	}
    render() {
	    return (
		    <div>
		    	<Header pathname={this.props.location.pathname} />
		    	<Row>
	    			<Col md={12}>
	    				<h4 
	    					className="catchphrase"
	    					style={{
	    						width: "100%",
	    						maxWidth: "650px",
	    						fontSize: "2rem",
	    						textAlign: "center",
	    						margin: "15px auto 0 auto"
	    					}}
	    				>
	    					CUSTOM APPAREL MADE WITH YOUR FAVORITE ARTISTS AND LYRICS
	    				</h4>
	    			</Col>
		    	</Row>

		    	<hr className="separator col-no-marg" />

		    	<Row>
		    		<Col md={12}> 
		    			<h1 
		    				style={{ 
		    					fontSize: "5rem",
		    					textAlign: "center"
		    				}}
		    			>
		    				Chose your style
		    			</h1>
		    		</Col>
		    	</Row>

		    	<ProductPreview />

		    </div>
	    );
    }
}

Index.defaultProps = {
};

export default Index;
