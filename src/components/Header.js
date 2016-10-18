require("normalize.css/normalize.css");
require("styles/App.css");

import React from "react";
import { Link } from "react-router";
import { Nav, NavItem, Grid, Row, Col, Button } from "react-bootstrap";

import FontAwesome from "react-fontawesome";

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			activeNavLink: 1,
			activeSocialLink: 1,
			showSocialIcon: true
		};
	}
    handleNavSelect(selectedKey) {
  		this.setState({ activeNavLink: selectedKey });
  	}
  	handleSocialSelect(selectedKey) {
  		this.setState({ activeSocialLink: selectedKey });
  	}
  	renderNavigation() {
  		if (this.props.pathname === "/") {
  			return (
  				<Col md={12}>
  					<div
  						style={{ 
  							display: "flex",
			  				alignItems: "center",
							margin: "25px 0 0 0"
						}}
  					>
			  			<Nav 
			  				bsStyle="pills"
			  				onSelect={this.handleSocialSelect.bind(this)}
			  				className="yNav"
			  				style={{
			  					width: "100%",
			  					float: "left"
			  				}}
			  			>	
						    	<NavItem eventKey={1} href="www.facebook.com/shoplyrics" className="fb-link social-link"><span className="social-text">facebook</span><FontAwesome name="facebook-f" className="social-icon" /></NavItem>
						    	<NavItem eventKey={2} href="www.twitter.com/shoplyrics" className="tw-link social-link"><span className="social-text">twitter</span><FontAwesome name="twitter" className="social-icon" /></NavItem>
						    	<NavItem eventKey={3} href="www.instagram.com/shoplyrics" className="ig-link social-link"><span className="social-text">instagram</span><FontAwesome name="instagram" className="social-icon" /></NavItem>
			  			</Nav>

			  			<Link to="/">
			  				<img src="../images/logo.svg" alt="Shop Lyrics Logo" className="logo" />
			  			</Link>
		  			</div>
			    </Col>
  			)
  		}
  		if (this.props.pathname === "/products") {
	  		return (
				<Col>
					<div 
						style={{ 
							display: "flex",
							alignItems: "center",
							position: "fixed",
							zIndex: "1000",
							width: "100%",
							height: "100px",
							top: "0",
							right: "0",
							left: "0",
							background: "white",
							borderBottom: "1px solid rgba(0,0,0,0.1)",
							padding: "0 25px"
						}}
					>
						<button className="c-hamburger c-hamburger--compress">
							<span>toggle menu</span>
						</button>

						<Link 
							to="/"
							style={{
								display: "block",
								textAlign: "center",
								margin: "0 auto"
							}}
						>
							<img src="../images/logo.svg" alt="Shop Lyrics Logo" className="logo" />
						</Link>

						<div className="pull-right shopping-cart">
							<span>3</span> 
						</div>
					</div>
				</Col>
	  		)
	  	}
  	}
    render() {
	    return (
		    <Grid>
		    	{ this.renderNavigation() }
		    </Grid>
	    );
    }
}

Header.defaultProps = {
};

export default Header;